import Layout from "../../components/layout/Layout";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import { deleteDoc, doc } from "firebase/firestore";
import { columns } from "../../util/usersTableData";
import {
  ActionContainer,
  AddUser,
  DataGridContainer,
  DataGridWrapper,
} from "./style";
import { Link, useLocation } from "react-router-dom";
import { db } from "../../firebase";
import { useData } from "../../hooks/useData";

const List = () => {
  const location = useLocation();
  // change content on different path
  const type = location.pathname === "/users" ? "User" : "Product";
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
      <DataGridWrapper>
        <DataGridContainer>
          <DataGrid
            style={{ backgroundColor: "white" }}
            rows={data}
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
