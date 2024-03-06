import { Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 z-50">

      <Typography variant="h1">
        WORK IN PROGRESS
      </Typography>
      <Image src="/Kirby.png"
      alt="kyrby"
      height="400"
      width="400"
      className="object-contain"
      />

      
    </main>
  );
}
