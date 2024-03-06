"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import { Typography } from "@mui/material";


type Props = {
  img: string;
  title: string;
  description: string;
  link: string;

}

export function Card(props: Props) {
  return (
    <div className="w-fit m-auto static " id='ciao'>
      <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900   ">
        <Image
          src={props.img}
          alt={props.img}
          height="400"
          width="400"
          className="object-contain"
        />
        <Typography variant="h4">
          {props.title}
        </Typography>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {props.description}
        </p>

        <div className="pt-5">
        <a href="/api/education">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Lit up borders
            </div>

          </button>
        </a>
        </div>
      </BackgroundGradient>
    </div >
  );
}