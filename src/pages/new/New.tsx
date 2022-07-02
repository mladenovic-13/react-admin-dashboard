import { Container, HeaderTitle, UserForm } from "./style";
import React, { ChangeEvent, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { FormDataSource } from "../../util/formDataSource";
import { Left, Right } from "./style";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

interface Props {
  userInputs: FormDataSource[];
}

const New: React.FC<Props> = ({ userInputs }) => {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    console.log(file?.name);
  }, [file]);

  return (
    <Layout>
      <HeaderTitle>Add New Item</HeaderTitle>
      <Container>
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
          <UserForm>
            <div className="file">
              <p className="inputTitle">Upload Image:</p>
              <label htmlFor="file">
                <DriveFolderUploadIcon className="icon" />
              </label>
            </div>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                e.target.files && e.target.files[0]
                  ? setFile(e.target.files[0])
                  : setFile(null);
              }}
              style={{ display: "none" }}
              type="file"
              id="file"
            />
            {userInputs.map((input) => (
              <div key={input.id} className="input">
                <label className="inputTitle">{input.label}</label>
                <br />
                <input
                  className="inputField"
                  type={input.type}
                  placeholder={input.placeholder}
                />
              </div>
            ))}
            <button className="submit">SUBMIT</button>
          </UserForm>
        </Right>
      </Container>
    </Layout>
  );
};

export default New;
