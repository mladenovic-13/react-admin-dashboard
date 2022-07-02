import styled from "styled-components";
import { ITheme } from "../../shared/types";

const Card = styled.div`
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 5px;
`;

export const Container = styled(Card)`
  display: flex;
  padding: 40px;
  margin-bottom: 200px;
`;
export const HeaderTitle = styled(Card)`
  text-align: center;
  font-size: 26px;
  padding: 12px;
  font-weight: 700;
  color: ${(props: ITheme) => props.theme.color[400]};
`;
export const Left = styled.div`
  flex: 1;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    background-color: ${(p: ITheme) => p.theme.color[100]};
  }
`;
export const Right = styled.div`
  flex: 2;
  display: flex;
`;
export const UserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  .file {
    width: 40%;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .icon {
    font-size: 36px;
    cursor: pointer;
  }
  .input {
    width: 40%;
  }
  .inputField {
    width: 80%;
    background-color: inherit;
    border: none;
    border-bottom: 1px solid ${(p: ITheme) => p.theme.color[800]};
    padding: 8px 10px;
    font-size: 16px;
    outline: none;
  }
  .inputTitle {
    font-weight: 200;
  }
  .submit {
    width: 25%;
    padding: 6px;
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 18px;
    font-weight: 700;
    background-color: ${(p: ITheme) => p.theme.color[600]};
    cursor: pointer;
  }
`;
