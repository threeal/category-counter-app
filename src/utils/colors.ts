import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey } from '@mui/material/colors';

const colors = [
  red,  purple, indigo, lightBlue, teal, lightGreen,  yellow, orange, brown, blueGrey,
  pink, deepPurple, blue, cyan,  green, lime, amber, deepOrange, grey
];

export function colorFromIndex(index: number) {
  return colors[index % colors.length][100];
}
