'use client';
import Image from "next/image";
import logo from "../assets/microsoft_todo.svg";
import { Switch } from '@headlessui/react'
import { useState } from "react";
import { useTheme } from 'next-themes'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    const { setTheme, resolvedTheme } = useTheme()
    let enabled: boolean;
    if (resolvedTheme === 'dark') {
        enabled = false;
    } else {
        enabled = true;
    }

    return (
        <div className="flex my-2 mx-3 items-center justify-between">
            <div className="flex items-center">
                <Image src={logo} alt="Logo iamge" width={25} height={25}></Image>
                <h1 className="ml-1">Microsoft Todo</h1>
            </div>
            <div className="flex items-center justify-center">
                {/* <span className=" font-light text-[14px] mx-4"> */}
                <Switch
                    checked={enabled}
                    onChange={() => { setTheme(enabled ? 'dark' : 'light') }}
                    className="group inline-flex h-6 w-11 items-start rounded-full bg-gray-400 transition data-[checked]:bg-slate-200"
                >
                    <span className="size-4 translate-x-1 rounded-full transition group-data-[checked]:translate-x-6">
                        <FontAwesomeIcon icon={enabled ? faSun : faMoon} className="mt-[4.5px]"/>
                    </span>
                </Switch>
                {/* <span className=" font-light text-[14px] mx-4"><FontAwesomeIcon icon={faSun} /></span> */}
            </div>
        </div>
    );
}