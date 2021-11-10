import React, { useState, useContext } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./form.styles";
import { FinanceTrackerContext } from "../../../context/context";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: new Date(),
};
const Form = () => {
  const classes = useStyles();
  const [data, setData] = useState(initialState);

  const handleType = (e) => setData({ ...data, type: e.target.value });
  const handleCategory = (e) => setData({ ...data, category: e.target.value });
  const handleAmount = (e) => setData({ ...data, amount: e.target.value });
  const handleDate = (e) => setData({ ...data, date: e.target.value });

  const { addTransaction } = useContext(FinanceTrackerContext);

  const createTransaction = () => {
    const transaction = { ...data, amount: Number(data.amount), id: uuidv4() };
    addTransaction(transaction);
    setData(initialState);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle2" gutterBottom>
            {" "}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select value={data.type} onChange={handleType}>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select value={data.category} onChange={handleCategory} fullwidth>
              <MenuItem value="business">business</MenuItem>
              <MenuItem value="salary">salary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            label="Amount"
            value={data.Amount}
            onChange={handleAmount}
            fuulWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="date"
            label="Date"
            value={data.date}
            onChange={handleDate}
            fullWidth
          />
        </Grid>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          fullWidth
          onClick={createTransaction}
        >
          Create
        </Button>
      </Grid>
    </div>
  );
};

export default Form;
