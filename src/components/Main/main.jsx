import React, { useContext } from "react";
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
import { FinanceTrackerContext } from "../../context/context";
import InfoCard from "./infoCard.component";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(FinanceTrackerContext);
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title="Personal Finance Tracker"
          subheader="Powered by Speechly"
        />
        <CardContent>
          <Typography align="center" variant="h4">
            Total Balance R{balance}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ linrHeight: "1.5em", marginTop: "20px" }}
          >
            <InfoCard />
          </Typography>
          <Divider className={classes.divider} />
          <Form />
        </CardContent>
        <CardContent className={classes.cardContainer}>
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
