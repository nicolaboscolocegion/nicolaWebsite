"use client";
export const revalidate = 10;
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";


export const imgUrl = "https://api.nikbc.tech/storage/v1/object/public/images/"

type Props = {
  image: string;
  title: string;
  description: string;
  link: string;

}


export function Card(props: Props) {

  return (

    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900   ">
      {
        props.image == undefined ? <></> :
          <Image

            src={`https://api.nikbc.tech/storage/v1/object/public/images/` + props.image}
            alt={props.image}
            width={200}
            height={200}
            placeholder='empty'
            onError={() => console.error("image not loaded: " + props.image)}
            className="object-contain rounded-3xl mx-auto"
          />

      }

      <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        {props.title}
      </p>

      <p className="text-base text-neutral-600 dark:text-neutral-400">
        {props.description}
      </p>

      <div className="pt-5">
        <a href={"https://" + props.link}>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              LINK
            </div>

          </button>
        </a>
      </div>
    </BackgroundGradient>

  );
}