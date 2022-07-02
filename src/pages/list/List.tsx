import React from "react";
import Layout from "../../components/layout/Layout";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import { rows, columns } from "../../util/usersTableData";
import {
  ActionContainer,
  AddUser,
  DataGridContainer,
  DataGridWrapper,
} from "./style";
import { Link } from "react-router-dom";

const List = () => {
  const actions = [
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <ActionContainer>
            <Link to="/users/123" style={{ textDecoration: "none" }}>
              <button className="btn viewBtn">View</button>
            </Link>
            <button className="btn deleteBtn">Delete</button>
          </ActionContainer>
        );
      },
    },
  ];

  return (
    <Layout>
      <AddUser>
        <h1 className="title">Add New User</h1>
        <Link to="/users/new" style={{ textDecoration: "none" }}>
          <button className="add">Add User</button>
        </Link>
      </AddUser>
      <DataGridWrapper>
        <DataGridContainer>
          <DataGrid
            style={{ backgroundColor: "white" }}
            rows={rows}
            columns={columns.concat(actions)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </DataGridContainer>
      </DataGridWrapper>
    </Layout>
  );
};

export default List;
