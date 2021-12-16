import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function MotionValue() {
  const x = useMotionValue(0);
  console.log(x);
  return <Box style={{ x }} drag="x" dragSnapToOrigin />;
}
export default MotionValue;
