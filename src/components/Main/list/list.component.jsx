import React from "react";
import useStyles from "./list.style.js";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

const List = () => {
  const classes = useStyles();
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "salary",
      amount: 250,
      date: "wed nov 10",
    },
    {
      id: 2,
      type: "Expense",
      category: "school",
      amount: 150,
      date: "wed nov 10",
    },
    {
      id: 3,
      type: "Income",
      category: "Business",
      amount: 250,
      date: "wed nov 10",
    },
  ];
  return (
    <div>
      <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
          <Slide
            direction="down"
            in
            mountOnEnter
            unmountOnExit
            key={transaction.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  className={
                    transaction.type === "Income"
                      ? classes.avatarIncome
                      : classes.avatarExpense
                  }
                >
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={transaction.catergory}
                secondary={`R${transaction.amount} -${transaction.amount}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MUIList>
    </div>
  );
};

export default List;
