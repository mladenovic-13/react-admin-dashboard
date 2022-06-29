import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import {
  ChartsWrapper,
  HomeMainContent,
  HomeMainContentWrapper,
  ListWrapper,
  NavbarWrapper,
  SidebarWrapper,
  WidgetsContainer,
} from "./style";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import FeaturedChart from "../../components/featuredChart/FeaturedChart";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/table/Table";

const Home = () => {
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
        <HomeMainContent>
          {/* WIDGETS */}
          <WidgetsContainer>
            <Widget
              type="USERS"
              value={"93"}
              linkTitle={"See all users"}
              stats={{ value: 22, positive: true }}
              icon={
                <PersonOutlineIcon
                  sx={{
                    backgroundColor: "rgb(76, 196, 55, 0.6)",
                    borderRadius: "5px;",
                    padding: "3px",
                  }}
                />
              }
            />
            <Widget
              type="ORDERS"
              value={"451"}
              linkTitle={"View all orders"}
              stats={{ value: 13, positive: true }}
              icon={
                <ListAltOutlinedIcon
                  sx={{
                    backgroundColor: "rgb(55, 133, 196, 0.5)",
                    borderRadius: "5px;",
                    padding: "3px",
                  }}
                />
              }
            />
            <Widget
              type="EARNINGS"
              value={"$13,544"}
              linkTitle={"View net earnings"}
              stats={{ value: 5, positive: false }}
              icon={
                <AttachMoneyOutlinedIcon
                  sx={{
                    backgroundColor: "rgb(196, 55, 97, 0.5)",
                    borderRadius: "5px;",
                    padding: "3px",
                  }}
                />
              }
            />
            <Widget
              type="BALANCE"
              value={"$26,730"}
              linkTitle={"See details"}
              stats={{ value: 3, positive: false }}
              icon={
                <CreditCardOutlinedIcon
                  sx={{
                    backgroundColor: "rgb(196, 135, 55, 0.5)",
                    borderRadius: "5px;",
                    padding: "3px",
                  }}
                />
              }
            />
          </WidgetsContainer>
          {/* CHARTS */}
          <ChartsWrapper>
            <FeaturedChart />
            <Chart />
          </ChartsWrapper>
          {/* TABLE */}
          <ListWrapper>
            <div className="listTitle">Latest transactions</div>
            <TableList />
          </ListWrapper>
        </HomeMainContent>
      </HomeMainContentWrapper>
    </>
  );
};

export default Home;
