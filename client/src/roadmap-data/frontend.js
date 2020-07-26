//import { v4 as uuidv4 } from 'uuid';
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

export const frontend = [
  {
    title: 'Internet',
    type: 'category',
    children: [
      {
        title: 'How does the internet work?',
        type: 'element',
      },
      {
        title: 'What is Domain Name?',
        type: 'element',
      },
      {
        title: 'What is hosting?',
        type: 'element',
      },
      {
        title: 'DNS and how it works?',
        type: 'element',
      },
      {
        title: 'What is HTTP?',
        type: 'element',
      },
      {
        title: 'Browsers and how they work?',
        type: 'element',
      },
    ],
  },
  {
    title: 'HTML stuff',
    type: 'category',
    children: [
      {
        title: 'Learn the basics',
        type: 'element',
      },
      {
        title: 'Writing Semantic HTML',
        type: 'element',
      },
      {
        title: 'Forms and Validations',
        type: 'element',
      },
      {
        title: 'Conventions and Best Practices',
        type: 'element',
      },
      {
        title: 'Accessibility',
        type: 'element',
      },
      {
        title: 'SEO Basics',
        type: 'element',
      },
    ],
  },
];
