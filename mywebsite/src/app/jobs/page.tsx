"use server";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { WorkContent } from '../custom';
import { Card } from '../components/card';
import { fetchPocketBaseCollectionWithImages } from '../lib/pocketbase';

export default async function Jobs() {
  const jobs: WorkContent[] = await fetchPocketBaseCollectionWithImages<WorkContent>('jobs');
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
            <Card title={job.name} description={job.description} link={job.link} imageFile={job.imageID} startingDate={job.startingDate} endDate={job.endDate} />

          </Grid>

        )}

      </Grid>
    </Box>
  )

}