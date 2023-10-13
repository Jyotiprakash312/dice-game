import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';
import './index.css';
import {useState} from 'react';
function App() {

  const[isGameStarted, setIsGameStarted] = useState(false);
 
   const toogleGamePlay =()=>{
   setIsGameStarted((prev)=> !prev);
 }

  return(
  <>
  {isGameStarted? <GamePlay/>: <StartGame  toogle={toogleGamePlay}/>}
   </> 

  );
}

export default App; 



