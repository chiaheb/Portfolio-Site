
export interface ProjectChapter {
  title: string;
  content: string;
  imageUrl?: string;
  template?: 'casestudyleft' | 'casestudyright' | 'casestudy spread';
  bgColor?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;      // Hero image for the modal
  coverImageUrl: string; // Thumbnail image for the card
  tags: string[];
  role: string;
  timeline: string;
  platform: string;      // Mobile, Web, Desktop, etc.
  chapters?: ProjectChapter[];
  bgColor?: string; // Background color for the intro section
}

export interface GeneratedBrief {
  problem: string;
  solution: string;
  persona: string;
  keyFeatures: string[];
}