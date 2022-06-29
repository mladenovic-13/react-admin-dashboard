import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const FeaturedChartContainer = styled.div`
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  background: white;
  border-radius: 5px;
  flex: 2.5;
  padding: 16px;
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
      width: 90%;
    }
    .statsItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      font-size: 10px;
    }
  }
`;
