import * as mui from "@mui/material";
import { Card } from "./Card";

export function Grid() {
  const names = ["Apple", "Banana", "Citrus"];

  const items = names.map((name, index) => (
    <mui.Grid item key={index} xs={2}>
      <Card name={name} />
    </mui.Grid>
  ));

  return (
    <mui.Box m={-2}>
      <mui.Grid container spacing={2}>
        { items }
      </mui.Grid>
    </mui.Box>
  );
}
