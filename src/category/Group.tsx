import * as mui from "@mui/material";
import useLocalStorageState from 'use-local-storage-state'
import * as utils from "../utils";
import * as history from "./history";
import { IncrementButton } from "./IncrementButton";

export function Group() {
  const [categories] = useLocalStorageState("categories", {
    defaultValue: [
      "Mediamaz TS OS",
      "Mediamaz TS PS",
      "Mediamaz TS SC",
    ]
  });

  const [categoryHistory, setCategoryHistory] = useLocalStorageState<string[]>("categories history", {
    defaultValue: []
  });

  const incrementButtons = categories.map((category, index) => {
    const onIncrement = () => {
      categoryHistory.push(category);
      setCategoryHistory(categoryHistory);
    };

    return <mui.Grid key={index} item xs={6} sm={4} md={3}>
      <IncrementButton name={category} color={utils.colorFromIndex(index)} onIncrement={onIncrement} />
    </mui.Grid>
  });

  return <mui.Grid container spacing={2}>
    <history.Group/>
    {incrementButtons}
  </mui.Grid>;
}
