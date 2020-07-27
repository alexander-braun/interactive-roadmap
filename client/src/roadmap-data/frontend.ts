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
  mainKnot?: boolean;
}

export const frontend: Category[] = [
  {
    title: 'Front-end',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [],
  },
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
    mainKnot: true,
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
    mainKnot: true,
    children: [
      {
        title: 'Learn the basics',
        type: 'element',
        id: uuidv4(),
        children: [],
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
        children: [],
      },
    ],
  },
  {
    title: 'CSS',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'Learn the basics',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Making Layouts',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Responsive design and Media Queries',
        type: 'element',
        id: uuidv4(),
        children: [
          {
            title:
              'Floats, Positioning, Display, Box Model, CSS Grid, Flex Box',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Javascript',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'Syntax and Basic Constructs',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Learn DOM Manipulation',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Learn Fetch API / Ajax (XHR)',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'ES6+ and modular Javascript',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title:
          'Understand the concepts Hoisting, Event Bubbling, Scope, Prototype, Shadow DOM, strict',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
    ],
  },
  {
    title: 'Version Control Systems',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'Repo hosting services',
        type: 'category',
        id: uuidv4(),
        children: [
          {
            title: 'GitHub',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'GitLab',
            type: 'element',
            id: uuidv4(),
            children: [],
            recommended: 'not-recommended',
          },
          {
            title: 'Bitbucket',
            type: 'element',
            id: uuidv4(),
            children: [],
            recommended: 'not-recommended',
          },
        ],
      },
      {
        title: 'Basic Usage of Git',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
    ],
  },
  {
    title: 'Web Security Knowledge',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'HTTPS',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Content Security Policy',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'CORS',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'OWASP Security Risks',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
    ],
  },
  {
    title: 'Package Managers',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'npm',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'yarn',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
    ],
  },
  {
    title: 'CSS Architecture',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'BEM',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'OOCSS',
        type: 'element',
        id: uuidv4(),
        children: [],
        recommended: 'not-recommended',
      },
      {
        title: 'SMACSS',
        type: 'element',
        id: uuidv4(),
        children: [],
        recommended: 'not-recommended',
      },
    ],
  },
  {
    title: 'CSS Preprocessors',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'Sass',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'PostCSS',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Less',
        type: 'element',
        id: uuidv4(),
        children: [],
        recommended: 'not-recommended',
      },
    ],
  },
  {
    title: 'Build Tools',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'Linters and Formatters',
        type: 'category',
        id: uuidv4(),
        children: [
          {
            title: 'Prettier',
            type: 'category',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'ESLint',
            type: 'category',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'StandardJS',
            type: 'category',
            id: uuidv4(),
            children: [],
            recommended: 'not-recommended',
          },
        ],
      },
      {
        title: 'Task Runners',
        type: 'category',
        id: uuidv4(),
        children: [
          {
            title: 'npm scripts',
            type: 'category',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Gulp',
            type: 'element',
            id: uuidv4(),
            children: [],
            recommended: 'not-recommended',
          },
        ],
      },
      {
        title: 'Module Bundlers',
        type: 'element',
        id: uuidv4(),
        children: [
          {
            title: 'Webpack',
            type: 'category',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Rollup',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Parcel',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Pick a Framework',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'React.js',
        type: 'category',
        id: uuidv4(),
        children: [
          {
            title: 'Redux',
            type: 'category',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'MobX',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
        ],
      },
      {
        title: 'Angular',
        type: 'element',
        id: uuidv4(),
        children: [
          {
            title: 'RxJS',
            type: 'category',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'NgRx',
            type: 'category',
            id: uuidv4(),
            children: [],
          },
        ],
      },
      {
        title: 'Vue.js',
        type: 'element',
        id: uuidv4(),
        children: [
          {
            title: 'VueX',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Modern CSS',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'Styled Components',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'CSS Modules',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Styled JSX',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Emotion',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Radium',
        type: 'element',
        id: uuidv4(),
        children: [],
        recommended: 'not-recommended',
      },
      {
        title: 'Glamorous',
        type: 'element',
        id: uuidv4(),
        children: [],
        recommended: 'not-recommended',
      },
    ],
  },
  {
    title: 'Web Components',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'HTML Templates',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Custom Elements',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Shadow DOM',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
    ],
  },
  {
    title: 'CSS Frameworks',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'Reactstrap',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Material UI',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Tailwind CSS',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Chakra UI',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Bootstrap',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Materialize CSS',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Bulma',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
    ],
  },
  {
    title: 'Testing your Apps',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'Jest',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'react-testing-library',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Cypress',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Enzyme',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Mocha',
        type: 'category',
        id: uuidv4(),
        children: [],
        recommended: 'not-recommended',
      },
      {
        title: 'Chai',
        type: 'element',
        id: uuidv4(),
        children: [],
        recommended: 'not-recommended',
      },
      {
        title: 'Ava',
        type: 'element',
        id: uuidv4(),
        children: [],
        recommended: 'not-recommended',
      },
      {
        title: 'Jasmine',
        type: 'element',
        id: uuidv4(),
        children: [],
        recommended: 'not-recommended',
      },
    ],
  },
  {
    title: 'Type Checkers',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'TypeScript',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Flow',
        type: 'element',
        id: uuidv4(),
        children: [],
        recommended: 'not-recommended',
      },
    ],
  },
  {
    title: 'Progressive Web Apps',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'Calculating, Measuring, improving Performance',
        type: 'category',
        id: uuidv4(),
        children: [
          {
            title: 'Storage',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Web Sockets',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Service Workers',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Location',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Notifications',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Device Orientation',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Payments',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Credentials',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
        ],
      },
      {
        title: "Web API's used in PWAs",
        type: 'category',
        id: uuidv4(),
        children: [
          {
            title: 'PRPL Pattern',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'RAIL Model',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Performance Metrics',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Using Lighthouse',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'Using DevTools',
            type: 'element',
            id: uuidv4(),
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Server Side Rendering',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'React.js',
        type: 'category',
        id: uuidv4(),
        children: [
          {
            title: 'Next.js',
            type: 'category',
            id: uuidv4(),
            children: [],
          },
          {
            title: 'After.js',
            type: 'category',
            id: uuidv4(),
            children: [],
            recommended: 'not-recommended',
          },
        ],
      },
      {
        title: 'Angular',
        type: 'element',
        id: uuidv4(),
        children: [
          {
            title: 'Universal',
            type: 'category',
            id: uuidv4(),
            children: [],
          },
        ],
      },
      {
        title: 'Vue.js',
        type: 'element',
        id: uuidv4(),
        children: [
          {
            title: 'Nuxt.js',
            type: 'category',
            id: uuidv4(),
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: 'GraphQL',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'Apollo',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Relay Modern',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
    ],
  },
  {
    title: 'Static Site Generators',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'Next.js',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'GatsbyJS',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Nuxt.js',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Vuepress',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Jekyll',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Hugo',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
    ],
  },
  {
    title: 'Mobile Applications',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'React Native',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Native Script',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Flutter',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Ionic',
        type: 'element',
        id: uuidv4(),
        children: [],
      },
    ],
  },
  {
    title: 'Desktop Applications',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [
      {
        title: 'Electron',
        type: 'category',
        id: uuidv4(),
        children: [],
      },
      {
        title: 'Carlo',
        type: 'element',
        id: uuidv4(),
        children: [],
        recommended: 'not-recommended',
      },
      {
        title: 'Proton Native',
        type: 'element',
        id: uuidv4(),
        children: [],
        recommended: 'not-recommended',
      },
    ],
  },
  {
    title: 'Web Assembly',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [],
  },
  {
    title: 'Keep Learning',
    type: 'category',
    id: uuidv4(),
    mainKnot: true,
    children: [],
  },
];
