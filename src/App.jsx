import { useEffect, useState } from "react";
import "./App.css";
import Square from "./components/Square";
import Confetti from "react-confetti";
const calculateWinner = (squares) => {
  const winnerCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 6, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winnerCondition.length; i++) {
    const [a, b, c] = winnerCondition[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(false);
  const [gameIsDraw, setGameIsDraw] = useState(false);
  let winner = calculateWinner(squares);
  const boxClickHandler = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const newSquares = [...squares];
    if (xTurn) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setXTurn(!xTurn);
  };

  const playAgainHanlder = () => {
    setSquares(Array(9).fill(null));
    setGameIsDraw(false);
  };

  useEffect(() => {
    if (squares.every((element) => element !== null)) {
      setGameIsDraw(true);
    }
  }, [squares]);

  console.log(gameIsDraw);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-4">Tic Tack Toe</h1>
      <div className="text-center text-2xl">
        {!gameIsDraw && (
          <div>
            {winner && !gameIsDraw ? (
              <h1>Winner is {winner} </h1>
            ) : xTurn ? (
              "Your Turn X"
            ) : (
              "Your Turn 0"
            )}
          </div>
        )}
        {gameIsDraw && <h1>Game is Draw Baby</h1>}

        <div className="flex flex-col items-center justify-center mt-12"></div>
        <div>
          <Square value={squares[0]} onSqrClick={() => boxClickHandler(0)} />
          <Square value={squares[1]} onSqrClick={() => boxClickHandler(1)} />

          <Square value={squares[2]} onSqrClick={() => boxClickHandler(2)} />
        </div>
        <div>
          <Square value={squares[3]} onSqrClick={() => boxClickHandler(3)} />
          <Square value={squares[4]} onSqrClick={() => boxClickHandler(4)} />
          <Square value={squares[5]} onSqrClick={() => boxClickHandler(5)} />
        </div>
        <div>
          <Square value={squares[6]} onSqrClick={() => boxClickHandler(6)} />
          <Square value={squares[7]} onSqrClick={() => boxClickHandler(7)} />

          <Square value={squares[8]} onSqrClick={() => boxClickHandler(8)} />
        </div>
        {winner && (
          <button
            className="px-8 py-2 text-black bg-white m-6"
            onClick={playAgainHanlder}
          >
            Play Again
          </button>
        )}
      </div>
      {winner && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </div>
  );
}

export default Board;
