import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const HomeWrapper = styled.div``;
export const SidebarWrapper = styled.div`
  position: fixed;
  width: 200px;
`;
export const NavbarWrapper = styled.div`
  position: fixed;
  left: 200px;
  z-index: 999;
  background-color: white;
  background-color: ${(p: ITheme) => p.theme.color[100]};
  width: 100%;
`;

export const HomeMainContent = styled.div`
  max-width: 1280px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
export const HomeMainContentWrapper = styled.div`
  background-color: ${(p: ITheme) => p.theme.color[100]};
  position: absolute;
  width: calc(100vw - 215px);
  left: 200px;
  top: 52px;
  display: flex;
  justify-content: center;
`;
export const WidgetsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const ChartsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;
export const ListWrapper = styled.div`
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  display: flex;
  background: white;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  border-radius: 5px;
  .listTitle {
    font-weight: 300;
    font-size: 18px;
    padding: 20px 0 0 20px;
    color: ${(p: ITheme) => p.theme.color.cardTitle};
  }
`;
