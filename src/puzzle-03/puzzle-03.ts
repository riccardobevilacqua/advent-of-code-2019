export interface Point {
  x: number;
  y: number;
}

export interface Segment {
  point1: Point;
  point2: Point;
}

export const getManhattanDistance = (point1: Point, point2: Point): number =>
  Math.abs(point1.x - point2.x) + Math.abs(point1.y - point2.y);

export const getSegments = (input: string[] = []): Segment[] => {
  return input.reduce((acc: Segment[], cur: string) => {
    const direction: string = cur[0];
    const distance: number = parseInt(cur.slice(1));

    const point1: Point = acc.length > 0 ? [...acc].pop().point2 : <Point>{ x: 0, y: 0 };
    let point2: Point;

    switch (direction) {
      case 'U':
        point2 = { x: point1.x, y: point1.y + distance };
        break;
      case 'R':
        point2 = { x: point1.x + distance, y: point1.y };
        break;
      case 'D':
        point2 = { x: point1.x, y: point1.y - distance };
        break;
      case 'L':
        point2 = { x: point1.x - distance, y: point1.y };
        break;
    }
    return [
      ...acc,
      <Segment>{ point1, point2 }
    ];
  }, []);
};
