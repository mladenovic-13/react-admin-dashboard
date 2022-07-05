import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 160 },
  {
    field: "displayName",
    headerName: "Display Name",
    width: 180,
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
          <p>{params.row.displayName}</p>
        </div>
      );
    },
  },

  {
    field: "username",
    headerName: "Username",
    width: 130,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 130,
  },
  {
    field: "address",
    headerName: "Address",
    width: 170,
    renderCell: (params: GridValueGetterParams) => {
      return <span>{`${params.row.address}, ${params.row.country}`}</span>;
    },
  },
];
