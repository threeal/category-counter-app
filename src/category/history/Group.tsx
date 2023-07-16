import * as mui from "@mui/material";
import * as utils from "../../utils";
import { Card } from "./Card";

interface Props {
  categories: string[];
  categoryHistory: string[];
  setCategoryHistory: (categoryHistory: string[]) => void;
}

export function Group(props: Props) {
  const groupColors = [
    "Mediamaz",
    "Interpreter",
    "M Work",
    "Bootcamp",
    "M Legal",
    "Go Penerjemah",
    "MT",
    "Website",
  ];

  const cards = props.categoryHistory
    .slice(0, 5)
    .map((category, index) => {
      const onClick = () => {
        props.categoryHistory.splice(index, 1);
        props.setCategoryHistory(props.categoryHistory);
      };

      let color = "";
      for (const [index, groupColor] of groupColors.entries()) {
        if (category.includes(groupColor)) {
          color = utils.colorFromIndex(index);
        }
      }

      return <mui.Grid key={index} item xs={2}>
        <Card name={category} color={color} onClick={onClick} />
      </mui.Grid>;
    });

  if (props.categoryHistory.length > 5) {
    cards.push(
      <mui.Grid key={6} item xs={2}>
        <mui.Card>
          <mui.CardContent>
            <center>+{props.categoryHistory.length - 5}</center>
          </mui.CardContent>
        </mui.Card>
      </mui.Grid>
    );
  }

  return <mui.Box m={-2}>
    <mui.Grid container spacing={2}>
      { cards }
    </mui.Grid>
  </mui.Box>
}
