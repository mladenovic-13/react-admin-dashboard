import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import LoadingSpiner from "../../components/loadingSpiner/LoadingSpiner";
import NewOrderModal from "../../components/orderModal/NewOrderModal";
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
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const { loading, user } = useUser(id as string);

  return (
    <Layout>
      <Wrapper>
        <TopWrapper>
          <TopLeftWrapper>
            {loading ? <LoadingSpiner /> : <UserCard user={user} />}
          </TopLeftWrapper>
          <TopRightWrapper>
            <UserChart />
          </TopRightWrapper>
        </TopWrapper>
        {openModal ? (
          <NewOrderModal userID={id as string} setOpenModal={setOpenModal} />
        ) : (
          <AddUser>
            <h1 className="title">Add New Order</h1>
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="add"
            >
              Add Order
            </button>
          </AddUser>
        )}
        <BottomWrapper>
          <h1 className="tableTitle">Last Transactions</h1>
          <TableList />
        </BottomWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Single;
