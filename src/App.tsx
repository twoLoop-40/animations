import React from 'react';
import { Box, Circle, Wrapper } from './styles/componentStyles';

const makeVars = <T extends { start: any; end: any }>({ start, end }: T) => {
  return {
    start,
    end,
  };
};

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  const arrangeCircles = (circleNumbers: number) => {
    return Array.from({ length: circleNumbers }, (_, index) => (
      <Circle key={index} variants={circleVariants} />
    ));
  };
  return (
    <Wrapper>
      <Box variants={makeVars({ ...boxVariants })} initial="start" animate="end">
        {arrangeCircles(4)}
      </Box>
    </Wrapper>
  );
}

export default App;
