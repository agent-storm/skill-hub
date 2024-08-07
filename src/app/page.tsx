// src/page.tsx

import "./globals.css";
import 'monaco-editor/min/vs/editor/editor.main.css';
import { authConfig } from "./auth";
import { getServerSession } from "next-auth";
import LoginPage from "./loginpage/page";
import MainLayout from "./mainpage/layout";
import Mainstats from "./mainpage/page";
import Link from 'next/link';

export default async function Home() {
  const session = await getServerSession(authConfig);
  return (
    <>
      {session ? (
        <MainLayout>
          <Mainstats />
          <Link href="myResume">
            Edit My Resume
          </Link>
        </MainLayout>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
