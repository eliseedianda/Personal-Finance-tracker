import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./main.styles";
import Form from "./Form/form.component";
import List from "./list/list.component";

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title="Personal Finance Tracker"
          subheader="Powered by Speechly"
        />
        <CardContent>
          <Typography align="center" variant="h4">
            Total Balance R7300
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ linrHeight: "1.5em", marginTop: "20px" }}
          >
            try saying: Add income for R1400 in Category salary for Friday
          </Typography>
          <Divider />
          <Form />
        </CardContent>
        <CardContent clasName={classes.cardContainer}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List></List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Main;
