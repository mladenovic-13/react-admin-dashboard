import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const productsColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 160 },
  {
    field: "title",
    headerName: "Title",
    width: 200,
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
            alt={params.row.title}
          />
          <p>{params.row.title}</p>
        </div>
      );
    },
  },

  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "category",
    headerName: "Category",
    width: 140,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    renderCell: (params: GridValueGetterParams) => {
      return <span>{`$ ${params.row.price}`}</span>;
    },
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 140,
    renderCell: (params: GridValueGetterParams) => {
      return <span>{`${params.row.stock} pieces`}</span>;
    },
  },
];
