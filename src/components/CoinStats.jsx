import React from "react";
import Div from "./Div"
const CoinStats = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <Div data={data}/>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinStats;