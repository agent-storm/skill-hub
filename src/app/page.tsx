import Link from "next/link";
import "./globals.css";


export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-[#161616]">  
      <div className="h-full w-full flex flex-row items-center justify-center">
        <div className="h-full w-1/2 flex flex-col items-center justify-start pt-[20vh]">
          <div className="flex justify-start h-[30vh] w-11/12 text-white text-[12vw] ">
            <h1 className="font-nullfont  flex items-start justify-center pl-[2vw] tracking-[1vw]">SK<span className="text-[#fd5454]">I</span>LL</h1>
          </div>
          <div className="flex justify-end h-[30vh] w-11/12  text-white text-[12vw]">
            <h1 className="font-nullfont flex items-end justify-center pr-[1vw] tracking-[1vw]"><span className="text-[#fd5454]">H</span>UB</h1>
          </div>
          <div className="flex items-start justify-start w-11/12 text-white">
            <pre className="text-[2.5vw] pl-[4vw]">
              The one stop to <br/> know it all.
            </pre>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col items-center justify-center">
          {/* <div className="bg-[url('./assets/login-bg.png')] rounded-[2vw] aspect-square object-cover"> </div> */}
          {/* TODO: get square image, then make it round, tilt it using "rotate-45" class */}
          {/* <img src="https://imgur.com/a/HfnEurh"></img> */}
          <div className="text-cyan-200">
            <Link href='/mainpage'>
              <p>mainpage </p>
            </Link>
          </div>
          <div className="text-cyan-200">
            <Link href='/about'>
              <p>about page</p>
            </Link>
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
