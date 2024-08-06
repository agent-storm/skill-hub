import { IoMdAdd } from "react-icons/io";

export default function Add() {
    return (
        <div className="bg-[#5b5b5b] rounded-[45px]
                        p-4 w-96 h-80 flex items-center justify-center
                        text-white hover:text-[#fd5454] hover:drop-shadow-[0_10px_10px_rgba(255,255,255,0.25)] transition ease-in-out duration-500">
            <IoMdAdd size="50" />
        </div>
    );
}
