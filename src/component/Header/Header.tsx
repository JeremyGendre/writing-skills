import React from "react";
import { CgMouse, RiKeyboardBoxLine } from 'react-icons/all';
import HeaderLink from "./HeaderLink";

export default function Header() {
    return (
        <div className="sticky top-0 flex bg-gray-600 shadow-md text-white justify-center">
            <HeaderLink path='/' text='Home'/>
            <HeaderLink path='/write' text='Clavier' icon={<RiKeyboardBoxLine/>}/>
            <HeaderLink path='/click' text='Souris' icon={<CgMouse/>}/>
        </div>
    );
}