import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { isMainDiagonal, makeVars } from './apis/util';
import {
  BiggerBox,
  Box,
  Circle,
  Grid,
  Overlay,
  Wrapper,
} from './styles/componentStyles';
import { overlay } from './styles/variants';

function App() {
  const [id, setId] = useState<null | number>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  const makeBooleanBall = (bool: boolean) => {
    return bool ? <Circle layoutId="circle" /> : null;
  };
  return (
    <Wrapper>
      <BiggerBox>
        <Grid>
          {[1, 2, 3, 4].map((n, index) => (
            <Box
              variants={
                n === 1
                  ? makeVars({
                      hover: { scale: 1.1, x: -14, y: -7 },
                    })
                  : n === 4
                  ? makeVars({
                      hover: { scale: 1.1, x: 14, y: 7 },
                    })
                  : makeVars({ hover: { scale: 1 } })
              }
              onClick={() => {
                return isMainDiagonal(n)
                  ? setId(n)
                  : setId(null);
              }}
              whileHover="hover"
              key={index}
              layoutId={n.toString()}
            >
              {n === 2
                ? makeBooleanBall(clicked)
                : n === 3
                ? makeBooleanBall(!clicked)
                : null}
            </Box>
          ))}
        </Grid>

        <AnimatePresence>
          {id ? (
            <Overlay
              variants={makeVars(overlay)}
              onClick={() => setId(null)}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Box
                layoutId={id?.toString()}
                style={{ width: 400, height: 300 }}
              />
            </Overlay>
          ) : null}
        </AnimatePresence>
      </BiggerBox>
      <button onClick={toggleClicked}>Switch</button>
    </Wrapper>
  );
}

export default App;
