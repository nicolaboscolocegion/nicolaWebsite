"use client";
export const revalidate = 10;
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";


type Props = {
  image: string;
  title: string;
  description: string;
}


export function CardNoButton(props: Props) {

  return (

    
      <BackgroundGradient className="rounded-[22px] max-w-2xl p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
        {
          props.image == undefined ? <></> :
            <Image
              priority={true}
              src={props.image}
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

        <p className="text-base text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap">
          {props.description}
        </p>


        

      </BackgroundGradient>
    
  );
}