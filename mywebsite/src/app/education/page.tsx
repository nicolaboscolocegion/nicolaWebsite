"use server";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { WorkContent } from '../custom';
import { Card } from '../components/card';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import { key } from '../api/key';

export default async function Education() {

  const education: WorkContent[] = await fetch('https://api.nikbc.com/rest/v1/education?select=*', {
    next: { revalidate: 3600 },
    headers: {
      'apikey': key,
      'Authorization': `Bearer ${key}`
    },
  }).then(response => response.json());

  education.sort((a, b) => (a.startingDate < b.startingDate) ? 1 : ((b.startingDate < a.startingDate) ? -1 : 0));
  return (
    <Box sx={{ width: '100%' }} className='pt-20 px-10'>
      <Grid container spacing={5} columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        className='pt-5'
        direction="row"
        justifyContent="center"
        alignItems="center">

        {education.map((edu: WorkContent, index: number) =>
          <Grid key={index}>
            <Card title={edu.name} description={edu.description} link={edu.link} image={edu.image} startingDate={edu.startingDate} endDate={edu.endDate}/>

          </Grid>

        )}

      </Grid>
    </Box>
  )

}