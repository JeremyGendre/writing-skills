import React, {useEffect, useState} from "react";
import {useInterval} from "../../helpers";

type SelectOptionType = {
    value: number,
    text: string
};

const selectOptions: Array<SelectOptionType> = [
    { value: 10, text: '10 seconds' },
    { value: 20, text: '20 seconds' },
    { value: 30, text: '30 seconds' },
];

enum GAME_STATE {
    INITIAL,
    PROGRESSING,
    ENDED
}

const initialState = {
    time: null,
    currentTimer: 10,
    max: 10,
    counter: 0,
    gameState: GAME_STATE.INITIAL,
};

export default function ClickingPage() {

    const [time, setTime] = useState<number | null>(initialState.time);
    const [currentTimer, setCurrentTimer] = useState(initialState.currentTimer);
    const [max, setMax] = useState(initialState.max);
    const [counter, setCounter] = useState(initialState.counter);
    const [gameState, setGameState] = useState(initialState.gameState);

    useInterval(() => {
        if(currentTimer <= 1){
            end();
        }
        setCurrentTimer(prevState => prevState - 1);
    }, time);

    const start = () => {
        setTime(1000);
        setGameState(GAME_STATE.PROGRESSING);
    };

    const end = () => {
        setTime(null);
        setGameState(GAME_STATE.ENDED);
    };

    const reset = () => {
        setTime(initialState.time);
        setGameState(initialState.gameState);
        setCurrentTimer(max);
        setCounter(initialState.counter);
    };

    const handleClick = () => {
        if(!time){
            start();
        }else{
            setCounter((prevState) => prevState + 1);
        }
    };

    useEffect(() => {
        setCurrentTimer(max);
    }, [max]);

    return (
        <div className="container mx-auto flex flex-col mt-8">
            <button className="w-full h-64 bg-gray-400 shadow-md text-gray-800 transform transition duration-150 hover:border-gray-100 border-2 focus:outline-none active:scale-99" disabled={ gameState === GAME_STATE.ENDED } onClick={ handleClick }>
                Click me !
                <div>{ counter }</div>
            </button>
            <div className="flex flex-col mx-auto mt-4">
                { time !== null ? (
                    <>
                        {currentTimer}
                    </>
                ) : (
                    <select className="p-2" value={ max } onChange={(e) => setMax( parseInt(e.currentTarget.value) )}>
                        { selectOptions.map( selectOption => {
                            return <option key={ selectOption.value } value={ selectOption.value } >{ selectOption.text }</option>
                        }) }
                    </select>
                ) }
            </div>

            { gameState === GAME_STATE.ENDED ? (
                <div className="flex flex-col mx-auto">
                    <div className="mx-auto my-2 mt-4 border-l-2 border-r-2 border-gray-600 px-4">Score : { counter/max }cps (clics per second)</div>
                    <button className="mx-auto my-2 select-none px-6 py-2 bg-gray-800 hover:bg-gray-100 hover:text-gray-800 text-white transition duration-150 border border hover:border-gray-800 rounded" onClick={reset}>Reset</button>
                </div>
            ) : ''}
        </div>
    );
}