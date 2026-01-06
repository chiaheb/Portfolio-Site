
import { Project } from './types';

/**
 * PROJECT CONFIGURATION
 * To update images, replace 'coverImageUrl' (for the grid card) 
 * or 'imageUrl' (for the detailed modal hero) with your own URLs.
 */
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Direct',
    category: 'Fintech / Mobile App',
    description: 'Reimagining the digital wallet experience for Gen-Z users with focus on micro-investments.',
    longDescription: 'FlowPay was born from the insight that Gen-Z wants to invest but feels overwhelmed by traditional banking UI. We simplified the mental model of money into three flows: Spend, Save, and Grow.',
    coverImageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-02e4d509d3ef?auto=format&fit=crop&q=80&w=2000',
    tags: ['UX Research', 'Mobile Design', 'Visual Identity'],
    role: 'Lead Product Designer',
    timeline: '4 Months'
  },
  {
    id: '2',
    title: 'Assignor',
    category: 'Healthcare / Web Dashboard',
    description: 'A comprehensive telemedicine platform connecting specialists with rural patients.',
    longDescription: 'HealSync bridges the gap in rural healthcare. The challenge was designing a low-bandwidth video conferencing tool that didn\'t compromise on diagnostic quality for doctors.',
    coverImageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    imageUrl: 'https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?auto=format&fit=crop&q=80&w=2000',
    tags: ['SaaS', 'Accessibility', 'User Interviews'],
    role: 'Senior UX Designer',
    timeline: '6 Months'
  },
  {
    id: '3',
    title: 'Floor View',
    category: 'E-commerce / Web',
    description: 'A curated marketplace for sustainable and ethically sourced lifestyle products.',
    longDescription: 'Ethos focuses on radical transparency. We designed a "Trust Score" system that visualizes the environmental impact of every item in the cart in real-time.',
    coverImageUrl: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=1200',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
    tags: ['Marketplace', 'Product Strategy', 'UI Design'],
    role: 'Interaction Designer',
    timeline: '3 Months'
  },
  {
    id: '4',
    title: 'FIX.CX',
    category: 'Productivity / Desktop',
    description: 'A minimal workspace for writers and researchers that blocks distractions using neuro-feedback.',
    longDescription: 'FocusSpace uses a calm-tech approach. The UI adapts based on the user\'s cognitive load, stripping away features as focus deepens to prevent over-stimulation.',
    coverImageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000',
    tags: ['Calm Tech', 'Desktop UI', 'Prototyping'],
    role: 'Lead UX Researcher',
    timeline: '5 Months'
  }
];
