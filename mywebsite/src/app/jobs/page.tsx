"use server";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { WorkContent } from '../custom';
import { Card } from '../components/card';

export default async function Jobs() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000';

  const jobs: WorkContent[] = await fetch(`${baseUrl}/api/job`, {
    next: { revalidate: 10 },
  }).then(response => response.json());
  jobs.sort((a, b) => (a.startingDate < b.startingDate) ? 1 : ((b.startingDate < a.startingDate) ? -1 : 0));


  return (
    <Box sx={{ width: '100%' }} className='pt-20 px-10'>
      <Grid container spacing={5} columns={{ sm: 1, md: 3, lg: 4, xl: 5 }}
        className='pt-5'
        direction="row"
        justifyContent="center"
        alignItems="center">

        {jobs.map((job: WorkContent, index: number) =>
          <Grid key={index} >
            <Card title={job.name} description={job.description} link={job.link} imageID={job.imageID} startingDate={job.startingDate} endDate={job.endDate} />

          </Grid>

        )}

      </Grid>
    </Box>
  )

}