
import "./globals.css";
import {GoogleSignInBtn, GithubSignInBtn} from "./components/authButtons";


export default async function Home() {

  return (
    <main className="main-bg h-screen w-screen flex items-center justify-center bg-[#161616] overflow-hidden">  
      <div className="h-full w-full flex flex-row items-center justify-center">
        <div className="h-full w-1/2 flex flex-col items-center justify-center ">
          <div className="flex justify-start w-full text-[#CECECE] text-[12vw] ">
            <h1 className="font-nullfont  flex items-start justify-center h-auto w-auto pl-[2vw] tracking-[1vw] leading-none">
              <span className="hover-effect">S</span>
              <span className="hover-effect">K</span>
              <span className="text-[#fd5454]">I</span>
              <span className="hover-effect">L</span>
              <span className="hover-effect">L</span>
              </h1>
          </div>
          <div className="flex justify-end  w-full  text-[#CECECE] text-[12vw]">
            <h1 className="font-nullfont flex items-end justify-center h-auto w-auto pr-[0.25vw] tracking-[1vw] leading-none">
              <span className="text-[#fd5454]">H</span>
              <span className="hover-effect">U</span>
              <span className="hover-effect">B</span>
              </h1>
          </div>
          <div className="flex items-start justify-start w-11/12 text-[#CECECE]">
            <pre className="text-[2.5vw] pl-[4vw]">
            <span className="hover-effect">The</span> <span className="hover-effect-underline">one</span> <span className="hover-effect">stop</span> <span className="hover-effect">to</span> <br/> <span className="hover-effect">know</span> <span className="hover-effect">it</span> <span className="hover-effect">all.</span>
            </pre>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col items-center justify-center">
          <div className="h-full w-full flex  justify-center items-center relative">
            <svg
              className=" rotate-45 h-[55vh] w-[55vw] absolute z-[0]"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect className="login-bg-shape"
                x="0"
                y="0"
                width="100"
                height="100"
                rx="5"
                ry="5"
                fill="#1E1E1ECC"
              />
            </svg>
              <div className="h-3/4 w-full z-[1] pt-[2vh]">
                <div className="w-full flex justify-center items-center"><h1 className="text-[7vw] text-[#CECECE]">Lo<span className="text-[#fd5454]">g</span>in</h1></div>
                
                  <GoogleSignInBtn />
                  <GithubSignInBtn />
                {/* <div className="h-[15%] w-full flex justify-center items-center"><button className="login-option-btn w-[50%] h-[65%] border-solid border-[3px] border-[#fd5454] rounded-[10px] text-[1.5vw] text-[#CECECE]">Login with LinkedIn</button></div> */}
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}







// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center">
//       <div>
//         <p>
//           THIS IS THE LOGIN PAGE
//         </p>
//       </div>
//       <div>
//         <Link href='/mainpage'>
//           <p>mainpage</p>
//         </Link>
//       </div>
//       <div>
//         <Link href='/about'>
//           <p>about page</p>
//         </Link>
//       </div>
//     </main>
//   );
// }
