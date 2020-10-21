import React from "react";

type Props = {
    code: number,
    text: string
};

export default function Error(props: Props) {
    return (
        <div className='flex flex-col m-auto'>
            <div className='text-5xl text-center'>{ props.code }</div>
            <div className='text-xl text-center'>{ props.text }</div>
        </div>
    );
}