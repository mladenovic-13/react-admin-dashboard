import { useEffect, useState } from "react";
import { IWidgetData, IWidgetWrapper } from "../shared/types";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { getWidget } from "../api/data";

export const useEarningsWidget = (): IWidgetWrapper => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IWidgetData>({
    type: "EARNINGS",
    value: "",
    stats: {
      value: 0,
      positive: true,
    },
    linkTitle: "See all users",
    icon: (
      <AttachMoneyOutlinedIcon
        sx={{
          backgroundColor: "rgb(76, 196, 55, 0.6)",
          borderRadius: "5px;",
          padding: "3px",
        }}
      />
    ),
  });
  useEffect(() => {
    getWidget("earnings").then(({ users, difference }) => {
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
