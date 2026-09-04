import type { ImageMetadata } from 'astro';

export interface LinkItem {
  label: string;
  href: string;
  kind?: 'primary' | 'secondary';
}

export interface EducationEntry {
  school: string;
  shortName: string;
  degree: string;
  department?: string;
  period: string;
  location: string;
  logo: ImageMetadata;
  logoClass?: string;
  url: string;
  details: string[];
}

export interface ExperienceEntry {
  organization: string;
  role: string;
  period: string;
  logo: ImageMetadata;
  url: string;
  description: string;
  tags: string[];
}

export interface NewsEntry {
  date: string;
  title: string;
  detail: string;
  featured?: boolean;
}

export interface PublicationAuthor {
  name: string;
  self?: boolean;
}

export interface Publication {
  slug: string;
  title: string;
  authors: PublicationAuthor[];
  venue: string;
  badge: string;
  badgeTone: 'accepted' | 'review';
  description: string;
  keywords: string[];
  visual: {
    index: string;
    kicker: string;
    motif: 'network' | 'boundary' | 'trajectory';
    color: 'violet' | 'cyan' | 'pink';
  };
  links?: LinkItem[];
}

export interface Highlight {
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Award {
  period: string;
  title: string;
  detail: string;
  url?: string;
}
