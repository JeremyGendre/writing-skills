import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {getRandomWords} from "../helpers/wordHelper";
import {GAME_STATE} from "./HomePage";
import ErrorResult from "./ErrorResult";
import {useInterval} from "../helpers";

export type WordError = {
    word: string,
    answer: string
};

type InitialState = {
    time: number | null,
    currentIndex: number,
    currentTimer: number,
    goodAnswers: number,
    errors: Array<WordError>,
    values: Array<string>,
    gameState: number,
    currentInput: string
};

const initialState: InitialState = {
    time : null,
    currentIndex : 0,
    currentTimer : 60,
    goodAnswers : 0,
    errors : [],
    values : [],
    gameState : GAME_STATE.INITIAL,
    currentInput: ''
};

export default function WritingPage() {
    const [time, setTime] = useState(initialState.time);
    const [currentIndex, setCurrentIndex] = useState(initialState.currentIndex);
    const [currentTimer, setCurrentTimer] = useState(initialState.currentTimer);
    const [goodAnswers, setGoodAnswers] = useState(initialState.goodAnswers);
    const [values, setValues] = useState(initialState.values);
    const [errors, setErrors] = useState(initialState.errors);
    const [gameState, setGameState] = useState(initialState.gameState);
    const [currentInput, setCurrentInput] = useState(initialState.currentInput);

    const fetchValues = () => {
        setValues(getRandomWords(200));
    };

    useInterval(() => {
        if(currentTimer <= 1){
            end();
        }
        setCurrentTimer(prevState => prevState - 1);
    }, time);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        handleSubmitValue();
    };

    const handleSubmitValue = () => {
        if(currentInput === values[currentIndex]){
            setGoodAnswers(prevState => prevState + 1);
        } else {
            setErrors(prevState => [...prevState, {word: values[currentIndex], answer: currentInput}]);
        }
        setCurrentInput(initialState.currentInput);
        setCurrentIndex(prevState => prevState + 1);
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!time){
            start();
        }
        // @ts-ignore
        const nativeEventData = e.nativeEvent.data;

        if(nativeEventData === ' ' && currentInput !== ''){
            handleSubmitValue();
        }else{
            const value = e.currentTarget.value;
            setCurrentInput(prevState => (value !== ' ') ? value : prevState);
        }
    };

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
        setCurrentIndex(initialState.currentIndex);
        setCurrentTimer(initialState.currentTimer);
        setGoodAnswers(initialState.goodAnswers);
        fetchValues();
        setErrors(initialState.errors);
        setGameState(initialState.gameState);
        setCurrentInput(initialState.currentInput);
    };

    useEffect(() => {
        fetchValues();
    },[]);

    return (
        <div className="container mx-auto">
            <div className="mt-64 flex justify-center items-center">
                <div className="text-5xl mx-4 border-b-1 border-gray-600">{ values[currentIndex] }</div>
                <div className="text-3xl mx-4 opacity-75">{ values[currentIndex + 1] ? values[currentIndex + 1] : '' }</div>
                <div className="text-2xl mx-4 opacity-50">{ values[currentIndex + 2] ? values[currentIndex + 2] : '' }</div>
            </div>
            <form onSubmit={handleSubmit} className="flex mt-8">
                <input disabled={gameState === GAME_STATE.ENDED} value={currentInput} required onChange={handleOnChange} type="text" className="mx-auto focus:outline-none border border-gray-400 focus:border-blue-400 px-4 py-2 rounded" placeholder="Ecrivez..."/>
            </form>
            { time ? (
                <div className="flex mt-4">
                    <div className="mx-auto text-2xl">
                        {currentTimer}
                    </div>
                </div>
            ) : '' }

            { gameState === GAME_STATE.ENDED ? (
                <div className="flex flex-col mx-auto">
                    <div className="mx-auto my-2 mt-4 border-l-2 border-r-2 border-gray-600 px-4">Score : <strong className="font-bold">{ goodAnswers } WPM</strong> (words per minute)</div>
                    <button className="mx-auto my-2 mt-4 select-none px-6 py-2 bg-gray-800 hover:bg-gray-100 focus:outline-none hover:text-gray-800 text-white transition duration-150 border border hover:border-gray-800 rounded transform active:scale-95" onClick={reset}>Reset</button>
                    { errors.length > 0 ? (
                        <ErrorResult errors={errors}/>
                    ) : ''}
                </div>
            ) : ''}
        </div>
    );
}