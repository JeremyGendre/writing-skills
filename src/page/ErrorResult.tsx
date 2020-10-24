import React, { useState } from "react";
import {WordError} from "./WritingPage";

type Props = {
    errors: Array<WordError>
};

export default function ErrorResult(props: Props) {
    const [seeErrors, setSeeErrors] = useState(false);

    return (
        <div className="mx-auto flex flex-col my-2">
            <div className="flex">
                <div className="mr-2 font-bold">{props.errors.length} erreurs</div>
                <div onClick={() => setSeeErrors(prevState => !prevState)} className="text-blue-600 cursor-pointer hover:text-blue-800">
                    { seeErrors ? 'Cacher' : 'Voir' } mes erreurs
                </div>
            </div>
            { seeErrors ? (
                <table className="text-center border-1 border-gray-400 my-4">
                    <tbody>
                    { props.errors.map((error, index) => {
                        return (
                            <tr key={index} className="border-b-1 border-gray-400 px-4 py-2 hover:bg-white transition duration-150">
                                <td className="text-green-600 py-2 px-2">{error.word}</td>
                                <td className="text-red-600 py-2 px-2">{error.answer}</td>
                            </tr>
                        );
                    }) }
                    </tbody>
                </table>
            ): '' }
        </div>
    );
}