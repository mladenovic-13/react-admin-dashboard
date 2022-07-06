import styled from "styled-components";
import { ITheme } from "../../shared/types";
export const Card = styled.div`
  -webkit-box-shadow: 5px 5px 15px -3px ${(p: ITheme) => p.theme.color[300]};
  box-shadow: 5px 5px 15px -3px ${(p: ITheme) => p.theme.color[300]};
  background-color: ${(p: ITheme) => p.theme.color.background};
  border-radius: 5px;
`;
export const DataGridWrapper = styled(Card)`
  margin-bottom: 300px;
  width: 100%;
`;
export const DataGridContainer = styled.div`
  height: 400px;
`;
export const Status = styled.div<{ status: "pending" | "active" | "passive" }>`
  padding: 3px 5px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.status === "passive"
      ? "rgb(201, 75, 75, 0.5)"
      : props.status === "pending"
      ? "rgb(80, 235, 23, 0.2)"
      : "rgb(58, 143, 43, 0.2)"};
  color: ${(props) =>
    props.status === "passive"
      ? "rgb(173, 26, 26)"
      : props.status === "pending"
      ? "rgb(125, 168, 5)"
      : "rgb(29, 87, 19)"};
`;
export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .btn {
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 3px 6px;
    cursor: pointer;
  }
  .viewBtn {
    color: #5949d1;
  }
  .deleteBtn {
    color: rgb(173, 26, 26);
  }
`;
export const AddUser = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .title {
    text-align: center;
    font-size: 20px;
    padding: 12px;
    font-weight: 500;
    color: ${(props: ITheme) => props.theme.color[900]};
  }
  .add {
    font-size: 16px;
    padding: 5px 10px;
    border: 1px solid ${(props: ITheme) => props.theme.color[900]};
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    background: ${(props: ITheme) => props.theme.color.background};
    color: ${(props: ITheme) => props.theme.color[900]};
  }
`;
