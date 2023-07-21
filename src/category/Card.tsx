import * as mui from "@mui/material";
import * as subcategory from "./subcategory";

interface Props {
  name: string;
  subcategories: string[];
}

export function Card(props: Props) {
  return (
    <mui.Card>
      <mui.CardContent>
        <h3>{props.name}</h3>
        <subcategory.Grid subcategories={props.subcategories} />
      </mui.CardContent>
    </mui.Card>
  );
}
