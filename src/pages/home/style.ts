import styled from "styled-components";
import { ITheme } from "../../shared/types";

export const HomeWrapper = styled.div`
  display: flex;
`;
export const SidebarWrapper = styled.div`
  flex: 1;
`;

export const HomeContainer = styled.div`
  flex: 6;
  background-color: ${(p: ITheme) => p.theme.color[100]};
`;

export const WidgetWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const WidgetsContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
`;
export const ChartsWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  padding: 0px 20px;
  gap: 20px;
`;
