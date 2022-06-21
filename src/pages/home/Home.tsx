import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import {
  ChartsWrapper,
  HomeContainer,
  HomeWrapper,
  SidebarWrapper,
  WidgetsContainer,
  WidgetWrapper,
} from "./style";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import FeaturedChart from "../../components/featuredChart/FeaturedChart";
import Chart from "../../components/chart/Chart";

const Home = () => {
  return (
    <HomeWrapper>
      {/* SIDEBAR */}
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <HomeContainer>
        <Navbar />
        {/* WIDGETS */}
        <WidgetWrapper>
          <WidgetsContainer>
            <Widget
              type="USERS"
              value={"93"}
              linkTitle={"See all users"}
              stats={{ value: 22, positive: true }}
              icon={<PersonOutlineIcon />}
            />
            <Widget
              type="ORDERS"
              value={"451"}
              linkTitle={"View all orders"}
              stats={{ value: 13, positive: true }}
              icon={<ListAltOutlinedIcon />}
            />
            <Widget
              type="EARNINGS"
              value={"$13,544"}
              linkTitle={"View net earnings"}
              stats={{ value: 5, positive: false }}
              icon={<AttachMoneyOutlinedIcon />}
            />
            <Widget
              type="BALANCE"
              value={"$26,730"}
              linkTitle={"See details"}
              stats={{ value: 3, positive: false }}
              icon={<CreditCardOutlinedIcon />}
            />
          </WidgetsContainer>
        </WidgetWrapper>
        {/* CHARTS */}
        <WidgetWrapper>
          <ChartsWrapper>
            <FeaturedChart />
            <Chart />
          </ChartsWrapper>
        </WidgetWrapper>
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
