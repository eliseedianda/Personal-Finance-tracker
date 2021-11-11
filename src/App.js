import React, { useEffect, useRef } from "react";
import Table from "./components/tables/tables.component";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Main from "./components/Main/main";
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
const App = () => {
  const classes = useStyles();
  const main = useRef(null);
  const { speechState } = useSpeechContext();
  const executeScroll = () => {
    main.current.scrollIntoview();
  };
  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, []);
  return (
    <div>
      <Grid
        classeName={classes.grid}
        container
        spacing={2}
        alignItems="center"
        justify="center"
        style={{ height: "90vh", width: "200vh" }}
      >
        <Grid item xs={12} sm={3} className={classes.mobile}>
          {" "}
          <Table title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={5} className={classes.main}>
          {" "}
          <Main fullwidth />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}>
          {" "}
          <Table title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.last}>
          {" "}
          <Table title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
