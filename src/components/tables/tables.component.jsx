import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import useStyles from "./style";
import useTransaction from "../../useTransaction";

import { Doughnut } from "react-chartjs-2";
const Table = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransaction(title);
  return (
    <div>
      <Card className={title === "Income" ? classes.income : classes.expense}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h4">R{total}</Typography>
          <Doughnut data={chartData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Table;
