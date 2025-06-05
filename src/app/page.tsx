'use client';
import { useState } from 'react';

function Square({value, handleClick}:{value:null | 'X' | 'O', handleClick: () => void })
{
   return (
      <button 
      className="m-0 w-[30vw] h-[30vw] text-[20vw] border border-gray-300 px-4 py-2 bg-gray-100
      lg:w-[20vh] lg:h-[20vh] lg:text-[10vh] text-black" 
      onClick={handleClick}>{value}</button>
  
  );
}

function Board()
{

  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<Array<null | 'X' | 'O'>>(Array(9).fill(null));
  const winner = haveWinner({squares});
  let status;
  let press;
  if (winner) {
    status = "Winner: " + winner;
    press = "PRESS TO RESTART";
   } else if (squares.every(square => square !== null)){
    status= "PRESS TO RESTART";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(box:number)
  {
    if (squares[box] || haveWinner({squares}) ) {
    
    return;
      }
    
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[box] = 'X';
    } else {
      nextSquares[box] = 'O';
    }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
  
  }
  function Restart()
  {
    setSquares(Array(9).fill(null));
    setXIsNext(true);  
  }
  

  return (
    <> 
    <h1 className='text-center font-bold mt-10 mb-5 text-xl md:text-2xl lg:text-4xl'>TIC TAC TOE</h1>
      <h1 className='text-center font-bold mb-5 text-2xl md:text-4xl lg:text-6xl'>THE GAME</h1>
            <div className="text-center font-bold mb-5 text-xl md:text-2xl lg:text-4xl" onClick={() => Restart()}>{status}</div>
          
    <div className="flex flex-col items-center justify-center h-[60vh] ">
      
      <div className='m-auto lg:m-0 lg:'>
          <div className="text-center font-bold mb-5 text-xl md:text-2xl lg:text-4xl" onClick={() => Restart()}>{press}</div>
     <div className="flex-1 flex items-center justify-center">
        <Square value={squares[0]} handleClick={() => handleClick(0)}/>
        <Square value={squares[1]} handleClick={() => handleClick(1)}/>
        <Square value={squares[2]} handleClick={() => handleClick(2)}/>
      </div>
      <div  className="flex-1 flex items-center justify-center ">
        <Square value={squares[3]} handleClick={() => handleClick(3)}/>
        <Square value={squares[4]} handleClick={() => handleClick(4)}/>
        <Square value={squares[5]} handleClick={() => handleClick(5)}/>
      </div>
      <div  className="flflex-1 flex items-center justify-centerex ">
        <Square value={squares[6]} handleClick={() => handleClick(6)}/>
        <Square value={squares[7]} handleClick={() => handleClick(7)}/>
        <Square value={squares[8]} handleClick={() => handleClick(8)}/>

      </div>
    </div>
    </div>
    
    </>
  );
}

function haveWinner({squares}:{squares:Array<'X' | 'O' | null>}) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
   
}
export default function TicTac() {

  return (
    <>
    <Board />
    </>

    
  );
}
