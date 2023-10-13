import styled from "styled-components";
const RoleDice = ({currentDice , roleDice}) => {

  return (
    <DiceContainer>
    <div className="dice" onClick={roleDice}>
      <img src={`images/dice_${currentDice}.png`} alt="dice_1" />
    </div>
    <p>Click on Dice To Roll</p>
    </DiceContainer>

  );
};

export default RoleDice

const DiceContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 48px;
align-items: center;

p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}

`;