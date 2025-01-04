import { generateTiles } from "./truchet.js";
import {
  borderLands,
  circle,
  classicAlternate,
  classicSquare,
  classicTruchet,
  gradually,
  halfAndHalf,
  halfAndHalfInverse,
  diagonally,
  zag,
  zig,
} from "./tileGenerators.js";

// Vary this. Try any or all of the above
// Also try each algorithm with a variety of widths and heights
// For example: const tileGenerator = halfAndHalf;
const randomTiles = [
  borderLands,
  circle,
  classicAlternate,
  classicSquare,
  classicTruchet,
  gradually,
  halfAndHalf,
  halfAndHalfInverse,
  diagonally,
  zag,
  zig,
];
const tileGenerator = randomTiles.at(Math.floor(Math.random() * 10));

const [width, height] = Deno.args.map((x) => +x);

console.log(generateTiles(width, height, circle));
