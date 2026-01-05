
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
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
