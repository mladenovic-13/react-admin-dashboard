import { useEffect, useState } from "react";
import { IWidgetData, IWidgetWrapper } from "../shared/types";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { getWidget } from "../api/data";

export const useBalanceWidget = (): IWidgetWrapper => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IWidgetData>({
    type: "BALANCE",
    value: "",
    stats: {
      value: 0,
      positive: true,
    },
    linkTitle: "See details",
    icon: (
      <CreditCardOutlinedIcon
        sx={{
          backgroundColor: "rgb(76, 196, 55, 0.6)",
          borderRadius: "5px;",
          padding: "3px",
        }}
      />
    ),
  });

  useEffect(() => {
    getWidget("balance").then(({ users, difference }) => {
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
