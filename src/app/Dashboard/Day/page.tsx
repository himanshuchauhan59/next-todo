'use client'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuButton, Transition, MenuItems, MenuItem } from "@headlessui/react";
import Image from "next/image";
import Beach from '../../../../public/beach.jpg';
import Church from '../../../../public/church.jpg';
import downtown from '../../../../public/downtown.jpg';
import hedgehog from '../../../../public/hedgehog.jpg';
import lake from '../../../../public/lake.jpg';
import squirrel from '../../../../public/squirrel.jpg';
import viewWildAnimal from '../../../../public/view-wild-animal.jpg';
import { useReducer, useState } from "react";

export default function MyDay() {
    const [imageChange, setImageChange]: any = useState('view-wild-animal.jpg');
    const [ state, changeBGImage ] = useReducer(changeImage, imageChange)
    function changeImage(state: any, action: any) {
        setImageChange(action);
    }

    let dayShowing = "My Day";
    const [month, day, year]: any = new Date().toLocaleDateString("en-US").split("/");
    const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <div style={{ backgroundImage: `url(/${imageChange})` }} className="bg-cover bg-center h-full rounded-tl-[10px] px-4 py-4 transition-all duration-200 ease-in-out " >
            <div className="flex items-start justify-between">
                <div className="flex items-start flex-col justify-around">
                    <h1 className="text-2xl font-semibold text-white">{dayShowing}</h1>
                    <p className="text-[14px] font-light text-white">{`${daysArr[new Date().getDay()]}, ${monthArr[parseInt(month) - 1]} ${day}`}</p>
                </div>
                <div className="btn_section">
                    <Menu>
                        <MenuButton className="bg-[#00000050] px-[7px] py-[2px] rounded-[4px] text-white">
                            <FontAwesomeIcon icon={faEllipsis} />
                        </MenuButton>
                        <Transition enter="transition ease-out duration-75" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                            leave="transition ease-in duration-100" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <MenuItems anchor="bottom end"
                                className="w-[190px] origin-top-right border rounded-[4px] mt-1 border-white/5 bg-[#00000050] p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none">
                                <MenuItem>
                                    <div className="flex items-center justify-between">
                                        <button className="group flex w-full items-center gap-1 rounded-lg py-1 px-1 data-[focus]:bg-white/10" onClick={() => { changeBGImage("beach.jpg") }}>
                                            <Image src={Beach} alt="Beach Image" width={50} height={50} className="w-[50px] h-[36px] rounded-[4px]"></Image>
                                        </button>
                                        <button className="group flex w-full items-center gap-1 rounded-lg py-1 px-1 data-[focus]:bg-white/10" onClick={() => { changeBGImage("church.jpg") }}>
                                            <Image src={Church} alt="Church Image" width={50} height={50} className="w-[50px] h-[36px] rounded-[4px]"></Image>
                                        </button>
                                        <button className="group flex w-full items-center gap-1 rounded-lg py-1 px-1 data-[focus]:bg-white/10" onClick={() => { changeBGImage("downtown.jpg") }}>
                                            <Image src={downtown} alt="downtown Image" width={50} height={50} className="w-[50px] h-[36px] rounded-[4px]"></Image>
                                        </button>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="flex items-center justify-between">
                                        <button className="group flex w-full items-center gap-1 rounded-lg py-1 px-1 data-[focus]:bg-white/10" onClick={() => { changeBGImage("hedgehog.jpg") }}>
                                            <Image src={hedgehog} alt="hedgehog Image" width={50} height={50} className="w-[50px] h-[36px] rounded-[4px]"></Image>
                                        </button>
                                        <button className="group flex w-full items-center gap-1 rounded-lg py-1 px-1 data-[focus]:bg-white/10" onClick={() => { changeBGImage("lake.jpg") }}>
                                            <Image src={lake} alt="lake Image" width={50} height={50} className="w-[50px] h-[36px] rounded-[4px]"></Image>
                                        </button>
                                        <button className="group flex w-full items-center gap-1 rounded-lg py-1 px-1 data-[focus]:bg-white/10" onClick={() => { changeBGImage("squirrel.jpg") }}>
                                            <Image src={squirrel} alt="squirrel Image" width={50} height={50} className="w-[50px] h-[36px] rounded-[4px]"></Image>
                                        </button>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="flex items-center justify-between">
                                        <button className="group flex w-full items-center gap-1 rounded-lg py-1 px-1 data-[focus]:bg-white/10" onClick={() => { changeBGImage("view-wild-animal.jpg") }}>
                                            <Image src={viewWildAnimal} alt="viewWildAnimal Image" width={50} height={50} className="w-[50px] h-[36px] rounded-[4px]"></Image>
                                        </button>
                                    </div>
                                </MenuItem>
                            </MenuItems>
                        </Transition>
                    </Menu>
                </div>
            </div>
            <div className="">

            </div>
        </div >
    );
}