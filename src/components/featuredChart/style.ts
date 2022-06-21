import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const FeaturedChartContainer = styled.div`
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 12px 12px 38px 12px;
  flex: 3;

  color: rgba(0, 0, 0, 0.5);

  .heading {
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 18px;
      font-weight: 300;
    }
    .dots {
      transform: rotate(90deg);
      color: rgba(0, 0, 0, 0.6);
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    .progress {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .progressBar {
      width: 100px;
      height: 100px;
    }
    .progressTitle {
      text-align: center;
      font-size: 20px;
      font-weight: 300;
    }
    .value {
      text-align: center;
      font-size: 32px;
      font-weight: 400;
      color: ${(p: ITheme) => p.theme.color[900]};
    }
    .desc {
      text-align: center;
      width: 80%;
    }
    .stats {
      display: flex;
      justify-content: space-between;
      width: 80%;
    }
    .statsItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
    }
  }
`;
