
import Card from "@/app/components/card";
import Add from "@/app/components/add";

import { authConfig } from "../auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Link from "next/link"

export default async function Mainstats() {
    const session = await getServerSession(authConfig);
    if (!session) {
        redirect("/loginpage");
    }
    return (
        <main className="flex flex-col h-screen dark:bg-gray-400">
            <div className="flex flex-row justify-between h-1/4">
                <p >intro</p>
                <p >link</p>
                <Link href="/api/auth/signout?callbackUrl=/">
                    Logout
                </Link>
            </div>
            <div className="grid grid-cols-3
                            h-[62%] border border-solid border-black
                            place-self-center	
                            m-2 gap-24
                            ">
                <Card title="codechef" rating={1000} url="/about" />
                <Card title="leetcode" rating={2000} url="/about" />
                <Card title="codeforces" rating={3000} url="/about" />
                <Card title="amongus" rating={4000} url="/about" />
                <Add />
            </div>
        </main>
    )
}