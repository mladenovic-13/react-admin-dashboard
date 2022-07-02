import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const WidgetsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const ChartsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;
export const ListWrapper = styled.div`
  -webkit-box-shadow: 5px 5px 15px -3px ${(p: ITheme) => p.theme.color[300]};
  box-shadow: 5px 5px 15px -3px ${(p: ITheme) => p.theme.color[300]};
  display: flex;
  background: ${(p: ITheme) => p.theme.color.background};
  flex-direction: column;
  width: 100%;
  gap: 20px;
  border-radius: 5px;
  .listTitle {
    font-weight: 300;
    font-size: 18px;
    padding: 20px 0 0 20px;
    color: ${(p: ITheme) => p.theme.color.cardTitle};
  }
`;
