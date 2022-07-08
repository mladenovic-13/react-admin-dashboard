import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Status } from "../components/table/style";

export const ordersColumns: GridColDef[] = [
  { field: "id", headerName: "Tracking ID", width: 220 },
  {
    field: "userID",
    headerName: "User ID",
    width: 260,
  },
  {
    field: "product",
    headerName: "Product",
    width: 240,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 100,
  },
  {
    field: "method",
    headerName: "Payment Method",
    width: 160,
  },
  {
    field: "status",
    headerName: "Payment Status",
    width: 130,
    renderCell: (params: GridValueGetterParams) => {
      return <Status status={params.row.status}>{params.row.status}</Status>;
    },
  },
];
