import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 0.8, borderRadius: "100px" },
};

function Gestures() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <BiggerBox ref={biggerBoxRef}>
      <Box
        drag
        dragSnapToOrigin
        dragElastic={0.5}
        dragConstraints={biggerBoxRef}
        variants={boxVariants}
        whileHover="hover"
        whileTap="click"
      />
    </BiggerBox>
  );
}
export default Gestures;
