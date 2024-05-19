'use client'
import './navbar.css';
import { faCloudSun, faHouseChimney, faMagnifyingGlass, faPlaneDeparture, faStar, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()

    return (
        <div className="px-[10px]">
            <div>
                <div className="relative rounded-md shadow-sm">
                    <input type="text" name="price" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none text-black dark:text-white " placeholder="Search" />
                    <div className="absolute inset-y-0 right-2 flex items-center">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-around">
                <Link className={`link w-full mt-2 ${pathname === '/Dashboard/Day' ? 'link-active dark:link-dark-active' : ''}`} href="/Dashboard/Day" >
                    <div className="px-4 py-1">
                        <FontAwesomeIcon icon={faCloudSun} className=" text-blue-400" /> <span className="text-[12px] ml-1">My Day</span>
                    </div>
                </Link>
                <Link className={`link w-full mt-2 ${pathname === '/Dashboard/Important' ? 'link-active dark:link-dark-active' : ''}`} href="/Dashboard/Important">
                    <div className="px-4 py-1">
                        <FontAwesomeIcon icon={faStar} className="text-pink-400" /> <span className="text-[12px] ml-1">Important</span>
                    </div>
                </Link>
                <Link className={`link w-full mt-2 ${pathname === '/Dashboard/Planned' ? 'link-active dark:link-dark-active' : ''}`} href="/Dashboard/Planned">
                    <div className="px-4 py-1">
                        <FontAwesomeIcon icon={faPlaneDeparture} className="text-green-400" /> <span className="text-[12px] ml-1">Planned</span>
                    </div>
                </Link>
                <Link className={`link w-full mt-2 ${pathname === '/Dashboard/AssignedToMe' ? 'link-active dark:link-dark-active' : ''}`} href="/Dashboard/AssignedToMe">
                    <div className="px-4 py-1">
                        <FontAwesomeIcon icon={faUserTag} className="text-yellow-400" /> <span className="text-[12px] ml-1">Assigned to me</span>
                    </div>
                </Link>
                <Link className={`link w-full mt-2 ${pathname === '/Dashboard/Tasks' ? 'link-active dark:link-dark-active' : ''}`} href="/Dashboard/Tasks">
                    <div className="px-4 py-1">
                        <FontAwesomeIcon icon={faHouseChimney} className=" text-blue-100" /> <span className="text-[12px] ml-1">Tasks</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}