
const expenseCol = [
  "#800080",
  "#8B008B",
  "#9400D3",
  "#9932CC",
  "#DA70D6",
  "#DB7093",
  "#DA70D6",
  "#DDA0DD",
  "#FFB6C1",
  "#FF1493",
  "#C71585",
];
const incomeCol = [
  "#1E90FF",
  "#4682B4",
  "#5F9EA0",
  "#87CEFA",
  "#87CEEB",
  "#ADD8E6",
  "#40E0D0",
  "#00FFFF",
  "#00FFFF",
  "#7FFFD4",
  "#191970",
];

export const incomeCategories = [
  { type: "Business", amount: 0, color: incomeCol[0] },
  { type: "Investments", amount: 0, color: incomeCol[1] },
  { type: "Extra income", amount: 0, color: incomeCol[2] },
  { type: "Deposits", amount: 0, color: incomeCol[3] },
  { type: "Lottery", amount: 0, color: incomeCol[4] },
  { type: "Gifts", amount: 0, color: incomeCol[5] },
  { type: "Salary", amount: 0, color: incomeCol[6] },
  { type: "Savings", amount: 0, color: incomeCol[7] },
  { type: "Rental income", amount: 0, color: incomeCol[8] },
];

export const expenseCategories = [
  { type: "Bills", amount: 0, color: expenseCol[0] },
  { type: "Car", amount: 0, color: expenseCol[1] },
  { type: "Clothes", amount: 0, color: expenseCol[2] },
  { type: "Travel", amount: 0, color: expenseCol[3] },
  { type: "Food", amount: 0, color: expenseCol[4] },
  { type: "Shopping", amount: 0, color: expenseCol[5] },
  { type: "House", amount: 0, color: expenseCol[6] },
  { type: "Entertainment", amount: 0, color: expenseCol[7] },
  { type: "Phone", amount: 0, color: expenseCol[8] },
  { type: "Pets", amount: 0, color: expenseCol[9] },
  { type: "Other", amount: 0, color: expenseCol[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};
