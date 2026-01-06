
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;      // Hero image for the modal
  coverImageUrl: string; // Thumbnail image for the card
  tags: string[];
  role: string;
  timeline: string;
}

export interface GeneratedBrief {
  problem: string;
  solution: string;
  persona: string;
  keyFeatures: string[];
}
