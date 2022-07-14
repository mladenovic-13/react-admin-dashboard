import { useEffect, useState } from "react";
import { IWidgetData, IWidgetWrapper } from "../shared/types";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { getWidget } from "../api/data";

export const useUserWidget = (): IWidgetWrapper => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IWidgetData>({
    type: "USERS",
    value: "",
    stats: {
      value: 0,
      positive: true,
    },
    linkTitle: "See all users",
    icon: (
      <PersonOutlineIcon
        sx={{
          backgroundColor: "rgb(76, 196, 55, 0.6)",
          borderRadius: "5px;",
          padding: "3px",
        }}
      />
    ),
  });

  useEffect(() => {
    getWidget("users").then(({ users, difference }) => {
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
