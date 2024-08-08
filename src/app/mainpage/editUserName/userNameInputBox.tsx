"use client";
import React from 'react';

// UsernameInputBox component
export default function UsernameInputBox({ platformName, username, setUsername }: { platformName: string; username: string; setUsername: React.Dispatch<React.SetStateAction<string>> }) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-4/5 mb-6 p-4 border border-gray-600 rounded-md bg-gray-700">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-100 w-full md:w-1/2 text-center mb-2 md:mb-0">
                {platformName}
            </h1>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                className="w-full md:w-1/2 text-base md:text-lg text-gray-800 text-center rounded-md py-2 px-4"
            />
        </div>
    );
}
