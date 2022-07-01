import React from "react";
import Layout from "../../components/layout/Layout";
import TableList from "../../components/table/Table";
import UserCard from "../../components/userCard/UserCard";
import UserChart from "../../components/userChart/UserChart";
import {
  BottomWrapper,
  TopLeftWrapper,
  TopRightWrapper,
  TopWrapper,
  Wrapper,
} from "./style";

const Single = () => {
  const user = {
    name: "John Doe",
    email: "nikolanik999@gmail.com",
    phone: "+380999998888",
    address: "Kiev, Ukraine",
    country: "USA",
    img: "https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=",
  };

  return (
    <Layout>
      <Wrapper>
        <TopWrapper>
          <TopLeftWrapper>
            <UserCard user={user} />
          </TopLeftWrapper>
          <TopRightWrapper>
            <UserChart />
          </TopRightWrapper>
        </TopWrapper>
        <BottomWrapper>
          <h1 className="tableTitle">Last Transactions</h1>
          <TableList />
        </BottomWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Single;
