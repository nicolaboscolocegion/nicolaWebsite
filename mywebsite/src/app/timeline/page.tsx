"use server";
import CustomizedTimeline from "../components/timeline";
import { WorkContent, typeOfWOrk } from '../custom';

export default async function TimelinePage() {
  const revalidateTime = 10; // 1 hour in seconds
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000';

  const eduRetrived: WorkContent[] = await fetch(`${baseUrl}/api/education`, {
    next: { revalidate: revalidateTime },
  }).then(response => response.json());

  const edu: WorkContent[] = eduRetrived.map((retrived: WorkContent) => ({ ...retrived, type: typeOfWOrk.education }));

  const jobsRetrived: WorkContent[] = await fetch(`${baseUrl}/api/job`, {
    next: { revalidate: revalidateTime },
  }).then(response => response.json());

  const jobs: WorkContent[] = jobsRetrived.map((retrived: WorkContent) => ({ ...retrived, type: typeOfWOrk.job }));

  const projectRetrived: WorkContent[] = await fetch(`${baseUrl}/api/project`, {
    next: { revalidate: revalidateTime },
  }).then(response => response.json());
  const projects: WorkContent[] = projectRetrived.map((retrived: WorkContent) => ({ ...retrived, type: typeOfWOrk.project }));

  const works: WorkContent[] = Array.prototype.concat(edu, jobs, projects).sort((a, b) => (a.startingDate < b.startingDate) ? 1 : ((b.startingDate < a.startingDate) ? -1 : 0));

  return <CustomizedTimeline varWorks={works} />
}
