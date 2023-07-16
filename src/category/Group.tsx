import * as mui from "@mui/material";
import useLocalStorageState from 'use-local-storage-state'
import * as utils from "../utils";
import * as history from "./history";
import { Card } from "./Card";

export function Group() {
  const [categories] = useLocalStorageState<string[]>("categories", {
    defaultValue: [
      "Mediamaz TS OS",
      "Mediamaz TS PS",
      "Mediamaz TS SC",
    ]
  });

  const [categoryHistory, setCategoryHistory] = useLocalStorageState<string[]>("categories history", {
    defaultValue: []
  });

  const cards = categories.map((category, index) => {
    const onClick = () => {
      categoryHistory.unshift(category);
      setCategoryHistory(categoryHistory);
    };

    const count = categoryHistory.filter(c => c == category).length;

    return <mui.Grid key={index} item xs={6} sm={4} md={3}>
      <Card category={category} color={utils.colorFromIndex(index)} count={count} onClick={onClick} />
    </mui.Grid>
  });

  return<mui.Stack spacing={2}>
    <h3>Click to increase count</h3>
    <mui.Box m={-2}>
      <mui.Grid container spacing={2}>
        {cards}
      </mui.Grid>
    </mui.Box>
    <h3>Click to decrease count (remove item)</h3>
    <history.Group categories={categories} categoryHistory={categoryHistory} setCategoryHistory={setCategoryHistory}/>
  </mui.Stack>;
}
