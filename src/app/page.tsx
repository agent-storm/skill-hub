
import "./globals.css";


import { authConfig } from "./auth";
import { getServerSession } from "next-auth";
import LoginPage from "./loginpage/page";
import Mainstats from "./mainpage/page";

export default async function Home() {
  const session = await getServerSession(authConfig);
  if(session){

  }
  return (
    <>
      {
        session ?(<Mainstats/>) :  (<LoginPage/>) 
      }
    </>
  );
}
