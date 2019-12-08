import { Point, getManhattanDistance } from "./puzzle-03";

it("should return Manhattan distance between two points", () => {
  const point1: Point = { x: 0, y: 0 };
  const point2: Point = { x: 3, y: 3 };
  const point3: Point = { x: 1, y: 2 };
  const point4: Point = { x: 4, y: 4 };

  expect(getManhattanDistance(point1, point2)).toEqual(6);
  expect(getManhattanDistance(point3, point4)).toEqual(5);
});
