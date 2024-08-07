"use client";
import  UsernameInputBox from '@/app/mainpage/editUserName/userNameInputBox'; 
import { insertUserData } from '../dataHandling';
export default function userNameInput(){
    function handleClick(){
        
    }
    return (
        <body className="flex items-center justify-center h-[100%] w-[100%] bg-[#202020] ">
            <div className="flex flex-col items-center justify-center h-[90%] w-[80%] ">
                <div className="flex flex-row items-center justify-center h-[10%] w-[95%]">
                    <div className='flex items-center justify-center text-[5vw] w-[60%]'>Register Usernames</div>
                    <div className='flex items-center justify-center h-[100%] w-[40%]'><button className="flex items-center justify-center bg-[#5b5b5b] rounded-[15px] h-[100%] w-[80%] text-[2vw]"
                         onClick={handleClick}>
                        Update
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-[80%] w-[100%] rounded-[20px] bg-[#232323]">
                    <UsernameInputBox platform_name={"Leetcode"}></UsernameInputBox>
                    <UsernameInputBox platform_name={"Codeforces"}></UsernameInputBox>
                    <UsernameInputBox platform_name={"Codechef"}></UsernameInputBox>
                </div>  
            </div>
        </body>
        );
}