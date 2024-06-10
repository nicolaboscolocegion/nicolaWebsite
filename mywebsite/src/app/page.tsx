"use client";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import { CardNoButton } from "./components/cardNoButton";
import Links from "./components/links"
import EmailIcon from '@mui/icons-material/Email';


function getAge() {
  const birthDate: Date = new Date("1999-11-26")
  const today: Date = new Date();

  const age: number = today.getFullYear() - birthDate.getFullYear();
  const m: number = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1;
  } else {
    return age;
  }

}



const description: string = `Nationality: Italian
Born in: Chioggia (VE)
Birth: 26/11/1999
Age: ${getAge()}
Email: nicolaboscolocegion@gmail.com 
`


export default function Home() {
  return (
    <Box sx={{ width: '100%' }} className='pt-20 px-10'>
      <Grid
        container
        spacing={5}
        columns={{ xd:1, sm: 2}}
        className='pt-5'
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >

        <Grid item  >

          <div className="grid justify-center" >
            <CardNoButton
              image="/propic.jpg"
              title="General informations"
              description={description} />
          </div>


        </Grid>

        <Grid item   >
          <div className="grid justify-center" >
            <Links />
          </div>
        </Grid>

      </Grid>

    </Box>
  );
}



