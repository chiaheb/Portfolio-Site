
import { Project } from './types';

/**
 * 🖼️ PROJECT ASSETS REGISTRY
 * Plug in your external image links here. 
 * Organised by [Project Name] -> [Asset Type/Section Title]
 */
export const PROJECT_ASSETS = {
  'Direct': {
    thumbnail: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/Directhero-narrow-rev3.png',
    hero: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/Directhero-wide-rev3.png',
    banner: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/Directbanner-01.png',
    chapters: {
      'The calm before the scale': 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/directscaletest-rev4.png',
      'The bottleneck of success (The challenge)': 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/directbottletest-rev2.png',
      'The Vision': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&get=80&w=2000',
      'Carousel 1': 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/directdiscovery-1-rev1.png',
      'Carousel 2': 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/directdiscovery-2-rev2.png',
      'Carousel 3': 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/directdiscovery-3-rev1.png',
    }
  },
  'Assignor': {
    thumbnail: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/portfolio-cover-placeholder-rev2.png',
    hero: 'https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?auto=format&fit=crop&q=80&w=2000',
    banner: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000',
    chapters: {
      'The Rural Gap': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
      'Designing for Low-Fi': 'https://images.unsplash.com/photo-1504868584819-f8e90526ef49?auto=format&fit=crop&q=80&w=2000',
    }
  },
  'Floor View': {
    thumbnail: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/portfolio-cover-placeholder-rev2.png',
    hero: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
    banner: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=2000',
    chapters: {
      'Beyond the Price Tag': 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200',
    }
  },
  'FIX.CX': {
    thumbnail: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/portfolio-cover-placeholder-rev2.png',
    hero: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000',
    banner: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&get=80&w=2000',
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
    description: 'Unlocking scalability for procurement: The self-serve transformation',
    longDescription: 'Direct is a B2B procurement product, helping businesses purchase from overseas suppliers.\n\nWe worked to improve bottlenecks in the existing white glove approach by introducing a self-serve experience. This allowed the product to continue scaling without compromising on the quality of the service.',
    coverImageUrl: PROJECT_ASSETS['Direct'].thumbnail,
    imageUrl: PROJECT_ASSETS['Direct'].hero,
    bannerImageUrl: PROJECT_ASSETS['Direct'].banner,
    tags: ['UX Research', 'Mobile Design', 'Visual Identity'],
    role: 'Lead Product Designer',
    timeline: '4 Months',
    platform: 'Mobile, Web',
    bgImageUrl: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/background-move-test.webm', 
    chapters: [
      {
        title: "The bottleneck of success\n(The challenge)",
        template: "casestudyleft",
        imageUrl: PROJECT_ASSETS['Direct'].chapters['The bottleneck of success (The challenge)'],
        bgColor: '#ffffff', 
        content: "Our initial white glove procurement service was a **necessary success**. We built strong customer relationships and proved market demand.\n\nHowever, as our customer base and transaction volume scaled rapidly, the manual nature of the \"white glove\" process became a massive resource drain and a choke point for growth. Our service was excellent, but it was **not scalable**."
      },
      {
        title: "A pivotal shift in strategy",
        template: "casestudyquote",
        bgImageUrl: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/directspread-1-rev1.png', 
        content: "To function at scale, we needed to move from being our customers' hands to being their platform."
      },
      {
        title: "Value and dissatisfaction\n(The insight)",
        template: "casestudyscroll",
        content: "To transition our customers to a self-serve platform without diminishing the perceived value of our service, we needed to understand which tasks the customers valued and, crucially, which tasks they were **secretly dissatisfied with but relied on us for**.",
        carouselItems: [
          {
            imageUrl: PROJECT_ASSETS['Direct'].chapters['Carousel 1'],
            title: "Mapping our service",
            caption: "We created a service blueprint of the tasks in our white-glove service to know what customers would soon have to do for themselves."
          },
          {
            imageUrl: PROJECT_ASSETS['Direct'].chapters['Carousel 2'],
            title: "Knowing our customers",
            caption: "Using a Jobs-To-Be-Done (JTBD) format, we discovered our customers' desired outcomes with the service."
          },
          {
            imageUrl: PROJECT_ASSETS['Direct'].chapters['Carousel 3'],
            title: "Prioritizing key areas",
            caption: "We had our customers rank their desired outcomes to identify suitable candidates for the initial self-serve features."
          }
        ]
      },
      {
        title: "Designing for autonomy,<br/>not abandonment\n(The solution)",
        template: "casestudy spread",
        content: "We introduced 'Direct Flows'. Instead of manual transfers, users set rules based on lifestyle triggers. Coffee purchase? 50 cents goes to your 'Travel' flow automatically. It's banking on autopilot.",
        spreadItems: [
          {
            imageUrl: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/direct-wireframe-img1-rev1.png',
            bgImageUrl: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/direct-wireframe-bg1-rev2.webm'
          },
          {
            imageUrl: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/direct-wireframe-img2-rev1.png',
            bgImageUrl: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/direct-wireframe-bg2-rev2.webm'
          },
          {
            imageUrl: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/direct-wireframe-img3-rev1.png',
            bgImageUrl: 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/direct-wireframe-bg3-rev1.webm'
          }
        ]
      }
    ]
  },

  // CASE STUDY: Assignor
  {
    id: '2',
    title: 'Assignor',
    description: "Coming soon - work in progress",
    longDescription: 'HealSync bridges the gap in rural healthcare by simplifying the diagnostic data flow between clinics and specialists.',
    coverImageUrl: PROJECT_ASSETS['Assignor'].thumbnail,
    imageUrl: PROJECT_ASSETS['Assignor'].hero,
    bannerImageUrl: PROJECT_ASSETS['Assignor'].banner,
    tags: ['SaaS', 'Accessibility', 'User Interviews'],
    role: 'Senior UX Designer',
    timeline: '6 Months',
    platform: 'Web Dashboard',
    bgImageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=40&w=1500', 
    chapters: [
      {
        title: "The Rural Gap",
        template: "casestudyright",
        imageUrl: PROJECT_ASSETS['Assignor'].chapters['The Rural Gap'],
        bgImageUrl: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=40&w=1200',
        content: "Patients in rural areas often travel 4+ hours for a 15-minute consultation. Telemedicine exists, but current tools require high-bandwidth connections that these areas simply don't have."
      },
      {
        title: "Designing for Low-Fi",
        template: "casestudy spread",
        content: "We optimized the interface to prioritize critical diagnostic text and static images over video when connection drops. A 'low-bandwidth' mode was developed that uses AI to upscale medical imagery locally on the doctor's device.",
        spreadItems: [
          {
            imageUrl: PROJECT_ASSETS['Assignor'].chapters['Designing for Low-Fi'],
            bgImageUrl: 'https://images.unsplash.com/photo-1451187534963-11d967f98ad4?auto=format&fit=crop&q=40&w=1500'
          },
          {
            imageUrl: PROJECT_ASSETS['Assignor'].chapters['The Rural Gap'],
            bgImageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200'
          },
          {
            imageUrl: PROJECT_ASSETS['Assignor'].hero,
            bgImageUrl: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=40&w=1500'
          }
        ]
      }
    ]
  },

  // CASE STUDY: Floor View
  {
    id: '3',
    title: 'Floor View',
    description: "Coming soon - work in progress",
    longDescription: 'Ethos focuses on radical transparency and the environmental cost of shopping.',
    coverImageUrl: PROJECT_ASSETS['Floor View'].thumbnail,
    imageUrl: PROJECT_ASSETS['Floor View'].hero,
    bannerImageUrl: PROJECT_ASSETS['Floor View'].banner,
    tags: ['Marketplace', 'Product Strategy', 'UI Design'],
    role: 'Interaction Designer',
    timeline: '3 Months',
    platform: 'Web',
    bgImageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=40&w=1500', 
    chapters: [
      {
        title: "Beyond the Price Tag",
        template: "casestudyleft",
        imageUrl: PROJECT_ASSETS['Floor View'].chapters['Beyond the Price Tag'],
        bgImageUrl: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=40&w=1200', 
        content: "The challenge was: how do we make carbon footprint as readable as a price tag? We developed the 'Ethos Score', a unified metric that aggregates material sourcing, labor conditions, and shipping distance."
      }
    ]
  },

  // CASE STUDY: FIX.CX
  {
    id: '4',
    title: 'FIX.CX',
    description: "Coming soon - work in progress",
    longDescription: 'FocusSpace uses a calm-tech approach to optimize cognitive load for intensive creative work.',
    coverImageUrl: PROJECT_ASSETS['FIX.CX'].thumbnail,
    imageUrl: PROJECT_ASSETS['FIX.CX'].hero,
    bannerImageUrl: PROJECT_ASSETS['FIX.CX'].banner,
    tags: ['Calm Tech', 'Desktop UI', 'Prototyping'],
    role: 'Lead UX Researcher',
    timeline: '5 Months',
    platform: 'Desktop App',
    bgImageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=40&w=1500', 
    chapters: [
      {
        title: "Adaptive Minimalism",
        template: "casestudy spread",
        content: "Using subtle signals (typing speed, cursor movement, or integrated EEG headsets), the UI fades away until only the text remains. As the user slows down, navigation elements gently reappear.",
        spreadItems: [
           {
            imageUrl: PROJECT_ASSETS['FIX.CX'].chapters['Adaptive Minimalism'],
            bgImageUrl: 'https://images.unsplash.com/photo-1483546416299-130026b8b292?auto=format&fit=crop&q=40&w=1500'
           },
           {
             imageUrl: PROJECT_ASSETS['FIX.CX'].hero,
             bgImageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=40&w=1500'
           },
           {
             imageUrl: PROJECT_ASSETS['FIX.CX'].thumbnail,
             bgImageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000'
           }
        ]
      }
    ]
  }
];