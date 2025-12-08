"use client";
export const revalidate = 10;
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import moment from 'moment';
import { Grid } from "@mui/material";



export const imgUrl = "https://api.nikbc.com/storage/v1/object/public/images/"

type Props = {
  image: string;
  title: string;
  description: string;
  link: string;
  startingDate?: Date
  endDate?: Date;
}


export function Card(props: Props) {

  const dateField = props.startingDate == undefined ? "" : "Started: " + moment(props.startingDate, 'YYYY-MM-DD').format("DD/MM/YYYY") + "\n" +
    (props.endDate != undefined ? "Ended: " + moment(props.endDate, 'YYYY-MM-DD').format("DD/MM/YYYY") : "Still in progress");
  
  return (

    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 text-left">
      {
        props.image == undefined ? <></> :
          <Image

            src={`https://api.nikbc.com/storage/v1/object/public/images/` + props.image}
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

      <p className="text-base text-neutral-600 dark:text-neutral-400 ">
        {props.description}
      </p>


      <Grid

        container
        spacing={5}
        columns={{ sm: 2 }}
        className='pt-5'
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid >
          <p className="text-base text-neutral-600 dark:text-neutral-400 whitespace-pre-line">
            {dateField}
          </p>
        </Grid>
        <Grid>
          <a href={"https://" + props.link}>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-6 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                LINK
              </div>

            </button>
          </a>
        </Grid>
      </Grid>

    </BackgroundGradient>

  );
}