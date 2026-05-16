"use client";
export const revalidate = 10;
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import moment from 'moment';
import { Grid } from "@mui/material";
import { log } from "console";


type ImageFile = {
  id: string;
  file: string;
};

type Props = {
  imageFile?: ImageFile;
  title: string;
  description: string;
  link: string;
  startingDate?: Date | null;
  endDate?: Date | null;
};

export function Card(props: Props) {
  const imageUrl = props.imageFile
    ? `${process.env.NEXT_PUBLIC_API_POCKETBASE_URL}/api/files/images/${props.imageFile.id}/${props.imageFile.file}`
    : null;

  const formatDate = (date?: Date | null) => {
    const parsed = moment(date);
    return parsed.isValid() ? parsed.format("DD/MM/YYYY") : null;
  };

  const hasValidEndDate = props.endDate != null && moment(props.endDate).isValid();
  const dateField = props.startingDate == null || !moment(props.startingDate).isValid()
    ? ""
    : "Started: " + formatDate(props.startingDate) + "\n" +
    (hasValidEndDate ? "Ended: " + formatDate(props.endDate) : "Still in progress");

  return (

    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 text-left">
      {
        imageUrl == null ? <></> :
          <Image
            src={imageUrl}
            alt={props.title}
            width={200}
            height={200}
            placeholder='empty'
            onError={() => console.error("image not loaded: " + imageUrl)}
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
          <a href={props.link}>
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