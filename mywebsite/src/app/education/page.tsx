"use server";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { WorkContent } from '../custom';
import { Card } from '../components/card';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';


export default async function Jobs() {

  const education: WorkContent[] = await fetch('http://localhost:3000/api/education', { next: { revalidate: 3600 } }).then(response => response.json());

  return (
    <Box sx={{ width: '100%' }} className='pt-20 px-10'>
      <Grid container spacing={5} columns={{ xs:1, sm: 2, md: 3, lg: 4, xl: 5 }}
        className='pt-5'
        direction="row"
        justifyContent="center"
        alignItems="center">

        {education.map((edu: WorkContent, index: number) =>
          <Grid item xs={1} key={index} className='m-20'>
            <Card title={edu.name} description={edu.description} link={edu.link} image={edu.image} />

          </Grid>

        )}

      </Grid>
    </Box>
  )

}