import { Position, Size } from "./types";

function hitTest(
  elem1: { position: Position; size: Size },
  elem2: { position: Position; size: Size }
) {
  return (
    elem1.position.x < elem2.position.x + elem2.size.width &&
    elem1.position.x + elem1.size.width > elem2.position.x &&
    elem1.position.y < elem2.position.y + elem2.size.height &&
    elem1.position.y + elem1.size.height > elem2.position.y
  );
}
