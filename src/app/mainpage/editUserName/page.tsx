/* 
    TODO:
        1.Add a button beside update button called "get current usernames" that will display the current usernames of the logged in user.
        2.Show a notification popup at the bottom left to tell user that update is done.
        3.If user already exists, only update the chnages.
        4.IF all fields are null, popup a warning.

*/

"use client";


import React, { useState } from 'react';
import UsernameInputBox from './userNameInputBox';
import { insertUsernameData } from '../dataHandling';
import PopupNotification from '@/app/components/popupNotification/popupNotification';
import './editUserName.css';    
import { supabase } from '@/app/utils/supabase/server';

export default function UserNameInput() {
    // State variables for each platform's username
    const [leetcodeUsername, setLeetcodeUsername] = useState('');
    const [codeforcesUsername, setCodeforcesUsername] = useState('');
    const [codechefUsername, setCodechefUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPopup, setshowPopup] = useState(false);

    async function handleClick() {
        // Access the values of the input fields
        console.log('Leetcode Username:', leetcodeUsername);
        console.log('Codeforces Username:', codeforcesUsername);
        console.log('Codechef Username:', codechefUsername);
        
        const userNamesJSON:Record<string,string> = {"leetcode":leetcodeUsername,"codeforces": codeforcesUsername,"codechef": codechefUsername }
        // Call the function to handle data insertion
        setLoading(true)
        try {
            await insertUsernameData(userNamesJSON);//Takes a JSON as input.
        } catch(error){
            alert(error);
            console.log(error);
        } finally {
            setLoading(false);
            setshowPopup(true);
        }
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen px-4'>
            <div className="flex flex-col items-center justify-center max-w-screen-md w-full">
                <div className="flex flex-col md:flex-row items-center justify-between w-full mb-6">
                    <div className='flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 w-full md:w-3/5 mb-4 md:mb-0'>
                        Register Usernames
                    </div>
                    <button 
                        className="flex items-center justify-center bg-gray-600 rounded-md py-2 px-4 text-white text-base md:text-lg w-[50%]"
                        onClick={handleClick}
                    >
                        {loading ? 'Updating...' : 'Update'}
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center w-full bg-gray-800 rounded-lg py-6">
                    <UsernameInputBox 
                        platformName="Leetcode" 
                        username={leetcodeUsername} 
                        setUsername={setLeetcodeUsername}
                    />
                    <UsernameInputBox 
                        platformName="Codeforces" 
                        username={codeforcesUsername} 
                        setUsername={setCodeforcesUsername}
                    />
                    <UsernameInputBox 
                        platformName="Codechef" 
                        username={codechefUsername} 
                        setUsername={setCodechefUsername}
                    />
                </div>  
            </div>
            {showPopup && (<PopupNotification
                            message="Usernames Updated successfully."
                            onClose={()=>setshowPopup(false)}
                        />)}
        </div>
        
    );
}
