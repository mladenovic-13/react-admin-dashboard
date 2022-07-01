import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid ${(props: ITheme) => props.theme.color[400]};
  border-radius: 5px;
  padding: 16px;
  .name {
    font-size: 28px;
    color: ${(props: ITheme) => props.theme.color[900]};
  }
  .cardTitle {
    font-size: 16px;
    font-weight: 700;
    color: darkgray;
  }
  .wrapper {
    display: flex;
    gap: 16px;
  }
  .imgWrapper {
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .infoWrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
  }
  .img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 50%;
  }
  .edit {
    position: absolute;
    top: 8px;
    right: 16px;
    color: ${(props: ITheme) => props.theme.color[800]};
  }
  .info {
    display: flex;
    gap: 4px;
    color: ${(props: ITheme) => props.theme.color[600]};
  }
  .text {
    color: ${(props: ITheme) => props.theme.color[800]};
  }
`;
