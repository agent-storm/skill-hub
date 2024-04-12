import Card from "@/app/components/card";
import Add from "@/app/components/add";

export default function mainstats() {
    return (
        <main className="flex flex-col h-screen dark:bg-gray-400">
            <div className="flex flex-row justify-between h-1/4">
                <p >intro</p>
                <p >link</p>
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