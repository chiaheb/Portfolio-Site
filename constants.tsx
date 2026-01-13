
import { Project } from './types';

/**
 * 🖼️ PROJECT ASSETS REGISTRY
 * Plug in your external image links here. 
 * Organised by [Project Name] -> [Asset Type/Section Title]
 */
export const PROJECT_ASSETS = {
  'Direct': {
    thumbnail: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/TestUpload.png',
    hero: 'https://images.unsplash.com/photo-1556742049-02e4d509d3ef?auto=format&fit=crop&q=80&w=2000',
    chapters: {
      'The Landscape': 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80&w=1200',
      'The Friction Point': 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200',
      'The Vision': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    }
  },
  'Assignor': {
    thumbnail: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000',
    hero: 'https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?auto=format&fit=crop&q=80&w=2000',
    chapters: {
      'The Rural Gap': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
      'Designing for Low-Fi': 'https://images.unsplash.com/photo-1504868584819-f8e90526ef49?auto=format&fit=crop&q=80&w=2000',
    }
  },
  'Floor View': {
    thumbnail: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2000',
    hero: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
    chapters: {
      'Beyond the Price Tag': 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200',
    }
  },
  'FIX.CX': {
    thumbnail: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000',
    hero: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000',
    chapters: {
      'Adaptive Minimalism': 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=2000',
    }
  }
};

/**
 * 📂 PROJECT CONFIGURATION
 * Defines the content and layout for each case study.
 */
export const PROJECTS: Project[] = [
  // CASE STUDY: Direct
  {
    id: '1',
    title: 'Direct',
    description: 'Reimagining the digital wallet experience for Gen-Z users with focus on micro-investments.',
    longDescription: 'FlowPay was born from the insight that Gen-Z wants to invest but feels overwhelmed by traditional banking UI.',
    coverImageUrl: PROJECT_ASSETS['Direct'].thumbnail,
    imageUrl: PROJECT_ASSETS['Direct'].hero,
    tags: ['UX Research', 'Mobile Design', 'Visual Identity'],
    role: 'Lead Product Designer',
    timeline: '4 Months',
    platform: 'Mobile, Web',
    bgColor: '#f8fafc',
    chapters: [
      {
        title: "The Landscape",
        template: "casestudyleft", // Image on Left
        imageUrl: PROJECT_ASSETS['Direct'].chapters['The Landscape'],
        bgColor: '#f1f5f9',
        content: "Traditional banking apps are designed with a 40-year-old mental model. Gen-Z users view money as 'flows' rather than 'accounts'. Our research showed that 72% of users under 25 find standard bank statements anxiety-inducing."
      },
      {
        title: "The Friction Point",
        template: "casestudyright", // Image on Right
        imageUrl: PROJECT_ASSETS['Direct'].chapters['The Friction Point'],
        bgColor: '#fef2f2',
        content: "The biggest drop-off occurred during the 'Transfer to Savings' step. It felt like a loss rather than a gain. We needed to gamify the friction and make every micro-transaction feel like a small victory for the user's future self."
      },
      {
        title: "The Vision",
        template: "casestudy spread", // Full Width Image
        imageUrl: PROJECT_ASSETS['Direct'].chapters['The Vision'],
        bgColor: '#eff6ff',
        content: "We introduced 'Direct Flows'. Instead of manual transfers, users set rules based on lifestyle triggers. Coffee purchase? 50 cents goes to your 'Travel' flow automatically. It's banking on autopilot."
      }
    ]
  },

  // CASE STUDY: Assignor
  {
    id: '2',
    title: 'Assignor',
    description: 'A comprehensive telemedicine platform connecting specialists with rural patients.',
    longDescription: 'HealSync bridges the gap in rural healthcare by simplifying the diagnostic data flow between clinics and specialists.',
    coverImageUrl: PROJECT_ASSETS['Assignor'].thumbnail,
    imageUrl: PROJECT_ASSETS['Assignor'].hero,
    tags: ['SaaS', 'Accessibility', 'User Interviews'],
    role: 'Senior UX Designer',
    timeline: '6 Months',
    platform: 'Web Dashboard',
    bgColor: '#f0fdf4',
    chapters: [
      {
        title: "The Rural Gap",
        template: "casestudyright",
        imageUrl: PROJECT_ASSETS['Assignor'].chapters['The Rural Gap'],
        bgColor: '#ecfdf5',
        content: "Patients in rural areas often travel 4+ hours for a 15-minute consultation. Telemedicine exists, but current tools require high-bandwidth connections that these areas simply don't have."
      },
      {
        title: "Designing for Low-Fi",
        template: "casestudy spread",
        imageUrl: PROJECT_ASSETS['Assignor'].chapters['Designing for Low-Fi'],
        bgColor: '#f0f9ff',
        content: "We optimized the interface to prioritize critical diagnostic text and static images over video when connection drops. A 'low-bandwidth' mode was developed that uses AI to upscale medical imagery locally on the doctor's device."
      }
    ]
  },

  // CASE STUDY: Floor View
  {
    id: '3',
    title: 'Floor View',
    description: 'A curated marketplace for sustainable and ethically sourced lifestyle products.',
    longDescription: 'Ethos focuses on radical transparency and the environmental cost of shopping.',
    coverImageUrl: PROJECT_ASSETS['Floor View'].thumbnail,
    imageUrl: PROJECT_ASSETS['Floor View'].hero,
    tags: ['Marketplace', 'Product Strategy', 'UI Design'],
    role: 'Interaction Designer',
    timeline: '3 Months',
    platform: 'Web',
    bgColor: '#fff7ed',
    chapters: [
      {
        title: "Beyond the Price Tag",
        template: "casestudyleft",
        imageUrl: PROJECT_ASSETS['Floor View'].chapters['Beyond the Price Tag'],
        bgColor: '#fafaf9',
        content: "The challenge was: how do we make carbon footprint as readable as a price tag? We developed the 'Ethos Score', a unified metric that aggregates material sourcing, labor conditions, and shipping distance."
      }
    ]
  },

  // CASE STUDY: FIX.CX
  {
    id: '4',
    title: 'FIX.CX',
    description: 'A minimal workspace for writers and researchers that blocks distractions using neuro-feedback.',
    longDescription: 'FocusSpace uses a calm-tech approach to optimize cognitive load for intensive creative work.',
    coverImageUrl: PROJECT_ASSETS['FIX.CX'].thumbnail,
    imageUrl: PROJECT_ASSETS['FIX.CX'].hero,
    tags: ['Calm Tech', 'Desktop UI', 'Prototyping'],
    role: 'Lead UX Researcher',
    timeline: '5 Months',
    platform: 'Desktop App',
    bgColor: '#fafafa',
    chapters: [
      {
        title: "Adaptive Minimalism",
        template: "casestudy spread",
        imageUrl: PROJECT_ASSETS['FIX.CX'].chapters['Adaptive Minimalism'],
        bgColor: '#f5f5f5',
        content: "Using subtle signals (typing speed, cursor movement, or integrated EEG headsets), the UI fades away until only the text remains. As the user slows down, navigation elements gently reappear."
      }
    ]
  }
];