"use client";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import "../globals.css";
import { Card } from './card';
import { CenterFocusStrong } from '@mui/icons-material';

export default function CustomizedTimeline() {
  return (

    <Timeline position="alternate" className='mt-20' >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} >

          <Card title='titolo' description='descrizione molto lunga' link='https://www.google.com' img='/kirby.png' />


        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}

          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} className='relative ' id='ciao2' >

          <Card title='titolo' 
          description='Congue a litora mi porttitor hac conubia, ultrices nullam mi. Amet molestie varius sociosqu tortor nisl sagittis class. Sociis fringilla egestas, litora pulvinar lacinia donec malesuada nunc placerat enim eleifend. Est fermentum taciti vehicula pharetra augue amet lorem risus quis sit. Inceptos dignissim est elementum sed litora cum quis scelerisque hendrerit! Viverra.

          Dui risus pulvinar sollicitudin primis massa sociosqu at velit, venenatis litora volutpat id. Sem et aenean ligula etiam mus nibh nec! Proin velit ultrices luctus et nibh varius nunc. A viverra sodales fermentum convallis luctus rutrum mauris senectus cras dolor. Pretium fusce bibendum pretium justo quam! Dignissim tempor eros odio platea. Primis habitasse suspendisse vehicula nunc proin nisi. Fermentum faucibus gravida sodales nisi mattis ultrices luctus elementum orci potenti non. Torquent taciti eget est quam montes lacinia blandit euismod fusce pharetra curabitur auctor. Facilisi porta.
          
          Commodo orci consequat, varius nisi. Maecenas vitae eu quam interdum metus nibh fames felis. Sapien lacinia eros porta ullamcorper risus odio egestas sociis sollicitudin conubia inceptos habitasse. Inceptos nascetur quis himenaeos curabitur porttitor risus sociosqu sollicitudin nisi maecenas? In volutpat, porta tellus ut suspendisse. Venenatis netus erat, lectus id pretium vel habitant himenaeos sollicitudin odio phasellus. Convallis dictum tortor purus vel sit. Dolor ligula ante praesent convallis platea eget dapibus libero ut malesuada.
          
          Per eleifend lobortis at mus habitant magnis mus sociis posuere pellentesque. Magna, malesuada at mollis sollicitudin facilisis elementum. Rhoncus per, adipiscing cum senectus tempor. Platea quis vel vestibulum mus cras cum maecenas. Metus class vitae litora tincidunt habitasse facilisi nullam fringilla donec curae;. Neque tortor turpis fusce vel consectetur platea netus. Aliquam.
          
          Consectetur tellus pulvinar amet praesent pharetra mollis. Eget urna fringilla metus cum nam sollicitudin egestas nibh proin ac quis integer! Libero leo duis donec curabitur aliquet lorem diam in duis nulla. Taciti egestas tempus dictum praesent egestas sociis pharetra et auctor tellus himenaeos venenatis! Fames odio sem tempus. Euismod ac eleifend vel dictumst aptent pharetra nascetur platea interdum. Est tempor mauris eu ultricies ante ridiculus aptent pellentesque scelerisque proin senectus!
          ' 
          link='https://www.google.com' img='/kirby.png' />


        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

  );
}
