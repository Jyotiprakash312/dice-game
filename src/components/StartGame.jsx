import styled from "styled-components";
import { Button } from "../Styled/button";
const StartGame = ({toogle}) => {
  return (
    <Container>
       <div>
        <img src="/images/dices.png" alt="" />
        </div>

      <div className="content">
        <h1>Dice Game</h1>
        <Button
         onClick={toogle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width:1180px;
  height: 100vh;
  display: flex;
  margin: auto;
  align-items:center;

  .content h1 {
  font-size: 96px;

  }
`;

