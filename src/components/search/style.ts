import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const NavbarSearch = styled.div`
  position: relative;
  width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1px 0 8px;
  color: ${(p: ITheme) => p.theme.color[900]};
  background-color: ${(p: ITheme) => p.theme.color[100]};
  border: 1px solid ${(p: ITheme) => p.theme.color[500]};
  border-radius: 3px;
  .searchWrapper {
    padding: 3px;
    margin-right: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    &:hover {
      background-color: ${(p: ITheme) => p.theme.color[300]};
    }
  }
  input {
    color: ${(p: ITheme) => p.theme.color[900]};
  }
  .searchInput {
    font-size: 16px;
    background-color: inherit;
    border: none;
    outline: none;
  }
`;

export const Results = styled.div`
  position: absolute;
  width: 100%;
  top: 38px;
  left: 0;
  color: ${(p: ITheme) => p.theme.color[500]};
  background-color: ${(p: ITheme) => p.theme.color.background};
  border: 1px solid ${(p: ITheme) => p.theme.color[300]};
  .item {
    list-style: none;
    padding: 6px 16px;
    border-bottom: 1px solid ${(p: ITheme) => p.theme.color[300]};
    color: ${(p: ITheme) => p.theme.color[800]};
    cursor: pointer;
    &:hover {
      background-color: ${(p: ITheme) => p.theme.color[300]};
    }
    .username {
      font-size: 14px;
      color: ${(p: ITheme) => p.theme.color[500]};
    }
  }
`;
