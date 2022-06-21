import React from "react";
import {
  NavbarContainer,
  NavbarItem,
  NavbarItems,
  NavbarSearch,
  NavbarWrapper,
} from "./style";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarSearch>
          <input type="text" className="searchInput" placeholder="Search..." />
          <SearchOutlinedIcon className="searchIcon navbarIcon " />
        </NavbarSearch>
        <NavbarItems>
          <NavbarItem>
            <DarkModeOutlinedIcon className="navbarIcon" />
          </NavbarItem>
          <NavbarItem>
            <div className="counter">1</div>
            <NotificationsNoneOutlinedIcon className="navbarIcon" />
          </NavbarItem>
          <NavbarItem>
            <div className="counter">3</div>
            <ChatBubbleOutlineOutlinedIcon className="navbarIcon" />
          </NavbarItem>
          <NavbarItem>
            <ListOutlinedIcon className="navbarIcon" />
          </NavbarItem>
          <NavbarItem>
            <LanguageOutlinedIcon className="navbarIcon" />
            <span>English</span>
          </NavbarItem>
          <NavbarItem>
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-8a912855fedde8f2ff878f6e14f3e04d-lq"
              alt=""
              className="avatar"
            />
          </NavbarItem>
        </NavbarItems>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
