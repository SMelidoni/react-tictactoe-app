import { useRef, useEffect, useCallback } from 'react';

type Board = ('X' | 'O' | null)[];

function useGameResult(
  board: Board,
  onGameOver: (winner: 'X' | 'O' | 'draw') => void,
  handlePopup: (message: string | null) => void,
) {
  // Store the current game result as a ref to avoid unnecessary re-renders
  const gameResultRef = useRef<'X' | 'O' | 'draw' | null>(null);

  // Determine the winning line, if any, based on the current board state
  const winningLine = useCallback((board: Board) => {
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

    for (const line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], line };
      }
    }

    return null;
  }, []);

  // Check the board state for a winner or a draw and notify the parent component
  useEffect(() => {
    const result = winningLine(board);
    if (result) {
      const { winner } = result;
      if (winner !== null && gameResultRef.current !== winner) {
        gameResultRef.current = winner;
        onGameOver(winner);
        handlePopup(`${winner} wins!`);
      }
    } else if (!board.includes(null)) {
      if (gameResultRef.current !== 'draw') {
        gameResultRef.current = 'draw';
        onGameOver('draw');
        handlePopup("It's a draw!");
      }
    }
  }, [board, winningLine, onGameOver, handlePopup]);

  // Reset the game result and clear the popup message
  const resetGameResult = useCallback(() => {
    gameResultRef.current = null;
    handlePopup(null);
  }, [handlePopup]);

  return { winningLine, resetGameResult };
}

export default useGameResult;
