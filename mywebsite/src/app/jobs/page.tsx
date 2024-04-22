"use server";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { WorkContent } from '../custom';
import { Card } from '../components/card';
import { key } from '../api/key';

export default async function Jobs() {

  const jobs: WorkContent[] = await fetch('https://api.nikbc.tech/rest/v1/jobs?select=*', { 
    next: { revalidate: 36000 } ,
    headers: {
      'apikey': key,
      'Authorization' : `Bearer ${key}`
  },
  }).then(response => response.json());

  
  return (
    <Box sx={{ width: '100%' }} className='pt-20 px-10'>
      <Grid container spacing={5} columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        className='pt-5'
        direction="row"
        justifyContent="center"
        alignItems="center">

        {jobs.map((job: WorkContent, index: number) =>
          <Grid item xs={1} key={index} className='m-20'>
            <Card title={job.name} description={job.description} link={job.link} image={job.image} />

          </Grid>

        )}

      </Grid>
    </Box>
  )

}