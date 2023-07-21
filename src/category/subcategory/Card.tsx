import * as mui from "@mui/material";
import { useState } from "react";

interface Props {
  name: string;
}

export function Card(props: Props) {
  const [count, setCount] = useState(0);

  return (
    <mui.Card>
      <mui.CardActionArea onClick={() => setCount(count + 1)}>
        <mui.CardContent>
          <mui.Stack spacing={2} alignItems="center">
            <div>{props.name}</div>
            <h3>{count}</h3>
          </mui.Stack>
        </mui.CardContent>
      </mui.CardActionArea>
    </mui.Card>
  );
}
