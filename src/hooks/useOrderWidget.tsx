import { getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ordersCollection } from "../firebase";
import { IWidgetData } from "../shared/types";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

export const useOrderWidget = (): IWidgetData => {
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
  const [amount, setAmount] = useState(0);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        ordersCollection,
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        ordersCollection,
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
          100
      );

      setData({
        ...data,
        value: amount.toString(),
        stats: { value: diff, positive: diff > 0 },
      });
    };

    // Call fetch function
    fetchData();
  }, [amount]);

  return data as IWidgetData;
};
