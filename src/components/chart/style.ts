import styled from "styled-components";

export const ChartContainer = styled.div`
  flex: 5;
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  .title {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 16px;
  }
  .grid {
    stroke: #dae0df;
  }
`;
