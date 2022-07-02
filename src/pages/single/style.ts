import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const BottomWrapper = styled.div`
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background-color: ${(p: ITheme) => p.theme.color.background};
  padding: 20px;
  .table {
    height: 400px;
  }
  .tableTitle {
    color: ${(p: ITheme) => p.theme.color.cardTitle};
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

export const TopLeftWrapper = styled.div`
  flex: 1;
`;
export const TopRightWrapper = styled.div``;
