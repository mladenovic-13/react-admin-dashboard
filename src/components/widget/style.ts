import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const WidgetContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${(p: ITheme) => p.theme.color.background};
  color: ${(p: ITheme) => p.theme.color[900]};
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  .left {
    display: flex;
    flex-direction: column;
    gap: 12px;
    .title {
      font-size: 16px;
      font-weight: 400;
      color: ${(p: ITheme) => p.theme.color.cardTitle};
    }
    .value {
      font-weight: 400;
      font-size: 30px;
    }
    .link {
      font-size: 14px;
      color: ${(p: ITheme) => p.theme.color[800]};
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
