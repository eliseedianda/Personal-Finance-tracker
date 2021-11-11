import React from "react";

const frIncome = Math.round(Math.random());
const InfoCard = () => {
  return (
    <div style={{ padding: "0.10%" }}>
      try saying: Add {frIncome ? " Income " : " Expense "}for
      {frIncome ? " R200 " : " R150 "} in {frIncome ? " Business " : " Bills "}
      for {frIncome ? " Tuesday " : " Friday "}
    </div>
  );
};

export default InfoCard;
