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


export default async function Projects() {

  const projects: WorkContent[] = await fetch('https://api.nikbc.tech/rest/v1/projects?select=*', { 
    next: { revalidate: 3600 } ,
    headers: {
      'apikey': key,
      'Authorization' : `Bearer ${key}`
  },
  }).then(response => response.json());

  return (
    <Box sx={{ width: '100%' }} className='pt-20 px-10'>
      <Grid container spacing={5} columns={{ xs:1, sm: 2, md: 3, lg: 4, xl: 5 }}
        className='pt-5'
        direction="row"
        justifyContent="center"
        alignItems="center">

        {projects.map((project: WorkContent, index: number) =>
          <Grid item  key={index} className='m-20'>
            <Card title={project.name} description={project.description} link={project.link} image={project.image} />

          </Grid>

        )}

      </Grid>
    </Box>
  )

}
