import React from "react";
import {
  SidebarBottom,
  SidebarCenter,
  SidebarContainer,
  SidebarTop,
} from "./style";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTop>
        <span className="logo">AdminBoard</span>
      </SidebarTop>
      <SidebarCenter></SidebarCenter>
      <SidebarBottom>options</SidebarBottom>
    </SidebarContainer>
  );
};

export default Sidebar;
