export enum typeOfWOrk {
  education,
  job,
  project,
}

export type WorkContent = {
  id: bigint;
  name: string;
  startingDate: Date;
  endDate: Date;
  description: string;
  link: string;
  type: typeOfWOrk;
  image: string
}
