import * as mui from "@mui/material";
import { Card } from "./Card";

interface Props {
  subcategories: string[];
}

export function Grid(props: Props) {
  const items = props.subcategories.map((category, index) => (
    <mui.Grid item key={index} xs={2}>
      <Card name={category} />
    </mui.Grid>
  ));

  return (
    // <mui.Box m={-2}>
      <mui.Grid container spacing={2}>
        { items }
      </mui.Grid>
    // </mui.Box>
  );
}
