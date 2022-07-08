import Widget from "../../components/widget/Widget";
import { ChartsWrapper, ListWrapper, WidgetsContainer } from "./style";
import FeaturedChart from "../../components/featuredChart/FeaturedChart";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/table/Table";
import Layout from "../../components/layout/Layout";
import { useUserWidget } from "../../hooks/useUserWidget";
import { useOrderWidget } from "../../hooks/useOrderWidget";
import { useEarningsWidget } from "../../hooks/useEarningsWidget";
import { useBalanceWidget } from "../../hooks/useBalanceWidget";

const Home = () => {
  const usersWidgetData = useUserWidget();
  const ordersWidgetData = useOrderWidget();
  const earningsWidgetData = useEarningsWidget();
  const balanceWidgetData = useBalanceWidget();

  return (
    <Layout>
      {/* WIDGETS */}
      <WidgetsContainer>
        <Widget {...usersWidgetData} />
        <Widget {...ordersWidgetData} />
        <Widget {...earningsWidgetData} />
        <Widget {...balanceWidgetData} />
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
