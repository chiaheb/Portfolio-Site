
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FlowPay FinTech',
    category: 'Fintech / Mobile App',
    description: 'Reimagining the digital wallet experience for Gen-Z users with focus on micro-investments.',
    longDescription: 'FlowPay was born from the insight that Gen-Z wants to invest but feels overwhelmed by traditional banking UI. We simplified the mental model of money into three flows: Spend, Save, and Grow.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    tags: ['UX Research', 'Mobile Design', 'Visual Identity'],
    role: 'Lead Product Designer',
    timeline: '4 Months'
  },
  {
    id: '2',
    title: 'HealSync',
    category: 'Healthcare / Web Dashboard',
    description: 'A comprehensive telemedicine platform connecting specialists with rural patients.',
    longDescription: 'HealSync bridges the gap in rural healthcare. The challenge was designing a low-bandwidth video conferencing tool that didn\'t compromise on diagnostic quality for doctors.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    tags: ['SaaS', 'Accessibility', 'User Interviews'],
    role: 'Senior UX Designer',
    timeline: '6 Months'
  },
  {
    id: '3',
    title: 'Ethos Marketplace',
    category: 'E-commerce / Web',
    description: 'A curated marketplace for sustainable and ethically sourced lifestyle products.',
    longDescription: 'Ethos focuses on radical transparency. We designed a "Trust Score" system that visualizes the environmental impact of every item in the cart in real-time.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    tags: ['Marketplace', 'Product Strategy', 'UI Design'],
    role: 'Interaction Designer',
    timeline: '3 Months'
  },
  {
    id: '4',
    title: 'FocusSpace',
    category: 'Productivity / Desktop',
    description: 'A minimal workspace for writers and researchers that blocks distractions using neuro-feedback.',
    longDescription: 'FocusSpace uses a calm-tech approach. The UI adapts based on the user\'s cognitive load, stripping away features as focus deepens to prevent over-stimulation.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    tags: ['Calm Tech', 'Desktop UI', 'Prototyping'],
    role: 'Lead UX Researcher',
    timeline: '5 Months'
  }
];
