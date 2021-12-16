import styled from "styled-components";
import Gestures from "./sample/Gestures";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Gestures />
    </Wrapper>
  );
}

export default App;
