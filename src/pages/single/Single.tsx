import React from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import TableList from "../../components/table/Table";
import UserCard from "../../components/userCard/UserCard";
import UserChart from "../../components/userChart/UserChart";
import { useUser } from "../../hooks/useUser";
import { AddUser } from "../list/style";
import {
  BottomWrapper,
  TopLeftWrapper,
  TopRightWrapper,
  TopWrapper,
  Wrapper,
} from "./style";

const Single = () => {
  let id = "";
  const params = useParams();
  params.id ? (id = params.id) : console.log("No ID atribute!");
  // Custom hook for fatching user from DB
  const user = useUser(id);

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
        <AddUser>
          <h1 className="title">Add New Order</h1>
          <Link to={"/orders/new"} style={{ textDecoration: "none" }}>
            <button className="add">Add Order</button>
          </Link>
        </AddUser>
        <BottomWrapper>
          <h1 className="tableTitle">Last Transactions</h1>
          <TableList />
        </BottomWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Single;
