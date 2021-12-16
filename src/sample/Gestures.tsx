import styled from "styled-components";
import { motion } from "framer-motion";

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
  drag: { backgroundColor: "rgb(52, 152, 219)", transition: { duration: 10 } },
};

function Gestures() {
  return (
    <Box
      drag
      variants={boxVariants}
      whileHover="hover"
      whileDrag="drag"
      whileTap="click"
    />
  );
}
export default Gestures;
