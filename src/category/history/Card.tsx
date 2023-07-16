import * as mui from "@mui/material";

interface Props {
  name: string;
  color: string;
  onClick?: () => void;
}

export function Card(props: Props) {
  return <mui.Card style={{backgroundColor: props.color}}>
    <mui.CardActionArea onClick={props.onClick}>
      <mui.CardContent>
        <center>{props.name}</center>
      </mui.CardContent>
    </mui.CardActionArea>
  </mui.Card>
}
