import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const TableWrapper = styled.div`
  padding: 0px 20px 20px 20px;
  .table {
    background-color: ${(p: ITheme) => p.theme.color.background};
  }
  .tableCell {
    color: ${(p: ITheme) => p.theme.color[900]};
    text-align: center;
    font-size: 14px;
  }
  .cellWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const Status = styled.div<{ status: string }>`
  padding: 3px 0;
  border-radius: 5px;
  background-color: ${(props) =>
    props.status === "Pending"
      ? "rgb(80, 235, 23, 0.2)"
      : "rgb(58, 143, 43, 0.2)"};
  color: ${(props) =>
    props.status === "Pending" ? "rgb(125, 168, 5)" : "rgb(29, 87, 19)"};
`;
