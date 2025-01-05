import React, { useState, useEffect, useCallback } from 'react';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [[5, 5]];
const INITIAL_FOOD = [10, 10];
const INITIAL_DIRECTION = [1, 0];
const SPEED = 150;

export default function SnakeGame() {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [food, setFood] = useState(INITIAL_FOOD);
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const generateFood = useCallback(() => {
        const newFood = [
            Math.floor(Math.random() * GRID_SIZE),
            Math.floor(Math.random() * GRID_SIZE)
        ];
        return newFood;
    }, []);

    const resetGame = () => {
        setSnake(INITIAL_SNAKE);
        setFood(INITIAL_FOOD);
        setDirection(INITIAL_DIRECTION);
        setGameOver(false);
        setScore(0);
        setIsPaused(false);
    };

    const handleKeyPress = useCallback((event) => {
        if (gameOver) {
            if (event.key === 'r' || event.key === 'R') {
                resetGame();
            }
            return;
        }

        if (event.key === 'p' || event.key === 'P') {
            setIsPaused(!isPaused);
            return;
        }

        const keyDirections = {
            ArrowUp: [0, -1],
            ArrowDown: [0, 1],
            ArrowLeft: [-1, 0],
            ArrowRight: [1, 0],
        };

        if (keyDirections[event.key]) {
            const [newX, newY] = keyDirections[event.key];
            const [currentX, currentY] = direction;
            
            // Prevent moving in opposite direction
            if (newX !== -currentX || newY !== -currentY) {
                setDirection([newX, newY]);
            }
        }
    }, [direction, gameOver, isPaused]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

    useEffect(() => {
        if (gameOver || isPaused) return;

        const moveSnake = () => {
            const newSnake = [...snake];
            const [headX, headY] = newSnake[newSnake.length - 1];
            const [dirX, dirY] = direction;
            const newHead = [
                (headX + dirX + GRID_SIZE) % GRID_SIZE,
                (headY + dirY + GRID_SIZE) % GRID_SIZE
            ];

            // Check collision with self
            if (snake.some(([x, y]) => x === newHead[0] && y === newHead[1])) {
                setGameOver(true);
                return;
            }

            newSnake.push(newHead);

            // Check if food is eaten
            if (newHead[0] === food[0] && newHead[1] === food[1]) {
                setScore(score + 1);
                setFood(generateFood());
            } else {
                newSnake.shift();
            }

            setSnake(newSnake);
        };

        const gameInterval = setInterval(moveSnake, SPEED);
        return () => clearInterval(gameInterval);
    }, [snake, direction, food, gameOver, isPaused, score, generateFood]);

    return (
        <div className="flex flex-col items-center justify-center h-full bg-gray-800 text-white p-4">
            <div className="mb-4 text-xl">Score: {score}</div>
            <div className="relative" style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}>
                <div className="absolute inset-0 border-2 border-gray-600">
                    {snake.map(([x, y], index) => (
                        <div
                            key={index}
                            className="absolute bg-green-500"
                            style={{
                                left: x * CELL_SIZE,
                                top: y * CELL_SIZE,
                                width: CELL_SIZE,
                                height: CELL_SIZE,
                            }}
                        />
                    ))}
                    <div
                        className="absolute bg-red-500"
                        style={{
                            left: food[0] * CELL_SIZE,
                            top: food[1] * CELL_SIZE,
                            width: CELL_SIZE,
                            height: CELL_SIZE,
                        }}
                    />
                </div>
            </div>
            {gameOver && (
                <div className="mt-4 text-center">
                    <div className="text-red-500 text-xl mb-2">Game Over!</div>
                    <div className="text-sm">Press 'R' to restart</div>
                </div>
            )}
            {!gameOver && (
                <div className="mt-4 text-sm text-gray-400">
                    Use arrow keys to move • Press 'P' to pause
                </div>
            )}
        </div>
    );
}

export const displaySnake = () => {
    return <SnakeGame />;
} 