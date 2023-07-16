import { Card, CardActionArea, CardContent, Stack } from "@mui/material";
import useLocalStorageState from 'use-local-storage-state'

interface Props {
  name: string;
  color: string;
  onIncrement?: () => void;
}

export function IncrementButton(props: Props) {
  const [count, setCount] = useLocalStorageState(`${props.name} category count`, { defaultValue: 0 });

  const onClick = () => {
    setCount(count + 1);
    if (props.onIncrement) props.onIncrement();
  };

  return <Card style={{backgroundColor: props.color}}>
    <CardActionArea onClick={onClick}>
      <CardContent>
        <Stack spacing={2}>
          <b>{props.name}</b>
          <div>{count}</div>
        </Stack>
      </CardContent>
    </CardActionArea>
  </Card>
}
