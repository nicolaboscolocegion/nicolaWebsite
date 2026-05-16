"use server";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { WorkContent } from '../custom';
import { Card } from '../components/card';
import { fetchPocketBaseCollectionWithImages } from '../lib/pocketbase';

export default async function Education() {
  const education: WorkContent[] = await fetchPocketBaseCollectionWithImages<WorkContent>('education');

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
            <Card title={edu.name} description={edu.description} link={edu.link} imageFile={edu.imageID} startingDate={edu.startingDate} endDate={edu.endDate} />

          </Grid>

        )}

      </Grid>
    </Box>
  )

}