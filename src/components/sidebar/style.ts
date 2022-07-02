import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const SidebarContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid ${(p: ITheme) => p.theme.color[400]};
  background-color: ${(p: ITheme) => p.theme.color.background};
`;
export const SidebarTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px solid ${(p: ITheme) => p.theme.color[400]};
  .logo {
    font-size: 24px;
    font-weight: 700;
    color: ${(p: ITheme) => p.theme.color[900]};
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const ListItem = styled.li`
  padding: 4px 8px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 300;
  border-radius: 3px;
  cursor: pointer;
  color: ${(p: ITheme) => p.theme.color[900]};
  .icon {
    font-size: 24px;
    color: ${(p: ITheme) => p.theme.color[800]};
  }

  &:hover {
    background-color: ${(p: ITheme) => p.theme.color[400]};
  }
`;
export const SidebarCenter = styled.div`
  width: 100%;
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
  .itemGroupTitle {
    margin: 0;
    padding-top: 20px;
    font-size: 12px;
    font-weight: 300;
    color: ${(p: ITheme) => p.theme.color[600]};
  }
`;
export const SidebarBottom = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-top: 1px solid ${(p: ITheme) => p.theme.color[400]};

  .toggleGroup {
    display: flex;
    justify-content: center;
    gap: 12px;
  }
  .box {
    width: 26px;
    height: 26px;
    border-radius: 5px;
    cursor: pointer;
  }
  .lightTheme {
    border: 1px solid #0096c7;
    background-color: #caf0f8;
    &:hover {
      background-color: #90e0ef;
    }
  }
  .darkTheme {
    border: 1px solid #023e8a;
    background-color: #023e8a;
    &:hover {
      background-color: #0077b6;
    }
  }
  .itemGroupTitle {
    font-size: 16px;
    font-weight: 400;
    color: ${(p: ITheme) => p.theme.color[800]};
  }
`;
export const Credentials = styled.div`
  position: fixed;
  bottom: 4px;
  font-size: 12px;
  font-weight: 200;
  text-align: center;
  color: ${(p: ITheme) => p.theme.color[800]};
`;
