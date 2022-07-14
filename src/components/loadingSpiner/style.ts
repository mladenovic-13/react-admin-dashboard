import styled, { keyframes } from "styled-components";
import { ITheme } from "../../shared/types";

export const SpinerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerKeyframes = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg)
    }
  `;

export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 4px solid inherit;
  border-top: 4px solid ${(p: ITheme) => p.theme.color[300]};
  border-radius: 50%;
  animation-name: ${SpinnerKeyframes};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
