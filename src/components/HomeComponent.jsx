import React, { useState } from 'react';

const HomeComponent = () => {

    const GRID_SIZE = 20;
    const CELL_SIZE = 20;
    const INITIAL_SNAKE = [
        {
            x : 10,
            y : 10
        }
    ];
    const INITIAL_FOOD = [
        {
            x : 15,
            y : 15
        }
    ];
    const INITIAL_DIRECTION = 'RIGHT';
    const [ snake, setSnake] = useState(INITIAL_SNAKE);
    const [ food, setFood] = useState(INITIAL_FOOD);
    const [ direction, setDirection] = useState(INITIAL_DIRECTION);
    const [ score, setScore] = useState(0);
    const [ gameOver, setGameOver] = useState(false);

    const generateFood = ()=>{
        const newFood = {
            x : Math.floor(Math.random() * GRID_SIZE),
            y : Math.floor(Math.random() * GRID_SIZE),
        }
        return snake.some((item) => item.x === newFood.x && item.y === newFood.y)
    }
























    return (
        <>
            <div className="game-container">
                <div className="score">Score: 5</div>
                <div className="game-board"></div>
                <div className="game-over">
                    <h2 className='font-bold text-3xl capitalize'>Game Over</h2>
                    <p>Your Score: 5</p>
                    <button className='restart-button'>Restart</button>
                </div>
            </div>
        </>
    );
};

export default HomeComponent;