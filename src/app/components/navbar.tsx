import { IoLogOutOutline } from "react-icons/io5";
import { CgHomeAlt } from "react-icons/cg";
import { TiInfoLargeOutline } from "react-icons/ti";
import { MdDarkMode } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="drop-shadow-2xl fixed z-10 
                        right-[40%] bottom-5 
                        w-96 h-20 
                        flex flex-row content-center items-center justify-evenly
                        text-white bg-white dark:bg-gray-900 
                        shadow-lg rounded-3xl overflow-hidden">
            <SideBarIcon icon={<CgHomeAlt size="28" />} />
            <SideBarIcon icon={<IoLogOutOutline size="30" />} />
            <SideBarIcon icon={<IoMdSettings size="30" />} />
            <SideBarIcon icon={<MdDarkMode size="30" />} />
            <SideBarIcon icon={<TiInfoLargeOutline size="30" />} url="/about" />
        </div>
    )
}

interface SideBarIconProps {
    icon: React.ReactNode;
    url?: string;
}

const SideBarIcon: React.FC<SideBarIconProps> = ({ icon, url = "#" }) => (
    <div className="sidebar-icon group">
        <Link href={url}>
            {icon}
        </Link>
    </div >
);
