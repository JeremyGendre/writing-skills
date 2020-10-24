import React from "react";

export default function Loader() {
    return (
        <div className="fixed flex top-0 left-0 w-screen h-screen bg-black bg-opacity-25 z-50">
            <div className="loader m-auto w-20 h-20 animate-spin rounded-full border-6"/>
        </div>
    );
}