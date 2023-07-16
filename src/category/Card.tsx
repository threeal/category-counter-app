import * as mui from "@mui/material";

interface Props {
  category: string;
  color: string;
  count: number;
  onClick?: () => void;
}

export function Card(props: Props) {
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  return <mui.Card style={{backgroundColor: props.color}}>
    <mui.CardActionArea onClick={onClick}>
      <mui.CardContent>
        <mui.Stack spacing={2}>
          <center>
          {props.category}
          <h1>{props.count}</h1>
          </center>
        </mui.Stack>
      </mui.CardContent>
    </mui.CardActionArea>
  </mui.Card>
}
