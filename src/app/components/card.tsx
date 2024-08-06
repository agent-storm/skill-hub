import Link from "next/link";
import './card.css';

interface Props {
    title: string;
    rating: number;
    url: string;
}

export default function Card({ title = "platform name", rating = 1000, url = "#" }: Props) {
    return (
        <Link href={url} >
            <div className="bg-[#5b5b5b] rounded-[45px] 
            p-4 w-96 h-80 flex flex-col items-center justify-center text-white
            hover:text-[#fd5454] hover:drop-shadow-[0_10px_10px_rgba(255,255,255,0.25)] transition ease-in-out duration-500">
                <p className="text-5xl font-semibold">{title}</p>
                <p className="text-5xl">{rating}</p>
            </div>
        </Link>
    );
}
