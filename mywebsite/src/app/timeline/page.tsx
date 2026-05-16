"use server";
import CustomizedTimeline from "../components/timeline";
import { WorkContent, typeOfWOrk } from '../custom';
import { fetchPocketBaseCollectionWithImages } from '../lib/pocketbase';

export default async function TimelinePage() {
  const eduRetrived: WorkContent[] = await fetchPocketBaseCollectionWithImages<WorkContent>('education');
  const edu: WorkContent[] = eduRetrived.map((retrived: WorkContent) => ({ ...retrived, type: typeOfWOrk.education }));

  const jobsRetrived: WorkContent[] = await fetchPocketBaseCollectionWithImages<WorkContent>('jobs');
  const jobs: WorkContent[] = jobsRetrived.map((retrived: WorkContent) => ({ ...retrived, type: typeOfWOrk.job }));

  const projectRetrived: WorkContent[] = await fetchPocketBaseCollectionWithImages<WorkContent>('projects');
  const projects: WorkContent[] = projectRetrived.map((retrived: WorkContent) => ({ ...retrived, type: typeOfWOrk.project }));

  const works: WorkContent[] = Array.prototype.concat(edu, jobs, projects).sort((a, b) => (a.startingDate < b.startingDate) ? 1 : ((b.startingDate < a.startingDate) ? -1 : 0));

  return <CustomizedTimeline varWorks={works} />
}
