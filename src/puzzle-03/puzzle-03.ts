export interface Point {
  x: number;
  y: number;
}

export const getManhattanDistance = (point1: Point, point2: Point): number =>
  Math.abs(point1.x - point2.x) + Math.abs(point1.y - point2.y);
