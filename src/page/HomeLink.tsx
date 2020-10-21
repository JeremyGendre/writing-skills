import React from "react";
import {Link} from "react-router-dom";

type Props = {
    path: string,
    imgPath: string,
    text: string
};

export default function HomeLink(props: Props) {
    return (
        <Link to={ props.path } className="homepage-link transition duration-150 overflow-hidden relative flex border-4 border-white shadow-md hover:shadow-lg w-full bg-cover md:w-96 mx-auto my-4 bg-black text-white h-72">
            <img alt="homepage-link" className="absolute top-0 left-0 transition duration-300 w-full h-full" src={ props.imgPath }/>
            <div className='m-auto w-full h-full z-10 text-xl bg-black bg-opacity-50 flex'>
                <div className="m-auto">{ props.text }</div>
            </div>
        </Link>
    );
}