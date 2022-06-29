import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import {
  HomeMainContent,
  HomeMainContentWrapper,
  NavbarWrapper,
  SidebarWrapper,
} from "./style";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* SIDEBAR */}
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <HomeMainContentWrapper>
        <HomeMainContent>{children}</HomeMainContent>
      </HomeMainContentWrapper>
    </>
  );
};

export default Layout;
