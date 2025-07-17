"use client";

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import moment from 'moment';
import "../globals.css";
import { Card } from './card';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { timelineItemClasses } from '@mui/lab/TimelineItem';

import { WorkContent, typeOfWOrk } from '../custom';



function icon(type: typeOfWOrk) {
  switch (type) {
    case typeOfWOrk.education:
      return <SchoolIcon />
    case typeOfWOrk.job:
      return <WorkIcon />
    case typeOfWOrk.project:
      return <AccountTreeIcon />
  }
}




export default function CustomizedTimeline({ varWorks }: { varWorks: WorkContent[] }) {

  const works: WorkContent[] = varWorks;
  const theme = useTheme();
  const lessThanMD = useMediaQuery(theme.breakpoints.down("md"));
  

  return (
    <>
      <Timeline
        position={lessThanMD ? "right" : "alternate"}

        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}

        className='mt-20' >
        {works.map((work: WorkContent, index: number) =>
          <TimelineItem key={index}>
            {lessThanMD ? <></> :
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="h5"
                color="white"
              >
                
                <p className='text-base text-neutral-300 	'>
                  {
                    "Started in: " + moment(work.startingDate, 'YYYY-MM-DD').format("DD/MM/YYYY")
                  }
                  <br />
                  {
                    work.endDate != undefined ?
                      "Ended in: " + moment(work.endDate, 'YYYY-MM-DD').format("DD/MM/YYYY") :
                      "Still in progress"
                  }
            
                </p>
              </TimelineOppositeContent>
            }
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ bgcolor: 'secondary.main' }}>
                {icon(work.type)}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }} >


              <div className={lessThanMD ? "grid justify-center" : (index % 2 === 0 ? " grid justify-items-start mx-20" : " grid justify-items-end mx-20")}  >
                <Card title={work.name} description={work.description} link={work.link} image={work.image} startingDate={lessThanMD? work.startingDate : undefined} endDate={work.endDate}/>

              </div>
            </TimelineContent>
          </TimelineItem>

        )

        }
      </Timeline >
    </>
  )


}
