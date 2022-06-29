import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const HomeWrapper = styled.div`
  max-width: 100vw;
`;
export const SidebarWrapper = styled.div`
  position: fixed;
  width: 200px;
`;
export const NavbarWrapper = styled.div`
  width: calc(100vw - 200px);
  position: fixed;
  left: 200px;
  z-index: 999;
  background-color: white;
  background-color: ${(p: ITheme) => p.theme.color[100]};
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

  /* TRICK TO CALS SCROLLBAR WIDTH */
  --scrollbar: calc(100vw - 100%);
  width: calc(100vw - 200px - var(--scrollbar));

  left: 200px;
  top: 52px;
  display: flex;
  justify-content: center;
`;
