import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import { collection, getDocs } from "firebase/firestore";
import { columns } from "../../util/usersTableData";
import {
  ActionContainer,
  AddUser,
  DataGridContainer,
  DataGridWrapper,
} from "./style";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { IUser } from "../../shared/types";

const List = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  // Fetch users from Firebase DB
  useEffect(() => {
    const fetchUsers = async () => {
      let userArray: IUser[] = [];
      try {
        const res = await getDocs(collection(db, "users"));
        res.forEach((doc) =>
          userArray.push({ id: doc.id, ...doc.data() } as IUser)
        );
        setUsers(userArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  // Handle deleting user from db
  const handleDelete = () => {};

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
            <button onClick={handleDelete} className="btn deleteBtn">
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
        <h1 className="title">Add New User</h1>
        <Link to="/users/new" style={{ textDecoration: "none" }}>
          <button className="add">Add User</button>
        </Link>
      </AddUser>
      <DataGridWrapper>
        <DataGridContainer>
          <DataGrid
            style={{ backgroundColor: "white" }}
            rows={users}
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
