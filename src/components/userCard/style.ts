import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const Container = styled.div`
  position: relative;
  height: 280px;
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 16px;
  .name {
    font-size: 28px;
    color: ${(props: ITheme) => props.theme.color[900]};
  }
  .cardTitle {
    flex: 1;
    font-size: 16px;
    font-weight: 700;
    color: darkgray;
  }
  .wrapper {
    flex: 5;
    display: flex;
    gap: 16px;
  }
  .imgWrapper {
    display: flex;
    align-items: center;
  }
  .infoWrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: space-evenly;
  }
  .img {
    width: 160px;
    height: 160px;
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
