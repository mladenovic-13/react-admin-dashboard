import { getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { usersCollection } from "../firebase";
import { IWidgetData } from "../shared/types";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export const useUserWidget = (): IWidgetData => {
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
  const [amount, setAmount] = useState(0);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        usersCollection,
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        usersCollection,
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
