import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const ChartContainer = styled.div`
  flex: 5;
  -webkit-box-shadow: 5px 5px 15px -3px ${(p: ITheme) => p.theme.color[300]};
  box-shadow: 5px 5px 15px -3px ${(p: ITheme) => p.theme.color[300]};
  background-color: ${(p: ITheme) => p.theme.color.background};
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;

  .title {
    color: ${(p: ITheme) => p.theme.color.cardTitle};
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 16px;
  }
  .grid {
    stroke: #dae0df;
  }
`;
