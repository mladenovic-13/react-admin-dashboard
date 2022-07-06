import { Container, HeaderTitle, SubmitButton, UserForm } from "./style";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { FormDataSource } from "../../util/formDataSource";
import { Left, Right } from "./style";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useAppLocation } from "../../hooks/useAppLocation";

interface Props {
  userInputs: FormDataSource[];
}
export type IUploadStatus = "NO_IMAGE" | "UPLOADING" | "UPLOADED";

const New: React.FC<Props> = ({ userInputs }) => {
  // states
  const [file, setFile] = useState<File | null>(null);
  // upload status for disabling submit button
  const [uploadStatus, setUploadStatus] = useState<IUploadStatus>("NO_IMAGE");
  const [data, setData] = useState<{
    email?: string;
    password?: string;
    img?: string;
  }>({});
  const navigate = useNavigate();
  const location = useAppLocation();

  useEffect(() => {
    if (file) {
      const storageRef = ref(storage, `images/ ${file.name}`);

      uploadBytes(storageRef, file)
        .then(async (snapshot) => {
          const url = await getDownloadURL(storageRef);
          setData((prev) => ({ ...prev, img: url }));
          console.log("Image uploaded successfully.");
          setUploadStatus("UPLOADED");
        })
        .catch((error) => console.log(error));
    }
  }, [file]);

  // handle form submiting
  const handleUserSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    let createRes: UserCredential | null = null;
    try {
      if (data.email && data.password) {
        createRes = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
      } else {
        console.log("Please enter email and password.");
      }
    } catch (error) {
      console.log("Error creating user: ", error);
    }

    try {
      if (createRes) {
        setDoc(doc(db, "users", createRes.user.uid), data);
        navigate(-1);
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  // handle form submiting
  const handleProductSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "products"), data);
      navigate(-1);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  //handle image upload
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploadStatus("UPLOADING");
    } else {
      setUploadStatus("NO_IMAGE");
    }
  };

  // handle form inputs
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  // JSX Return
  return (
    <Layout>
      <HeaderTitle>Add New Item</HeaderTitle>
      <Container>
        {/* Image upload */}
        <Left>
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://www.gemkom.com.tr/wp-content/uploads/2020/02/NO_IMG_600x600.png"
            }
            alt="img"
            className="img"
          />
        </Left>
        <Right>
          {/* Input form */}
          <UserForm
            onSubmit={(e) =>
              location.state.type === "User"
                ? handleUserSubmit(e)
                : handleProductSubmit(e)
            }
          >
            <div className="file">
              <p className="inputTitle">Upload Image:</p>
              <label htmlFor="file">
                <DriveFolderUploadIcon className="icon" />
              </label>
            </div>
            <input
              onChange={handleFile}
              name="img"
              style={{ display: "none" }}
              type="file"
              id="file"
            />
            {/* Generating inputs from JSON */}
            {userInputs.map((input) => (
              <div key={input.id} className="input">
                <label className="inputTitle">{input.label}</label>
                <br />
                <input
                  onChange={handleInput}
                  id={input.id}
                  className="inputField"
                  type={input.type}
                  placeholder={input.placeholder}
                />
              </div>
            ))}
            {uploadStatus === "UPLOADING" ? (
              <SubmitButton disabled type="submit">
                Uploading...
              </SubmitButton>
            ) : (
              <SubmitButton type="submit">SUBMIT</SubmitButton>
            )}
          </UserForm>
        </Right>
      </Container>
    </Layout>
  );
};

export default New;
