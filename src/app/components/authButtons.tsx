"use client";
import { signIn } from 'next-auth/react';




export function GoogleSignInBtn() {
  const handleClick = async () => {
    signIn("google");
  };
  return (
    <div className="h-[15%] w-full flex justify-center items-center">
      <button onClick={handleClick} className="login-option-btn w-[50%] h-[65%] border-solid border-[3px] border-[#fd5454] rounded-[10px] text-[1.5vw] text-[#CECECE]">
        Login with Google
      </button>
    </div>
  );
}

export function GithubSignInBtn() {
  const handleClick = async () => {
    signIn('github'); // Trigger GitHub OAuth login
  };
  return (
    <div className="h-[15%] w-full flex justify-center items-center">
      <button onClick={handleClick} className="login-option-btn w-[50%] h-[65%] border-solid border-[3px] border-[#fd5454] rounded-[10px] text-[1.5vw] text-[#CECECE]">
        Login with Github
      </button>
    </div>
  );
}

// export default function GoogleSignInBtn() {
//   const handleClick = () => {
//       signIn("google");
//   }
//   return(
//       <div className="h-[15%] w-full flex justify-center items-center">
//         <button className="login-option-btn w-[50%] h-[65%] border-solid border-[3px] border-[#fd5454] rounded-[10px] text-[1.5vw] text-[#CECECE]">
//           Login with Google
//         </button>
//       </div>
//   );
// }
