import './tic-tac-toe.styles.scss';

import React, { useCallback, useEffect, useState } from 'react';

type Board = ('X' | 'O' | null)[];

type TicTacToeProps = {
  onGameOver: (winner: 'X' | 'O' | 'draw') => void;
  isXNext: boolean;
  setIsXNext: (isXNext: boolean) => void;
  handlePopup: (message: string | null) => void;
};

// TicTacToe component is responsible for rendering the tic-tac-toe grid and handling game logic
const TicTacToe: React.FC<TicTacToeProps> = ({
  onGameOver,
  isXNext,
  setIsXNext,
  handlePopup,
}) => {
  // State to store the current state of the game board
  const [board, setBoard] = useState<Board>(Array(9).fill(null));

  // Function to check if there's a winning line on the board
  const winningLine = useCallback((board: Board) => {
    // An array of possible winning line combinations.
    // Each sub-array contains three indices that form a winning line on the board.
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      // Destructure the three indices that form a winning line from the current `line` sub-array.
      const [a, b, c] = line;

      // Check if there's a winning line:
      // - `board[a]` checks if the cell at index `a` has been marked (is not null).
      // - `board[a] === board[b] && board[a] === board[c]` checks if the cells at indices `a`, `b`, and `c` have the same mark (either 'X' or 'O').
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // A winning line is found; return an object containing the winner and the winning line.
        return { winner: board[a], line };
      }
    }
    return null;
  }, []);

  // Function to handle clicks on the tic-tac-toe grid
  const handleClick = (index: number): void => {
    if (board[index] || winningLine(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  // Function to reset the game board
  const resetBoard = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to render a single cell of the tic-tac-toe grid
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

  const gameOver = useCallback(() => {
    return winningLine(board) || !board.includes(null);
  }, [board, winningLine]);

  // Checks if the game is over, and if so, resets the board after a 2s delay.
  useEffect(() => {
    if (gameOver()) {
      const timeoutId = setTimeout(resetBoard, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [gameOver, resetBoard]);

  //Handles displaying the game result and calling the `onGameOver` callback.
  useEffect(() => {
    const result = winningLine(board);
    if (result) {
      const { winner } = result;
      if (winner !== null) {
        onGameOver(winner);
        handlePopup(`${winner} WINS`);
      }
    } else if (board.filter((cell) => cell !== null).length === 9) {
      onGameOver('draw');
      handlePopup('Draw');
    }
  }, [board, onGameOver, handlePopup, winningLine]);

  return (
    <div className='tic-tac-toe-grid'>
      {board.map((cell, index) => renderCell(cell, index))}
    </div>
  );
};

export default TicTacToe;
