"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";


type Props = {
  img: string;
  title: string;
  description: string;
  link: string;

}

export function Card(props: Props) {
  return (
    <div className="w-fit m-auto static " id='ciao'>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900   ">
        <Image
          src={props.img}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {props.title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {props.description}
        </p>


        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Lit up borders
          </div>
        </button>
      </BackgroundGradient>
    </div>
  );
}