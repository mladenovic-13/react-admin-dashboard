import Sidebar from "../../components/sidebar/Sidebar";
import { HomeContainer, HomeWrapper, SidebarWrapper } from "./style";

const Home = () => {
  return (
    <HomeWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <HomeContainer>Home container</HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
