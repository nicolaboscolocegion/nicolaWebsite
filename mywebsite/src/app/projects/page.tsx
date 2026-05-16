"use server";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { WorkContent } from '../custom';
import { Card } from '../components/card';


export default async function Projects() {

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000';
  const projects: WorkContent[] = await fetch(`${baseUrl}/api/project`, {
    next: { revalidate: 10 },
  }).then(response => response.json());
  projects.sort((a, b) => (a.startingDate < b.startingDate) ? 1 : ((b.startingDate < a.startingDate) ? -1 : 0));

  return (
    <Box sx={{ width: '100%' }} className='pt-20 px-10'>
      <Grid container spacing={5} columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        className='pt-5'
        direction="row"
        justifyContent="center"
        alignItems="center">

        {projects.map((project: WorkContent, index: number) =>
          <Grid key={index} >
            <Card title={project.name} description={project.description} link={project.link} imageID={project.imageID} startingDate={project.startingDate} endDate={project.endDate} />

          </Grid>

        )}

      </Grid>
    </Box>
  )

}
