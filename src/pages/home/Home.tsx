import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { HomeContainer, HomeWrapper, SidebarWrapper } from "./style";

const Home = () => {
  return (
    <HomeWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <HomeContainer>
        <Navbar />
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
