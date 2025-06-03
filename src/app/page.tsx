'use client';
import { useState } from 'react';

function Square()
{
    function handleClick() {
    setValue('X');
  }
 
  const [value, setValue] =useState<null | 'X' | 'O'>(null);;
   
   return (
      <button 
      className="m-0 w-[30vw] h-[30vw] text-[20vw] border border-gray-300 px-4 py-2 bg-gray-100
      lg:w-[20vh] lg:h-[20vh] lg:text-[10vh] text-black" 
      onClick={() => handleClick()}>{value}</button>
  
  );
}

function Board()
{

  return (
    <> 
    <h1 className='text-center font-bold mt-10 mb-5 text-xl md:text-2xl lg:text-4xl'>TIC TAC TOE</h1>
      <h1 className='text-center font-bold mb-5 text-2xl md:text-4xl lg:text-6xl'>THE GAME</h1>
    <div className="flex flex-col items-center justify-center h-[60vh] ">
      
      <div className='m-auto lg:m-0 lg:'>
     <div className="flex-1 flex items-center justify-center">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div  className="flex-1 flex items-center justify-center ">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div  className="flflex-1 flex items-center justify-centerex ">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
    </div>
    
    </>
  );
}


export default function TicTac() {


  return (
    <>
    <Board />

    </>

    
  );
}
