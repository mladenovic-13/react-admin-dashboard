import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const Container = styled.div`
  position: relative;
  height: 280px;
  -webkit-box-shadow: 5px 5px 15px -3px ${(p: ITheme) => p.theme.color[300]};
  box-shadow: 5px 5px 15px -3px ${(p: ITheme) => p.theme.color[300]};
  background-color: ${(p: ITheme) => p.theme.color.background};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 16px;
  .name {
    font-size: 28px;
    color: ${(props: ITheme) => props.theme.color[900]};
  }
  .cardTitle {
    color: ${(p: ITheme) => p.theme.color.cardTitle};
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 16px;
  }
  .wrapper {
    flex: 5;
    display: flex;
    justify-content: space-around;
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
