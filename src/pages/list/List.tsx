import React from "react";
import Layout from "../../components/layout/Layout";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import { rows, columns } from "../../util/usersTableData";
import { ActionContainer, DataGridContainer, DataGridWrapper } from "./style";

const List = () => {
  const actions = [
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <ActionContainer>
            <button className="btn viewBtn">View</button>
            <button className="btn deleteBtn">Delete</button>
          </ActionContainer>
        );
      },
    },
  ];

  return (
    <Layout>
      <DataGridWrapper>
        <DataGridContainer>
          <DataGrid
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
