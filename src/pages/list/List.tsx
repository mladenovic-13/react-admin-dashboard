import Layout from "../../components/layout/Layout";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { deleteDoc, doc } from "firebase/firestore";
import { usersColumns } from "../../util/usersTableData";
import {
  ActionContainer,
  AddUser,
  DataGridContainer,
  DataGridWrapper,
} from "./style";
import { Link, useLocation } from "react-router-dom";
import { db } from "../../firebase";
import { useData } from "../../hooks/useData";
import { productsColumns } from "../../util/productsTableData";
import { ordersColumns } from "../../util/ordersTableData";

type ListType = "User" | "Product" | "Order";

const List = () => {
  const location = useLocation();
  // change content on different path
  const type: ListType =
    location.pathname === "/users"
      ? "User"
      : location.pathname === "/products"
      ? "Product"
      : "Order";
  // Custom Hook for fathing data
  // by collection type from Firebase
  const data = useData(type);

  // Handle deleting user from db
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "users", id));
    } catch (err) {
      console.log(err);
    }
  };
  // Generic table fields
  const actions: GridColDef[] = [
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <ActionContainer>
            {type === "User" && (
              <Link
                to={`${location.pathname}/${params.row.id}`}
                state={{ ...params.row }}
                style={{ textDecoration: "none" }}
              >
                <button className="btn viewBtn">View</button>
              </Link>
            )}
            <button
              onClick={() => handleDelete(params.row.id)}
              className="btn deleteBtn"
            >
              Delete
            </button>
          </ActionContainer>
        );
      },
    },
  ];

  return (
    <Layout>
      {!(location.pathname === "/orders") && (
        <AddUser>
          <h1 className="title">Add New {type}</h1>
          <Link
            to={`${location.pathname}/new`}
            state={{ type }}
            style={{ textDecoration: "none" }}
          >
            <button className="add">Add {type}</button>
          </Link>
        </AddUser>
      )}

      <DataGridWrapper>
        <DataGridContainer>
          <DataGrid
            style={{ backgroundColor: "white" }}
            rows={data}
            columns={
              type === "User"
                ? usersColumns.concat(actions)
                : type === "Product"
                ? productsColumns.concat(actions)
                : ordersColumns
            }
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        </DataGridContainer>
      </DataGridWrapper>
    </Layout>
  );
};

export default List;
