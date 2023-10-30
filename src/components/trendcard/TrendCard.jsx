import React from "react";
import "./trendcard.css";
import { TrendData } from "../../Data/TrendData";
const TrendCard = () => {
  return (
    <div className="trendcard">
      <h3>What's happening</h3>
      {TrendData.map((trend, id) => {
        return (
          <div key={id} className="trend">
            <span>#{trend.name} </span>
            <span>{trend.shares} k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
