export const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

export const boxVariants = {
  hover: { scale: 1.1, x: -14, y: -6 },
};

export const svg = {
  start: { pathLength: 0, fill: 'rgba(255, 255, 255, 0)' },
  end: {
    fill: 'rgba(255, 255, 255, 1)',
    pathLength: 1,
  },
};

export const overlay = {
  hidden: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  visible: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  exit: { backgroundColor: 'rgba(0, 0, 0, 0)' },
};
// const arrangeCircles = (circleNumbers: number, Shape: JSX.Element) => {
//   return Array.from({ length: circleNumbers }, (_, index) => <Shape key={circleNumbers} />);
// };
