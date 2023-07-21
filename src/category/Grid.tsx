import * as mui from "@mui/material";
import { Card } from "./Card";

export function Grid() {

  const categories = [
    { name: "Fruits", subcategories: ["Apple", "Banana", "Citrus", "Durian"] },
    { name: "Animals", subcategories: ["Ant", "Bee", "Cat", "Dog"] },
    { name: "Countries", subcategories: ["Australia", "Brazil", "Canada", "Denmark"] },
  ];

  const items = categories.map((category, index) => (
    <mui.Grid item key={index} xs={6}>
      <Card name={category.name} subcategories={category.subcategories} />
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
