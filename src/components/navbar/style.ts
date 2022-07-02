import { Theme } from "../../shared/types";
import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const NavbarWrapper = styled.div`
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(p: ITheme) => p.theme.color[400]};
`;
export const NavbarContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  color: ${(p: ITheme) => p.theme.color[900]};
`;
export const NavbarSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1px 0 8px;
  background-color: ${(p: ITheme) => p.theme.color[200]};
  border: 1px solid ${(p: ITheme) => p.theme.color[500]};
  border-radius: 3px;
  .searchInput {
    background-color: ${(p: ITheme) => p.theme.color[200]};
    color: ${(p: ITheme) => p.theme.color[100]};
    border: none;
    outline: none;
  }
  .searchIcon {
    cursor: pointer;
    padding: 4px;
    border-radius: 3px;
    &:hover {
      background-color: ${(p: ITheme) => p.theme.color[300]};
    }
  }
`;
export const NavbarItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  span {
    color: ${(p: ITheme) => p.theme.color[800]};
    font-size: 14px;
  }
`;

interface INavbarItemProps {
  theme: Theme;
  isDarkMode?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
export const NavbarItem = styled.div<INavbarItemProps>`
  // BACKROUND COLOR IS SAME AS HOVER BACKGROUND
  // BECAUSE DARK MODE IS ACTIVATED
  background-color: ${(p: INavbarItemProps) =>
    p.isDarkMode ? p.theme.color[300] : ""};
  position: relative;
  display: flex;
  height: 100%;
  padding: 0 8px;
  gap: 8px;
  border-radius: 5px;
  align-items: center;
  .counter {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 16px;
    height: 16px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: white;
    font-weight: 900;
    border-radius: 50%;
  }
  .avatar {
    width: 36px;
    height: 36px;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
  }
  &:hover {
    background-color: ${(p: ITheme) => p.theme.color[300]};
  }
`;
