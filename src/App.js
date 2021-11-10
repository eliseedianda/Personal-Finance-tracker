import React from "react";
import Table from "./components/tables/tables.component";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Main from "./components/Main/main";
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        classeName={classes.grid}
        container
        spacing={2}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          {" "}
          <Table title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          {" "}
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          {" "}
          <Table title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
