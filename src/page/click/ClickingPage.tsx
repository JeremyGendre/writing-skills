import React, { useState } from "react";
import {useInterval} from "../../helpers";
import useTimeout from "../../helpers/useTimeout";

type SelectOptionType = {
    value: number,
    text: string
};

const selectOptions: Array<SelectOptionType> = [
    { value: 10000, text: '10 seconds' },
    { value: 20000, text: '20 seconds' },
    { value: 30000, text: '30 seconds' },
];

export default function ClickingPage() {

    const [time, setTime] = useState<number | null>(null);
    const [max, setMax] = useState(10000);
    const [counter, setCounter] = useState(0);

    useTimeout(() => {
        console.log('ended');
        setTime(null);
        setCounter(0);
    }, time);

    const handleClick = () => {
        if(!time){
            setTime(max);
        }else{
            setCounter((prevState) => prevState + 1);
        }
    };

    return (
        <div className="container mx-auto">
            <button onClick={ handleClick }>Click me !</button>
            <div>{ counter }</div>

            <select onChange={(e) => setMax( parseInt(e.currentTarget.value) )}>
                { selectOptions.map( selectOption => {
                    return <option key={ selectOption.value } value={ selectOption.value } >{ selectOption.text }</option>
                }) }
            </select>
        </div>
    );
}