import React, {ReactNode} from 'react';
import {Link, useRouteMatch} from "react-router-dom";

type Props = {
    path: string,
    text: string,
    icon?: ReactNode
};

type Matcher = {
    isExact: boolean
}

const checkExactPath = (matcher: Matcher | null) => {
    return matcher !== null && matcher.isExact;
};

export default function HeaderLink(props: Props) {
    const match = useRouteMatch(props.path);
    return (
        <Link to={ props.path } className={(checkExactPath(match) ? 'border-white' : 'border-transparent') + " flex border-b-2 transition duration-150 px-8 py-4 hover:bg-white hover:text-black"}>
            { props.icon ? (
                <div className="my-auto mr-2">
                    { props.icon }
                </div>
            ) : '' }
            <div className="my-auto">
                { props.text }
            </div>
        </Link>
    );
}