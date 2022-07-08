import React, { useContext, useState } from "react";
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
import { DarkModeContext } from "../../context/darkModeContext";
import { index } from "../../algolia";

const Navbar = () => {
  const { isDarkMode, dispatch } = useContext(DarkModeContext);
  const [searchQuery, setSearchQuery] = useState("");

  const hanldeSearch = async () => {
    const res = await index.search(searchQuery);
    console.log(res.hits);
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarSearch>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className="searchInput"
            placeholder="Search..."
          />
          <div onClick={hanldeSearch} className="searchWrapper">
            <SearchOutlinedIcon className="searchIcon navbarIcon " />
          </div>
        </NavbarSearch>
        <NavbarItems>
          <NavbarItem
            isDarkMode={isDarkMode}
            onClick={() => {
              if (dispatch) dispatch({ type: "TOGGLE" });
            }}
          >
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
