import React from "react";
import HomeLink from "./HomeLink";

export enum GAME_STATE {
    INITIAL,
    PROGRESSING,
    ENDED
}

export default function HomePage() {
    return (
        <div className='flex flex-col md:flex-row justify-around my-auto w-full p-0 lg:p-20'>
            <HomeLink path='/write' imgPath='/images/keyboard.jpg' text='Clavier'/>
            <HomeLink path='/click' imgPath='/images/mouse.jpg' text='Souris'/>
        </div>
    );
}