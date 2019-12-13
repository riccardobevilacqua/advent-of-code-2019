import {
  Point,
  Segment,
  getManhattanDistance,
  getSegments,
  isVerticalSegment,
  isHorizontalSegment,
  isPerpendicularSegment,
  getSegmentsIntersection,
  getWiresIntersections,
  getManhattanIntersection
} from './puzzle-03';

const wire1: string[] = ['R8', 'U5', 'L5', 'D3'];
const wire2: string[] = ['U7', 'R6', 'D4', 'L4'];
const segments1: Segment[] = [
  {
    point1: { x: 0, y: 0 },
    point2: { x: 8, y: 0 }
  },
  {
    point1: { x: 8, y: 0 },
    point2: { x: 8, y: 5 }
  },
  {
    point1: { x: 8, y: 5 },
    point2: { x: 3, y: 5 }
  },
  {
    point1: { x: 3, y: 5 },
    point2: { x: 3, y: 2 }
  },
];
const segments2: Segment[] = [
  {
    point1: { x: 0, y: 0 },
    point2: { x: 0, y: 7 }
  },
  {
    point1: { x: 0, y: 7 },
    point2: { x: 6, y: 7 }
  },
  {
    point1: { x: 6, y: 7 },
    point2: { x: 6, y: 3 }
  },
  {
    point1: { x: 6, y: 3 },
    point2: { x: 2, y: 3 }
  },
];

it('should return Manhattan distance between two points', () => {
  const point1: Point = { x: 0, y: 0 };
  const point2: Point = { x: 3, y: 3 };
  const point3: Point = { x: 1, y: 2 };
  const point4: Point = { x: 4, y: 4 };

  expect(getManhattanDistance(point1, point2)).toEqual(6);
  expect(getManhattanDistance(point3, point4)).toEqual(5);
});

it('should get segments providing a list of directions', () => {
  expect(getSegments(wire1)).toStrictEqual(segments1);
  expect(getSegments(wire2)).toStrictEqual(segments2);
});

it('should detect vertical segment', () => {
  const segment: Segment = {
    point1: { x: 2, y: 8 },
    point2: { x: 2, y: 3 }
  };

  expect(isVerticalSegment(segment)).toBeTruthy();
});

it('should detect horizontal segment', () => {
  const segment: Segment = {
    point1: { x: 2, y: 3 },
    point2: { x: 8, y: 3 }
  };

  expect(isHorizontalSegment(segment)).toBeTruthy();
});

it('should detect perpendicular segments', () => {
  const segment1: Segment = {
    point1: { x: 2, y: 3 },
    point2: { x: 6, y: 3 }
  };
  const segment2: Segment = {
    point1: { x: 3, y: 5 },
    point2: { x: 3, y: 2 }
  };

  expect(isPerpendicularSegment(segment1, segment2)).toBeTruthy();
});

it('should get intersection of two segments', () => {
  const segment1: Segment = {
    point1: { x: 2, y: 3 },
    point2: { x: 6, y: 3 }
  };
  const segment2: Segment = {
    point1: { x: 3, y: 5 },
    point2: { x: 3, y: 2 }
  };
  const segment3: Segment = {
    point1: { x: 6, y: 3 },
    point2: { x: 2, y: 3 }
  };
  const segment4: Segment = {
    point1: { x: 3, y: 2 },
    point2: { x: 3, y: 5 }
  };

  expect(getSegmentsIntersection(segment1, segment2)).toStrictEqual({ x: 3, y: 3 });
  expect(getSegmentsIntersection(segment3, segment4)).toStrictEqual({ x: 3, y: 3 });
});

it('should calculate intersections of two wires', () => {
  const expectedIntersections: Point[] = [
    { x: 3, y: 3 },
    { x: 6, y: 5 }
  ];
  const intersections: Point[] = getWiresIntersections(wire1, wire2);

  expect(intersections.length).toBe(2);
  expect(intersections).toEqual(expect.arrayContaining(expectedIntersections));
});

it('should calculate minimum Manhattan distance of two wires intersections', () => {
  expect(getManhattanIntersection(wire1, wire2)).toBe(6);
});
