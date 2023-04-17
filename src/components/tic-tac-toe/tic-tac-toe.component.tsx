import './tic-tac-toe.styles.scss';

import React, { useEffect, useState } from 'react';

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
  const [board, setBoard] = useState<Board>(Array(9).fill(null));

  const winningLine = (board: Board) => {
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
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], line };
      }
    }
    return null;
  };

  const handleClick = (index: number): void => {
    if (board[index] || winningLine(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderCell = (
    value: 'X' | 'O' | null,
    index: number
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

  const gameOver = () => {
    return winningLine(board) || !board.includes(null);
  };

  if (gameOver()) {
    setTimeout(resetBoard, 2000);
  }

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
  }, [board, onGameOver, handlePopup]);

  return (
    <div className='tic-tac-toe-grid'>
      {board.map((cell, index) => renderCell(cell, index))}
    </div>
  );
};

export default TicTacToe;
