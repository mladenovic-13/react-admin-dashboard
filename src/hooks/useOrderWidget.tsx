import { useEffect, useState } from "react";
import { IWidgetData, IWidgetWrapper } from "../shared/types";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import { getWidget } from "../api/data";

export const useOrderWidget = (): IWidgetWrapper => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IWidgetData>({
    type: "ORDERS",
    value: "",
    stats: {
      value: 0,
      positive: true,
    },
    linkTitle: "See all orders",
    icon: (
      <ListAltOutlinedIcon
        sx={{
          backgroundColor: "rgb(76, 196, 55, 0.6)",
          borderRadius: "5px;",
          padding: "3px",
        }}
      />
    ),
  });
  useEffect(() => {
    getWidget("orders").then(({ users, difference }) => {
      setLoading(false);
      setData((prev) => ({
        ...prev,
        value: users.toString(),
        stats: { value: difference, positive: difference > 0 },
      }));
    });
  }, []);

  return { loading, data } as IWidgetWrapper;
};
