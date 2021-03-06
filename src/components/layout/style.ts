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
  background-color: ${(p: ITheme) => p.theme.color.background};
`;

export const HomeMainContent = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const HomeMainContentWrapper = styled.div`
  background-color: ${(p: ITheme) => p.theme.color[200]};
  position: absolute;

  /* TRICK TO CALC SCROLLBAR WIDTH */
  --scrollbar: calc(100vw - 100%);
  width: calc(100vw - 200px - var(--scrollbar));

  left: 200px;
  top: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
