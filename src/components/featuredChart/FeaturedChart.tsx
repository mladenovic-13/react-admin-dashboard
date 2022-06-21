import React from "react";
import { FeaturedChartContainer } from "./style";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Stats from "../stats/Stats";

const FeaturedChart = () => {
  return (
    <FeaturedChartContainer>
      <div className="heading">
        <h1>Total Revenue</h1>
        <MoreHorizIcon className="dots" />
      </div>
      <div className="bottom">
        <div className="progress">
          <div className="progressBar">
            <CircularProgressbar strokeWidth={5} value={70} text={`${70}%`} />
          </div>
        </div>
        <div className="progressTitle">Total sales made today</div>
        <div className="value">$2,348</div>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="stats">
          <div className="statsItem">
            <h2>Target</h2>
            <Stats positive={false} value={"$12.4k"} />
          </div>
          <div className="statsItem">
            <h2>Last Week</h2>
            <Stats positive={false} value={"$13.1k"} />
          </div>
          <div className="statsItem">
            <h2>Last Month</h2>
            <Stats positive={true} value={"$11.7k"} />
          </div>
        </div>
      </div>
    </FeaturedChartContainer>
  );
};

export default FeaturedChart;
