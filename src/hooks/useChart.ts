import { useEffect, useState } from "react";
import { getChartData } from "../api/data";

export const useChart = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const res = (await getChartData()) as any[];

        // form chart data object
        let chartData: { name: string; Total: unknown }[] = [];
        res.forEach((month) => {
          let entries = Object.entries(month);
          chartData.push({ name: entries[0][0], Total: entries[0][1] });
        });
        setData(chartData);
        setLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { loading, data };
};
