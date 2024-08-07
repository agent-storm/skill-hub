import { IoLogOutOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { TiInfoLargeOutline } from "react-icons/ti";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="drop-shadow-2xl fixed z-10 
                        inset-x-0 bottom-5 
                        max-w-md mx-auto
                        w-11/12 h-20 
                        flex flex-row items-center justify-evenly
                        text-white bg-[#2b2a2a]
                        shadow-lg rounded-3xl overflow-hidden">
            <SideBarIcon icon={<IoLogOutOutline size="28" />} url="/api/auth/signout?callbackUrl=/" />
            <SideBarIcon icon={<FaRegEdit size="25" />} url="/mainpage/editUserName" />
            <SideBarIcon icon={<TiInfoLargeOutline size="30" />} url="/about" />
        </div>
    )
}

interface SideBarIconProps {
    icon: React.ReactNode;
    url?: string;
}

function SideBarIcon({ icon, url = "#" }: SideBarIconProps) {
    return (
        <div className="sidebar-icon group">
            <Link href={url}>
                {icon}
            </Link>
        </div>
    );
}
