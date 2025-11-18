// lib/projects.js
export interface Project {
  slug: string;
  title: string;
  role: string;
  timeframe: string;
  summary: string;
  problem: string;
  solution: string;
  contributions: string[];
  tags: string[];
  tools: string[];
  coverImage: string;
}

export const projects = [
  {
    slug: 'pantrypal',
    title: 'PantryPal',
    role: 'UX/UI Design · Front-End Development',
    timeframe: '2025 · Student Project',
    summary:
      'A mobile app that helps users track ingredients and reduce food waste using smart reminders and AI-powered recognition.',
    problem:
      'Many students and young adults let food expire because they forget what is in their fridge or how to use it.',
    solution:
      'I designed and built a mobile UI with clear inventory views, expiry alerts, and recipe suggestions mapped to what users already have.',
    contributions: [
      'Led UX research: interviews, personas, user journeys',
      'Created UX/UI mockups and interactive prototypes in Figma',
      'Implemented Flutter front-end and later migrated UI to React',
      'Collaborated with backend developer (Scott) on API and AI integration'
    ],
    tags: ['Mobile App', 'UX Research', 'UI Design', 'Front-End', 'Sustainability'],
    tools: ['Figma', 'Flutter', 'React', 'Firebase'],
    coverImage: '/images/pantrypal-cover.png' // add later
  },
  {
    slug: 'haven',
    title: 'Haven – Safe Spaces Finder',
    role: 'UX/UI Design · Product Thinking',
    timeframe: '2025 · Concept/MVP',
    summary:
      'A location-based app that helps users find psychologically safe, inclusive venues based on community reviews.',
    problem:
      'Neurodivergent and marginalised users often feel unsafe or overstimulated in public venues and lack reliable information beforehand.',
    solution:
      'I designed a map-based experience with filters for sensory environment, staff attitude, and crowd level, grounded in principles from psychology.',
    contributions: [
      'Defined problem space and value proposition',
      'Designed user flows and mid-to-hi-fi prototypes',
      'Planned data model and ratings system grounded in psych constructs',
      'Worked on UX writing and inclusive microcopy'
    ],
    tags: ['UX Design', 'Inclusive Design', 'Location-Based', 'Concept'],
    tools: ['Figma', 'Flutter', 'Firebase'],
    coverImage: '/images/haven-cover.png'
  },
  {
    slug: 'mqi-notion-chatbot',
    title: 'MQI Notion AI Chatbot',
    role: 'UX/UI Design · Product Design · Documentation',
    timeframe: '2025 · Web App',
    summary:
      'An AI-powered interface that lets incubator staff and founders query internal Notion documentation conversationally.',
    problem:
      'Staff and founders struggled to find key information buried in Notion pages, wasting time and duplicating work.',
    solution:
      'I designed a clean chat interface embedded in Notion, with clear results, sources, and follow-up questions.',
    contributions: [
      'Mapped information architecture and user journeys',
      'Designed the chat UI and results layout',
      'Created functional requirements and documentation',
      'Collaborated with backend dev on API and embeddings logic'
    ],
    tags: ['Web App', 'AI', 'UX Design', 'Documentation'],
    tools: ['Figma', 'Notion', 'React'],
    coverImage: '/images/mqi-chatbot-cover.png'
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
