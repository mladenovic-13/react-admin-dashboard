import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Status } from "../pages/list/style";

export const columns: GridColDef[] = [
  { field: "id", headerName: "Tracking ID", width: 120 },
  {
    field: "product",
    headerName: "Product",
    width: 220,
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
            alt="product"
          />
          <p>{params.row.product}</p>
        </div>
      );
    },
  },

  {
    field: "customer",
    headerName: "Customer",
    width: 140,
  },
  {
    field: "date",
    headerName: "Date",
    width: 140,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 140,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params: GridValueGetterParams) => {
      return <Status status={params.row.status}>{params.row.status}</Status>;
    },
  },
];

export const rows = [
  {
    id: "#123213",
    product: "Samsung Galaxy S10",
    customer: "John Doe",
    date: "2020-01-01",
    amount: "$100",
    paymentMethod: "Cash",
    status: "pending",
    img: "https://picsum.photos/300",
  },
  {
    id: "#123145",
    product: "Pixel 3",
    customer: "Nikola Nikolic",
    date: "2020-01-01",
    amount: "$300",
    paymentMethod: "Visa",
    status: "active",
    img: "https://picsum.photos/300",
  },
  {
    id: "#123145",
    product: "Samsung Galaxy S10",
    customer: "John Doe",
    date: "2020-01-01",
    amount: "$100",
    paymentMethod: "Visa",
    status: "passive",
    img: "https://picsum.photos/300",
  },
  {
    id: "#123145",
    product: "Samsung Galaxy S10",
    customer: "John Doe",
    date: "2020-01-01",
    amount: "$100",
    paymentMethod: "Visa",
    status: "active",
    img: "https://picsum.photos/300",
  },
  {
    id: "#123145",
    product: "Samsung Galaxy S10",
    customer: "John Doe",
    date: "2020-01-01",
    amount: "$100",
    paymentMethod: "Cash",
    status: "pending",
    img: "https://picsum.photos/300",
  },
  {
    id: "#123145",
    product: "Samsung Galaxy S10",
    customer: "John Doe",
    date: "2020-01-01",
    amount: "$100",
    paymentMethod: "Visa",
    status: "active",
    img: "https://picsum.photos/300",
  },
  {
    id: "#123145",
    product: "Samsung Galaxy S10",
    customer: "John Doe",
    date: "2020-01-01",
    amount: "$100",
    paymentMethod: "Visa",
    status: "passive",
    img: "https://picsum.photos/300",
  },
  {
    id: "#123145",
    product: "Samsung Galaxy S10",
    customer: "John Doe",
    date: "2020-01-01",
    amount: "$100",
    paymentMethod: "Visa",
    status: "pending",
    img: "https://picsum.photos/300",
  },
  {
    id: "#123145",
    product: "Samsung Galaxy S10",
    customer: "John Doe",
    date: "2020-01-01",
    amount: "$100",
    paymentMethod: "Visa",
    status: "active",
    img: "https://picsum.photos/300",
  },
];
