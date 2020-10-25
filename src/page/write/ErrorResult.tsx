import React from "react";
import {WordError} from "./WritingPage";

type Props = {
    errors: Array<WordError>
};

export default function ErrorResult(props: Props) {
    return (
        <div className="mx-auto flex flex-col my-auto ml-4 pl-4 border-l-1 border-gray-600">
            <div className="flex justify-center">
                <div className="mr-2 font-bold text-center">
                    { props.errors.length <= 0 ? (
                        'Aucune erreur'
                    ) : (
                        <>
                            {props.errors.length} erreur(s)
                        </>
                    )}
                </div>
            </div>
            { props.errors.length > 0 ? (
                <div className="max-h-46 pr-2 overflow-y-scroll">
                    <table className="text-center border-1 border-gray-400 my-4 w-full">
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
                </div>
            ) : '' }

        </div>
    );
}