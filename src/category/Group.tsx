import * as mui from "@mui/material";
import useLocalStorageState from 'use-local-storage-state'
import * as utils from "../utils";
import * as history from "./history";
import { Card } from "./Card";

export function Group() {
  const categories = [
    "Mediamaz TS OS",
    "Mediamaz TS PS",
    "Mediamaz TS SC",
    "Mediamaz TS SC-ADS",
    "Mediamaz TS ADS",
    "Mediamaz TS APO PS",
    "Mediamaz TS Prof PS",
    "Mediamaz TS Bali PS",
    "Mediamaz TS Pen Ters",
    "Mediamaz TS MT PS",
    "Mediamaz TJ",
    "Interpreter OS",
    "Interpreter PS",
    "Interpreter SC",
    "Interpreter TJ",
    "M Work PS",
    "M Work SC",
    "Bootcamp OS",
    "Bootcamp PS",
    "Bootcamp SC",
    "Bootcamp TJ",
    "M Legal Visa PS",
    "M Legal PS",
    "M Legal SKCK PS",
    "M Legal Kitas PS",
    "M Legal OS",
    "M Legal TJ",
    "Go Penerjemah OS",
    "Go Penerjemah PS",
    "Go Penerjemah SC",
    "Go Penerjemah GA",
    "Website TJ",
    "Website Microsite"
  ];

  const groupColors = [
    "Mediamaz",
    "Interpreter",
    "M Work",
    "Bootcamp",
    "M Legal",
    "Go Penerjemah",
    "Website",
  ];

  const [categoryHistory, setCategoryHistory] = useLocalStorageState<string[]>("categories history", {
    defaultValue: []
  });

  const cards = categories.map((category, index) => {
    const onClick = () => {
      categoryHistory.unshift(category);
      setCategoryHistory(categoryHistory);
    };

    const count = categoryHistory.filter(c => c == category).length;

    let color = "";
    for (const [index, groupColor] of groupColors.entries()) {
      if (category.includes(groupColor)) {
        color = utils.colorFromIndex(index);
      }
    }

    return <mui.Grid key={index} item xs={6} sm={4} md={2}>
      <Card category={category} color={color} count={count} onClick={onClick} />
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
