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
  id: string;
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
        id: uuidv4(),
      },
      {
        title: 'What is Domain Name?',
        type: 'element',
        children: [],
        id: uuidv4(),
      },
      {
        title: 'What is hosting?',
        type: 'element',
        children: [],
        id: uuidv4(),
      },
      {
        title: 'DNS and how it works?',
        type: 'element',
        children: [],
        id: uuidv4(),
      },
      {
        title: 'What is HTTP?',
        type: 'element',
        children: [],
        id: uuidv4(),
      },
      {
        title: 'Browsers and how they work?',
        type: 'element',
        children: [],
        id: uuidv4(),
      },
    ],
  },
  {
    title: 'HTML',
    type: 'category',
    id: uuidv4(),
    children: [
      {
        title: 'Learn the basics',
        type: 'element',
        id: uuidv4(),
        children: [
          {
            title: 'To the Side 1',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
        ],
      },
      {
        title: 'Writing Semantic HTML',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Forms and Validations',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Conventions and Best Practices',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Accessibility',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'SEO Basics',
        type: 'element',
        id: uuidv4(),
        children: [
          {
            title: 'To the Side 2',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: 'HTML3',
    type: 'category',
    id: uuidv4(),
    children: [
      {
        title: 'SEO Basics!',
        type: 'element',
        id: uuidv4(),
        children: [
          {
            title: 'To the Side 2',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
        ],
      },
    ],
  },
];
