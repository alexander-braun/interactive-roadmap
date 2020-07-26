import { v4 as uuidv4 } from 'uuid';
/*
export const frontend = [
  {
    title: 'Internet',
    finished: false,
    id: uuidv4(),
    type: 'category',
    importance: 10,
    technologiesTags: [],
    goalDate: '20.01.2022',
    comments: ['this is hard'],
    resources: ['http://www.youtube.com'],
    order: true,
    recommended: 'recommended',
    children: [
      {
        title: 'How does the internet work?',
        finished: false,
        id: uuidv4(),
        type: 'element',
        importance: 5,
        technologiesTags: [],
        goalDate: '20.01.2022',
        comments: ['this is hard'],
        resources: ['http://www.youtube.com'],
        order: true,
        recommended: 'option' | 'recommended' | 'not-recommended',
        children: [],
      },
    ],
  },
];
*/

export interface Category {
  title: string;
  finished?: boolean;
  id?: string;
  type: 'category' | 'element';
  importance?: number;
  technologiesTags?: string[];
  goalDate?: string;
  comments?: string[];
  resources?: string[];
  order?: boolean;
  recommended?: 'option' | 'recommended' | 'not-recommended';
  children: Category[] | [];
}

export const frontend: Category[] = [
  {
    title: 'Internet',
    type: 'category',
    finished: false,
    id: uuidv4(),
    importance: 10,
    technologiesTags: [],
    goalDate: '20.01.2022',
    comments: ['this is hard'],
    resources: ['http://www.youtube.com'],
    order: true,
    recommended: 'recommended',
    children: [
      {
        title: 'How does the internet work?',
        type: 'element',
        children: [],
      },
      {
        title: 'What is Domain Name?',
        type: 'element',
        children: [],
      },
      {
        title: 'What is hosting?',
        type: 'element',
        children: [],
      },
      {
        title: 'DNS and how it works?',
        type: 'element',
        children: [],
      },
      {
        title: 'What is HTTP?',
        type: 'element',
        children: [],
      },
      {
        title: 'Browsers and how they work?',
        type: 'element',
        children: [],
      },
    ],
  },
  {
    title: 'HTML',
    type: 'category',
    children: [
      {
        title: 'Learn the basics',
        type: 'element',
        children: [
          {
            title: 'To the Side 1',
            type: 'element',
            children: [],
          },
        ],
      },
      {
        title: 'Writing Semantic HTML',
        type: 'element',
        children: [],
      },
      {
        title: 'Forms and Validations',
        type: 'element',
        children: [],
      },
      {
        title: 'Conventions and Best Practices',
        type: 'element',
        children: [],
      },
      {
        title: 'Accessibility',
        type: 'element',
        children: [],
      },
      {
        title: 'SEO Basics',
        type: 'element',
        children: [
          {
            title: 'To the Side 2',
            type: 'element',
            children: [],
          },
        ],
      },
    ],
  },
];
