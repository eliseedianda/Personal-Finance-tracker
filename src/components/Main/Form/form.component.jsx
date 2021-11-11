import React, { useState, useContext, useEffect } from "react";
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
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import FormatDate from "../../../utils/formatDate";
import { useSpeechContext } from "@speechly/react-client";
import Cnackbar from "../../snackbar/Snackbar.component";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: FormatDate(new Date()),
};
const Form = () => {
  const classes = useStyles();
  const [data, setData] = useState(initialState);
  const { segment } = useSpeechContext();
  const [open, setOpen] = useState(false);

  const handleType = (e) => setData({ ...data, type: e.target.value });
  const handleCategory = (e) => setData({ ...data, category: e.target.value });
  const handleAmount = (e) => setData({ ...data, amount: e.target.value });

  const { addTransaction } = useContext(FinanceTrackerContext);

  const createTransaction = () => {
    if (Number.isNaN(Number(data.amount)) || !data.date.includes("-")) {
      return;
    }
    const transaction = { ...data, amount: Number(data.amount), id: uuidv4() };

    setOpen(true);
    addTransaction(transaction);
    setData(initialState);
  };
  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === "add_expense") {
        setData({ ...data, type: "Expense" });
      } else if (segment.intent.intent === "add_income") {
        setData({ ...data, type: "Income" });
      } else if (
        segment.isFinal &&
        segment.intent.intent === "creat_transaction"
      ) {
        return createTransaction();
      } else if (
        segment.isFinal &&
        segment.intent.intent === "cancel_transaction"
      ) {
        return setData(initialState);
      }
      segment.entities.forEach((e) => {
        const category = `${e.value.charAt(0)}${e.value
          .slice(1)
          .toLocaleLowerCase()}`;
        switch (e.type) {
          case "amount":
            setData({ ...data, amount: e.value });
            break;
          case "category":
            if (incomeCategories.map((c) => c.type).includes(category)) {
              setData({ ...data, type: "Income", category });
            } else if (
              expenseCategories.map((c) => c.type).includes(category)
            ) {
              setData({ ...data, type: "Expense", category });
            }

            break;
          case "date":
            setData({ ...data, date: e.value });
            break;
          default:
            break;
        }
      });

      if (
        segment.isFinal &&
        data.amount &&
        data.category &&
        data.date &&
        data.type
      ) {
        createTransaction();
      }
    }
  }, [segment]);
  const selectCategories =
    data.type === "Income" ? incomeCategories : expenseCategories;
  return (
    <div>
      <Grid container spacing={2}>
        <Cnackbar open={open} setOpen={setOpen} />
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle2" gutterBottom>
            {segment && segment.words.map((w) => w.value).join(" ")}
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
              {selectCategories.map((categor) => (
                <MenuItem key={categor.type} value={categor.type}>
                  {categor.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            label="Amount"
            value={data.amount}
            onChange={handleAmount}
            fuulWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="date"
            label="Date"
            value={data.date}
            onChange={(e) => setData({ ...data, date: e.target.value })}
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
