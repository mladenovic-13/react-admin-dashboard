import styled from "styled-components";
import { StyledProps } from "../../types";

export const SidebarContainer = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SidebarTop = styled.div`
  .logo {
    font-size: 20px;
    color: ${(p: StyledProps) => p.theme.color[900]};
  }
`;
export const SidebarCenter = styled.div``;
export const SidebarBottom = styled.div``;
