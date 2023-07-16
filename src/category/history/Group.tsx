import * as mui from "@mui/material";
import * as utils from "../../utils";
import { Card } from "./Card";

interface Props {
  categories: string[];
  categoryHistory: string[];
  setCategoryHistory: (categoryHistory: string[]) => void;
}

export function Group(props: Props) {
  const categoryColor: {[category: string]: string} = {};
  for (const [index, category] of props.categories.entries()) {
    categoryColor[category] = utils.colorFromIndex(index);
  }

  const cards = props.categoryHistory
    .slice(0, 5)
    .map((category, index) => {
      const onClick = () => {
        props.categoryHistory.splice(index, 1);
        props.setCategoryHistory(props.categoryHistory);
      };
      return <mui.Grid key={index} item xs={2}>
        <Card name={category} color={categoryColor[category]} onClick={onClick} />
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
