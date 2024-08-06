import Card from '@/app/components/card';
import Add from '@/app/components/add';
import { authConfig } from '../auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import "./mainpage.css";

export default async function Mainstats() {
    const session = await getServerSession(authConfig);
    if (!session) {
        redirect('/loginpage');
    }

    return (
        <main className="flex flex-col min-h-screen bg-[#232323] w-full p-4">
            <div className="flex flex-col md:flex-row justify-between mb-8">
                <div className='mb-4 md:mb-0 '>
                    <p className="text-white text-5xl m-5 p-5 hover:text-[#fd5454] transition ease-in-out duration-500 font-bold mb-2">{session?.user?.name ?? 'No name'}</p>
                    <Image
                        src={session?.user?.image ?? '/path/to/default-image.jpg'}
                        alt="user pic"
                        width={200}
                        height={100}
                        className="rounded-full m-5 "
                    />
                </div>
                <div className='text-white'>
                    <p className="text-3xl m-5 p-5 mb-2 hover:text-[#fd5454] transition ease-in-out duration-500">Email: {session?.user?.email ?? 'No Email'}</p>
                    <p className='text-3xl m-5 p-5 mb-2 hover:text-[#fd5454] transition ease-in-out duration-500'>GitHub: get data from db{ }</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                <Card title="CodeChef" rating={1000} url="/about" />
                <Card title="LeetCode" rating={2000} url="/about" />
                <Card title="Codeforces" rating={3000} url="/about" />
                <Card title="Among Us" rating={4000} url="/about" />
                <Add />
            </div>
        </main>
    );
}
