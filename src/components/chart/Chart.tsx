import React from "react";
import { ChartContainer } from "./style";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useChart } from "../../hooks/useChart";
import LoadingSpiner from "../loadingSpiner/LoadingSpiner";

const Chart = () => {
  const { loading, data } = useChart();

  return (
    <ChartContainer>
      <div className="title">Last 6 months (Revenue)</div>
      {loading ? (
        <LoadingSpiner />
      ) : (
        <ResponsiveContainer width={800}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className="grid" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </ChartContainer>
  );
};

export default Chart;
