import Board from "./Board";
import { useState } from "react";

const PLAYER_X = "X";
const PLAYER_Y = "O";

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

  const handleClick = (index) => {
    console.log(index);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board tiles={tiles} onTileClick = {handleClick}/>
    </div>
  );
}
export default TicTacToe;
