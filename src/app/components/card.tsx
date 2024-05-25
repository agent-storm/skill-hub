import Link from "next/link";

interface Props {
    title: string;
    rating: number;
    url: string;
}

const Card:React.FC<Props>=({title="platform name",rating=1000,url="#"}) =>(
        <Link href={url} >
            <div className="cards p-card">
                <p>{title}</p>
                <p>{rating}</p>
            </div>
        </Link>
);

export default Card;