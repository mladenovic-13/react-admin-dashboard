import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const Container = styled.div`
  padding: 60px;
  color: white;
  /* opacity: 0.5; */
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 36px;
  }
  label {
    font-size: 20px;
    margin-bottom: 4px;
  }
  input {
    margin-bottom: 16px;
    width: 260px;
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    outline: none;
    background: ${(props: ITheme) => props.theme.color[300]};
  }
  .btn {
    padding: 8px;
    font-size: 20px;
    font-weight: 600;
    border: none;
    margin-top: 12px;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    background-color: ${(props: ITheme) => props.theme.color[400]};
    color: ${(props: ITheme) => props.theme.color[900]};
    &:hover {
      background-color: ${(props: ITheme) => props.theme.color[500]};
    }
  }
  .error {
    margin-top: 8px;
    color: white;
    text-align: center;
    border: 1px solid white;
    border-radius: 5px;
    padding: 3px;
    border-color: ${(props: ITheme) => props.theme.color[800]};
  }
`;
