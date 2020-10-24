import React, { useState } from "react";
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
    currentTimer: 0,
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
        if(currentTimer >= max - 1){
            end();
        }
        setCurrentTimer(prevState => prevState + 1);
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
        setCurrentTimer(initialState.currentTimer);
        setCounter(initialState.counter);
    };

    const handleClick = () => {
        if(!time){
            start();
        }else{
            setCounter((prevState) => prevState + 1);
        }
    };

    return (
        <div className="container mx-auto">
            <button disabled={ gameState === GAME_STATE.ENDED } onClick={ handleClick }>Click me !</button>
            <div>{ counter }</div>

            { time !== null ? (
                <>
                    {currentTimer}
                </>
            ) : (
                <select value={ max } onChange={(e) => setMax( parseInt(e.currentTarget.value) )}>
                    { selectOptions.map( selectOption => {
                        return <option key={ selectOption.value } value={ selectOption.value } >{ selectOption.text }</option>
                    }) }
                </select>
            ) }

            { gameState === GAME_STATE.ENDED ? (
                <button onClick={reset}>Reset</button>
            ) : ''}
        </div>
    );
}