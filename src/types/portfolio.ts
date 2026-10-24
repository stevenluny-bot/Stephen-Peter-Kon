export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  highlights: string[];
  technologies: string[];
  isFeatured: boolean;
  status: 'active' | 'in_development' | 'concept';
}

export interface ExperienceItem {
  id: string;
  role: string;
  institution: string;
  period: string;
  location?: string;
  responsibilities: string[];
  isOngoing?: boolean;
}

export interface EducationItem {
  id: string;
  credential: string;
  institution: string;
  period: string;
  note?: string;
  status: 'in_progress' | 'completed';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  service: string;
  subject: string;
  message: string;
}
