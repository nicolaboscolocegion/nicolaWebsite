"use server";
import CustomizedTimeline from "../components/timeline";
import { WorkContent, typeOfWOrk } from '../custom';


export default async function TimelinePage() {

  const eduRetrived: WorkContent[] = await fetch('http://localhost:3000/api/education', { next: { revalidate: 0 } }).then(response => response.json());
  const edu: WorkContent[] = eduRetrived.map((retrived: WorkContent) => ({ ...retrived, type: typeOfWOrk.education }))

  const jobsRetrived = await fetch('http://localhost:3000/api/job', { next: { revalidate: 3600 } }).then(response => response.json());
  const jobs: WorkContent[] = jobsRetrived.map((retrived: WorkContent) => ({ ...retrived, type: typeOfWOrk.job }))

  const projectRetrived = await fetch('http://localhost:3000/api/project', { next: { revalidate: 3600 } }).then(response => response.json());
  const projects: WorkContent[] = projectRetrived.map((retrived: WorkContent) => ({ ...retrived, type: typeOfWOrk.project }))

  const works: WorkContent[] = Array.prototype.concat(edu, jobs, projects).sort((a, b) => (a.startingDate > b.startingDate) ? 1 : ((b.startingDate > a.startingDate) ? -1 : 0));

  return <CustomizedTimeline varWorks={works} />
}