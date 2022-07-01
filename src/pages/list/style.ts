import styled from "styled-components";

export const DataGridWrapper = styled.div`
  width: 100%;
`;
export const DataGridContainer = styled.div`
  width: 980px;
  min-width: fit-content;
  height: 400px;
  background-color: white;
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
