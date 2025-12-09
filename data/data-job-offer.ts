export type JobOffer = {
  id: number;
  title: string;
  skills: string[];
  location: 'Paris' | 'Bordeaux' | 'Marseille';
  publishedAt: Date;
}

export const jobOffers: JobOffer[] = [
  { id: 1, title: 'Product Owner Senior', skills: ['Agile', 'Scrum', 'Jira', 'Roadmap', 'Stakeholder Management'], location: 'Paris', publishedAt: new Date('2025-11-15') },
  { id: 2, title: 'Engineering Manager', skills: ['People Management', 'Node.js', 'React', 'Recruiting', 'OKRs'], location: 'Bordeaux', publishedAt: new Date('2025-10-22') },
  { id: 3, title: 'Tech Lead Fullstack', skills: ['TypeScript', 'Architecture', 'NestJS', 'React', 'Leadership technique'], location: 'Marseille', publishedAt: new Date('2025-09-30') },
  { id: 4, title: 'Développeur Frontend Senior', skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Testing'], location: 'Paris', publishedAt: new Date('2025-11-28') },
  { id: 5, title: 'Backend Engineer Go', skills: ['Go', 'Kubernetes', 'PostgreSQL', 'gRPC', 'Observabilité'], location: 'Bordeaux', publishedAt: new Date('2025-11-10') },
  { id: 6, title: 'Data Scientist', skills: ['Python', 'Machine Learning', 'SQL', 'LLM', 'MLOps'], location: 'Paris', publishedAt: new Date('2025-10-18') },
  { id: 7, title: 'Lead Developer Ruby', skills: ['Ruby on Rails', 'PostgreSQL', 'React', 'Sidekiq', 'Scaling'], location: 'Marseille', publishedAt: new Date('2025-11-05') },
  { id: 8, title: 'DevOps Senior', skills: ['Kubernetes', 'Terraform', 'AWS', 'GitOps', 'Observability'], location: 'Bordeaux', publishedAt: new Date('2025-11-20') },
  { id: 9, title: 'Product Designer Senior', skills: ['Figma', 'Design System', 'UX Research', 'A11y', 'Prototyping'], location: 'Paris', publishedAt: new Date('2025-10-25') },
  { id: 10, title: 'Fullstack TypeScript', skills: ['Next.js', 'tRPC', 'Prisma', 'TypeScript', 'Tailwind'], location: 'Marseille', publishedAt: new Date('2025-11-12') },
  { id: 11, title: 'SRE', skills: ['Go', 'Kubernetes', 'Prometheus', 'Chaos Engineering', 'On-call'], location: 'Bordeaux', publishedAt: new Date('2025-10-08') },
  { id: 12, title: 'Mobile React Native', skills: ['React Native', 'TypeScript', 'Expo', 'Fastlane', 'App Store'], location: 'Paris', publishedAt: new Date('2025-11-25') },
];
