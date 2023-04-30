import './tic-tac-toe.styles.scss';

import React, { useCallback, useEffect, useState } from 'react';

import useGameResult from '../../hooks/use-game-result';

type Board = ('X' | 'O' | null)[];

type TicTacToeProps = {
  onGameOver: (winner: 'X' | 'O' | 'draw') => void;
  isXNext: boolean;
  setIsXNext: (isXNext: boolean) => void;
  handlePopup: (message: string | null) => void;
};

const TicTacToe: React.FC<TicTacToeProps> = ({
  onGameOver,
  isXNext,
  setIsXNext,
  handlePopup,
}) => {
  // Initialize the game board state
  const [board, setBoard] = useState<Board>(Array(9).fill(null));

  // Use a custom hook to determine the game result
  const { winningLine, resetGameResult } = useGameResult(
    board,
    onGameOver,
    handlePopup,
  );

  // Handle clicks on the board cells
  const handleClick = useCallback(
    (index: number) => {
      // If cell is not empty or game is already over, do nothing
      if (board[index] !== null || winningLine(board) !== null) {
        return;
      }

      // Create a new board with the clicked cell updated
      const newBoard = [...board];
      newBoard[index] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setIsXNext(!isXNext);
    },
    [board, isXNext, winningLine, setIsXNext],
  );

  // Reset the board state
  const resetBoard = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    resetGameResult();
  }, [setIsXNext, resetGameResult]);

  // Render each cell of the board
  const renderCell = (
    value: 'X' | 'O' | null,
    index: number,
  ): React.ReactNode => {
    const winLine = winningLine(board)?.line || [];
    const winningCell = winLine.includes(index);

    return (
      <button
        key={index}
        className={`tic-tac-toe-cell ${winningCell ? 'winning-line' : ''} ${
          value?.toLowerCase() || ''
        }`}
        onClick={() => handleClick(index)}
      >
        {value}
      </button>
    );
  };

  // Check if the game is over and reset the board after 2 seconds
  useEffect(() => {
    const isGameOver = winningLine(board) || !board.includes(null);

    if (isGameOver) {
      const timeoutId = setTimeout(resetBoard, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [board, resetBoard, winningLine]);

  // Render the game board
  return (
    <div className='tic-tac-toe-grid'>
      {board.map((cell, index) => renderCell(cell, index))}
    </div>
  );
};

export default TicTacToe;
