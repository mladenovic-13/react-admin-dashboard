import React from "react";
import {
  Credentials,
  List,
  ListItem,
  SidebarBottom,
  SidebarCenter,
  SidebarContainer,
  SidebarTop,
} from "./style";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import BallotIcon from "@mui/icons-material/Ballot";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTop>
        <div className="logo">{"<adminPanel />"}</div>
      </SidebarTop>
      <SidebarCenter>
        <List>
          <h2 className="itemGroupTitle">MAIN</h2>
          <ListItem>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </ListItem>
          <h2 className="itemGroupTitle">LISTS</h2>
          <ListItem>
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </ListItem>
          <ListItem>
            <CategoryIcon className="icon" />
            <span>Products</span>
          </ListItem>
          <ListItem>
            <BallotIcon className="icon" />
            <span>Orders</span>
          </ListItem>
          <ListItem>
            <DeliveryDiningIcon className="icon" />
            <span>Delivery</span>
          </ListItem>
          <h2 className="itemGroupTitle">USEFUL</h2>
          <ListItem>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </ListItem>
          <ListItem>
            <CircleNotificationsIcon className="icon" />
            <span>Notifications</span>
          </ListItem>
          <h2 className="itemGroupTitle">SERVICE</h2>
          <ListItem>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span>
          </ListItem>
          <ListItem>
            <TextSnippetIcon className="icon" />
            <span>Logs</span>
          </ListItem>
          <ListItem>
            <SettingsSuggestIcon className="icon" />
            <span>Settings</span>
          </ListItem>
          <h2 className="itemGroupTitle">USER</h2>
          <ListItem>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </ListItem>
          <ListItem>
            <LogoutIcon className="icon" />
            <span>Log Out</span>
          </ListItem>
        </List>
      </SidebarCenter>
      <SidebarBottom>
        <h2 className="itemGroupTitle">Toggle Theme</h2>
        <div className="toggleGroup">
          <div className="box lightTheme"></div>
          <div className="box darkTheme"></div>
        </div>
      </SidebarBottom>
      <Credentials>
        <p>@Mladenovic13</p>
        <p>2022</p>
      </Credentials>
    </SidebarContainer>
  );
};

export default Sidebar;
