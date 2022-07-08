import React from "react";
import { Link } from "react-router-dom";
import { WidgetContainer } from "./style";
import Stats from "../stats/Stats";
import { IWidgetData } from "../../shared/types";

const Widget: React.FC<IWidgetData> = ({
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
        {type === "BALANCE" || type === "EARNINGS" ? (
          <h1 className="value">$ {value}</h1>
        ) : (
          <h1 className="value">{value}</h1>
        )}
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
