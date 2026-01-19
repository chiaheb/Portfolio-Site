
export interface CarouselItem {
  imageUrl: string;
  title: string;
  caption: string;
}

export interface ProjectChapter {
  title: string;
  content: string;
  imageUrl?: string;
  template?: 'casestudyleft' | 'casestudyright' | 'casestudy spread' | 'casestudyquote' | 'casestudyscroll';
  bgColor?: string;
  bgImageUrl?: string;
  carouselItems?: CarouselItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;      // Hero image for the modal
  bannerImageUrl?: string; // New section under introduction
  coverImageUrl: string; // Thumbnail image for the card
  tags: string[];
  role: string;
  timeline: string;
  platform: string;      // Mobile, Web, Desktop, etc.
  chapters?: ProjectChapter[];
  bgColor?: string; // Background color for the intro section
  bgImageUrl?: string; // Background image for the banner/intro sections
}

export interface GeneratedBrief {
  problem: string;
  solution: string;
  persona: string;
  keyFeatures: string[];
}
