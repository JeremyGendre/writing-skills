import React from "react";
import ErrorResult from "./ErrorResult";
import {WordError} from "./WritingPage";

type Props = {
    errors : Array<WordError>,
    goodAnswers: number
};

export default function Result(props: Props){
    const total = props.goodAnswers + props.errors.length;
    const precision = props.goodAnswers / (total === 0 ? 1 : total) * 100;

    return (
        <div className="flex mx-auto mt-4 px-6 py-4 bg-gray-100">
            <div className="mx-auto my-auto">
                <div>Score : <strong className="font-bold">{ props.goodAnswers } WPM</strong> (words per minute)</div>
                <div>Précision : { precision.toFixed(2) } %</div>
            </div>
            <ErrorResult errors={props.errors}/>
        </div>
    );
}