import Widget from "../../components/widget/Widget";
import { ChartsWrapper, ListWrapper, WidgetsContainer } from "./style";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import FeaturedChart from "../../components/featuredChart/FeaturedChart";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/table/Table";
import Layout from "../../components/layout/Layout";
import { useUserWidget } from "../../hooks/useUserWidget";
import { useEffect } from "react";

const Home = () => {
  const usersWidgetData = useUserWidget();

  useEffect(() => {
    console.log(usersWidgetData);
  }, [usersWidgetData]);

  return (
    <Layout>
      {/* WIDGETS */}
      <WidgetsContainer>
        <Widget {...usersWidgetData} />
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
    </Layout>
  );
};

export default Home;
