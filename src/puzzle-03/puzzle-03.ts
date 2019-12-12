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

export const isVerticalSegment = (segment: Segment): boolean => segment.point1.x === segment.point2.x ? true : false;

export const isHorizontalSegment = (segment: Segment): boolean => segment.point1.y === segment.point2.y ? true : false;

export const isPerpendicularSegment = (segment1: Segment, segment2: Segment): boolean => {
  if (
    isVerticalSegment(segment1)
    && isHorizontalSegment(segment2)
    && (
      segment1.point1.x < Math.max(segment2.point1.x, segment2.point2.x)
      && segment1.point1.x > Math.min(segment2.point1.x, segment2.point2.x)
      && segment2.point1.y < Math.max(segment1.point1.y, segment1.point2.y)
      && segment2.point1.y > Math.min(segment1.point1.y, segment1.point2.y)
    )
    || isVerticalSegment(segment2)
    && isHorizontalSegment(segment1)
    && (
      segment2.point1.x < Math.max(segment1.point1.x, segment1.point2.x)
      && segment2.point1.x > Math.min(segment1.point1.x, segment1.point2.x)
      && segment1.point1.y < Math.max(segment2.point1.y, segment2.point2.y)
      && segment1.point1.y > Math.min(segment2.point1.y, segment2.point2.y)
    )
  ) {
    return true;
  }

  return false;
};

export const getSegmentsIntersection = (segment1: Segment, segment2: Segment): Point | null => {
  if (isPerpendicularSegment(segment1, segment2)) {
    let x: number;
    let y: number;

    if (isVerticalSegment(segment1)) {
      x = segment1.point1.x;
      y = segment2.point1.y;
    } else if (isVerticalSegment(segment2)) {
      x = segment2.point1.x;
      y = segment1.point1.y;
    }

    return <Point>{ x, y };
  }

  return null;
};

export const getWiresIntersections = (wire1: Segment[], wire2: Segment[]): Point[] => {
  return wire1.reduce((acc1: Point[], cur1: Segment) => {
    const wireIntersections: Point[] = wire2.reduce((acc2: Point[], cur2: Segment) => {
      const segmentsIntersection: Point = getSegmentsIntersection(cur1, cur2);

      return segmentsIntersection ? [...acc2, segmentsIntersection] : acc2;
    }, []);

    return wireIntersections ? [...acc1, wireIntersections] : acc1;
  }, []);
};
