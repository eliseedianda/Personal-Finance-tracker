import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import useStyles from "./style";

import { Doughnut } from "react-chartjs-2";
const Table = ({ title }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={title === "Income" ? classes.income : classes.expense}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h4">R700</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Table;
