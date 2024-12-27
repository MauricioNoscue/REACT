import "./index.css";
import { useState } from "react";

const TURNS = {
  x: "x",
  o: "o",
};

const Square = ({ children, isselection, updateBoard, index }) => {
  const className = `square ${isselection ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};




const WINER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);
  const[winner, setWinner] = useState(null)


  const checkWiner = (checkBoadr) => {
    for(const combo of WINER_COMBOS){
      const[a,b,c] = combo
      if(checkBoadr[a] && checkBoadr[a] == checkBoadr[b] && checkBoadr[a] == checkBoadr[c]){
        return checkBoadr[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn == TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    const newWinner = checkWiner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }
  };

  return (
    <main className=" board">
      <h1>hola mundo </h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}  
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isselection={turn == TURNS.x}>{TURNS.x}</Square>
        <Square isselection={turn == TURNS.o}>{TURNS.o}</Square>
      </section>

        {
          winner != null && (
              <section className="winner">
                <div className="text">
                  <h2>
                    {
                      winner == false ? 'empate': 'ganó: '
                    }
                  </h2>
                  <header className="wi">
                    {winner && <Square>{winner}</Square>}
                  </header>
                </div>
              </section>
          )
        }

    </main>
  );
}

export default App;
