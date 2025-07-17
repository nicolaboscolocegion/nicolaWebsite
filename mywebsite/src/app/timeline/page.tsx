"use server";
import CustomizedTimeline from "../components/timeline";
import { WorkContent, typeOfWOrk } from '../custom';
import { key } from '../api/key';



export default async function TimelinePage() {

  const headers = {
    'apikey': key,
    'Authorization': `Bearer ${key}`
  }

  const eduRetrived: WorkContent[] = await fetch('https://api.nikbc.com/rest/v1/education?select=*', {
    next: { revalidate: 3600 },
    headers: headers
  }).then(response => response.json());

  const edu: WorkContent[] = eduRetrived.map((retrived: WorkContent) => ({ ...retrived, type: typeOfWOrk.education }))

  const jobsRetrived = await await fetch('https://api.nikbc.com/rest/v1/jobs?select=*', {
    next: { revalidate: 3600 },
    headers: headers
  }).then(response => response.json());

  const jobs: WorkContent[] = jobsRetrived.map((retrived: WorkContent) => ({ ...retrived, type: typeOfWOrk.job }))

  const projectRetrived = await fetch('https://api.nikbc.com/rest/v1/projects?select=*', {
    next: { revalidate: 3600 },
    headers: headers
  }).then(response => response.json());
  const projects: WorkContent[] = projectRetrived.map((retrived: WorkContent) => ({ ...retrived, type: typeOfWOrk.project }))

  const works: WorkContent[] = Array.prototype.concat(edu, jobs, projects).sort((a, b) => (a.startingDate < b.startingDate) ? 1 : ((b.startingDate < a.startingDate) ? -1 : 0));

  return <CustomizedTimeline varWorks={works} />
}