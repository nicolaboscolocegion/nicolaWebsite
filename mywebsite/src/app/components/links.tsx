"use client";
export const revalidate = 10;
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Links() {

  return (


    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">

      <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        Links
      </p>

      <p className="text-base text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap leading-8">
        Github <a href="https://github.com/nicolaboscolocegion" aria-label="Link to personal github"> <GitHubIcon /> </a> <br />
        Linkedin <a href="https://www.linkedin.com/in/nicola-boscolo-cegion-732769152/" aria-label="Link to Linkedin profile"> <LinkedInIcon /> </a>
      </p>
    </BackgroundGradient>

  );
}