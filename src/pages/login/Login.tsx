import { Container, Form, Wrapper } from "./style";
import AnimatedBackground from "../../shared/AnimatedBackground";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Save user date in context
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          if (dispatch) dispatch({ type: "LOGIN", payload: user });
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          setError("Wrong password.");
        }
        if (errorCode === "auth/user-not-found") {
          setError("User not found.");
        }
        if (errorCode === "auth/invalid-email") {
          setError("Invalid email.");
        }
        console.log(errorCode);
      });
  };

  return (
    <>
      <AnimatedBackground />
      <Wrapper>
        <Container>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="somename@mail.com"
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="********"
            />
            <button className="btn" type="submit">
              Login
            </button>
            {error && <span className="error">{error} Try again!</span>}
          </Form>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;
