import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Status } from "../pages/list/style";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src={params.row.img}
            alt={params.row.user}
          />
          <p>{params.row.username}</p>
        </div>
      );
    },
  },

  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params: GridValueGetterParams) => {
      return <Status status={params.row.status}>{params.row.status}</Status>;
    },
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
];

export const rows = [
  {
    id: 1,
    username: "Snow",
    img: "https://picsum.photos/200",
    email: "nikolanik999@gmail.com",
    status: "pending",
    age: 32,
  },
  {
    id: 2,
    username: "Nikola",
    img: "https://picsum.photos/200",
    email: "nikolanik999@gmail.com",
    status: "active",
    age: 32,
  },
  {
    id: 3,
    username: "Lazar",
    img: "https://picsum.photos/200",
    email: "nikolanik999@gmail.com",
    status: "passive",
    age: 32,
  },
  {
    id: 4,
    username: "Milos",
    img: "https://picsum.photos/200",
    email: "nikolanik999@gmail.com",
    status: "active",
    age: 12,
  },
  {
    id: 5,
    username: "Dusan",
    img: "https://picsum.photos/200",
    email: "nikolanik999@gmail.com",
    status: "pending",
    age: 32,
  },
  {
    id: 6,
    username: "Snow",
    img: "https://picsum.photos/200",
    email: "nikolanik999@gmail.com",
    status: "passive",
    age: 32,
  },
  {
    id: 7,
    username: "Snow",
    img: "https://picsum.photos/200",
    email: "nikolanik999@gmail.com",
    status: "pending",
    age: 32,
  },
];
