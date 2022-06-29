import React from "react";
import { Link } from "react-router-dom";
import { WidgetContainer } from "./style";
import { WidgetProps } from "./types";
import Stats from "../stats/Stats";

const Widget: React.FC<WidgetProps> = ({
  type,
  value,
  linkTitle,
  stats,
  icon,
}) => {
  return (
    <WidgetContainer>
      <div className="left">
        <h1 className="title">{type}</h1>
        <h1 className="value">{value}</h1>
        <Link className="link" to={"/"}>
          {linkTitle}
        </Link>
      </div>
      <div className="right">
        <Stats positive={stats.positive} value={`${stats.value.toString()}%`} />
        <div className="icon">{icon}</div>
      </div>
    </WidgetContainer>
  );
};

export default Widget;