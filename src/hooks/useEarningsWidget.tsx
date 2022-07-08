import { getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ordersCollection } from "../firebase";
import { IWidgetData } from "../shared/types";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

export const useEarningsWidget = (): IWidgetData => {
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

      let sumLast = 0;
      let sumPrev = 0;

      lastMonthData.docs.forEach((doc) => {
        sumLast += doc.data().total;
      });
      prevMonthData.docs.forEach((doc) => {
        sumPrev += doc.data().total;
      });

      setAmount(sumLast);
      setDiff(Math.floor(((sumLast - sumPrev) / sumPrev) * 100));

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
