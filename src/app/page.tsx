import "./globals.css";
import { authConfig } from "./auth";
import { getServerSession } from "next-auth";
import LoginPage from "./loginpage/page";
import MainLayout from "./mainpage/layout";
import Mainstats from "./mainpage/page";

export default async function Home() {
  const session = await getServerSession(authConfig);
  return (
    <>
      {session ? (
        <MainLayout>
          <Mainstats />
        </MainLayout>
      ) : (
        <LoginPage />
      )}
    </>
  );
}