export enum typeOfWOrk {
  education,
  job,
  project,
}

export type WorkContent = {
  id: bigint;
  name: string;
  startingDate: string;
  endDate: string;
  description: string;
  link: string;
  type: typeOfWOrk;
  image: string
}
