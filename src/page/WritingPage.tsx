import React from "react";
import {getRandomWords} from "../helpers/wordHelper";


export default function WritingPage() {

    const values = getRandomWords(50);
    console.log(values);

    return (
        <div className="container mx-auto">
            <p>{  }</p>
        </div>
    );
}