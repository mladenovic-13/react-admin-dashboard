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
import LoadingSpiner from "../../components/loadingSpiner/LoadingSpiner";

const Home = () => {
  const { loading: loadingUW, data: usersWidgetData } = useUserWidget();
  const { loading: loadingOW, data: ordersWidgetData } = useOrderWidget();
  const { loading: loadingEW, data: earningsWidgetData } = useEarningsWidget();
  const { loading: loadingBW, data: balanceWidgetData } = useBalanceWidget();

  return (
    <Layout>
      <WidgetsContainer>
        {loadingUW ? <LoadingSpiner /> : <Widget {...usersWidgetData} />}
        {loadingOW ? <LoadingSpiner /> : <Widget {...ordersWidgetData} />}
        {loadingEW ? <LoadingSpiner /> : <Widget {...earningsWidgetData} />}
        {loadingBW ? <LoadingSpiner /> : <Widget {...balanceWidgetData} />}
      </WidgetsContainer>
      <ChartsWrapper>
        <FeaturedChart />
        <Chart />
      </ChartsWrapper>
      <ListWrapper>
        <div className="listTitle">Latest transactions</div>
        <TableList />
      </ListWrapper>
    </Layout>
  );
};

export default Home;
