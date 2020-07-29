import { v4 as uuidv4 } from 'uuid';

export interface Category {
  title: string;
  finished?: boolean;
  id: string;
  importance?: number;
  goalDate?: string;
  comments: string[];
  resources?: string[];
  recommended?:
    | 'option'
    | 'recommended'
    | 'not-recommended'
    | 'not-strict'
    | 'not-recommended-option'
    | 'not-recommended-none'
    | 'none';
  children: Category[] | [];
  mainKnot?: boolean;
}

export const frontend: Category[] = [
  {
    title: 'Front-end',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [],
  },
  {
    title: 'Internet',
    finished: false,
    id: uuidv4(),
    importance: 10,
    goalDate: '20.01.2022',
    comments: ['this is hard'],
    resources: ['http://www.youtube.com'],
    mainKnot: true,
    children: [
      {
        title: 'How does the internet work?',
        children: [],
        id: uuidv4(),
        finished: true,
        comments: [],
      },
      {
        title: 'What is Domain Name?',
        children: [],
        comments: ['Redo this', 'whats going on here', 'this is a comment'],
        id: uuidv4(),
        finished: false,
      },
      {
        title: 'What is hosting?',
        children: [],
        id: uuidv4(),
        finished: false,
        comments: [],
      },
      {
        title: 'DNS and how it works?',
        children: [],
        id: uuidv4(),
        finished: false,
        comments: [],
      },
      {
        title: 'What is HTTP?',
        children: [],
        id: uuidv4(),
        finished: false,
        comments: [],
      },
      {
        title: 'Browsers and how they work?',
        children: [],
        id: uuidv4(),
        finished: false,
        comments: [],
      },
    ],
  },
  {
    title: 'HTML',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [
      {
        title: 'Learn the basics',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
      },
      {
        title: 'Writing Semantic HTML',
        id: uuidv4(),
        recommended: 'not-strict',
        children: [],
        finished: false,
        comments: [],
      },
      {
        title: 'Forms and Validations',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
      },
      {
        title: 'Conventions and Best Practices',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
      },
      {
        title: 'Accessibility',
        id: uuidv4(),
        children: [],
        recommended: 'not-strict',
        finished: false,
        comments: [],
      },
      {
        title: 'SEO Basics',
        id: uuidv4(),
        children: [],
        finished: false,
        recommended: 'not-strict',
        comments: [],
      },
    ],
  },
  {
    title: 'CSS',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [
      {
        title: 'Learn the basics',
        id: uuidv4(),
        children: [],
        comments: [],
      },
      {
        title: 'Making Layouts',
        id: uuidv4(),
        finished: false,
        children: [],
        comments: [],
      },
      {
        title: 'Responsive design and Media Queries',
        id: uuidv4(),
        finished: false,
        comments: [],
        children: [
          {
            title: 'Floats',

            id: uuidv4(),
            finished: false,
            children: [],
            comments: [],
          },
          {
            title: 'Positioning',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Display',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Box Model',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'CSS Grid',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Flex Box',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Javascript',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [
      {
        title: 'Syntax and Basic Constructs',
        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Learn DOM Manipulation',
        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Learn Fetch API / Ajax (XHR)',
        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'ES6+ and modular Javascript',
        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Understand these concepts',
        finished: false,
        id: uuidv4(),
        comments: [],
        children: [
          {
            title: 'Hoisting',

            id: uuidv4(),
            finished: false,
            children: [],
            comments: [],
          },
          {
            title: 'Event Bubbling',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Scope',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Prototype',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Shadow DOM',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'strict',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Version Control Systems',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [
      {
        title: 'Repo hosting services',

        id: uuidv4(),
        recommended: 'none',
        finished: false,
        comments: [],
        children: [
          {
            title: 'GitHub',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'GitLab',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'not-recommended-option',
          },
          {
            title: 'Bitbucket',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'not-recommended-option',
          },
        ],
      },
      {
        title: 'Basic Usage of Git',

        id: uuidv4(),
        finished: false,
        children: [],
        comments: [],
      },
    ],
  },
  {
    title: 'Web Security Knowledge',
    id: uuidv4(),
    mainKnot: true,
    recommended: 'not-strict',
    finished: false,
    comments: [],
    children: [
      {
        title: 'HTTPS',
        id: uuidv4(),
        children: [],
        comments: [],
        recommended: 'not-strict',
      },
      {
        title: 'Content Security Policy',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-strict',
      },
      {
        title: 'CORS',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-strict',
      },
      {
        title: 'OWASP Security Risks',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-strict',
      },
    ],
  },
  {
    title: 'Package Managers',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [
      {
        title: 'npm',
        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'yarn',
        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
    ],
  },
  {
    title: 'CSS Architecture',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [
      {
        title: 'BEM',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-strict',
      },
      {
        title: 'OOCSS',
        id: uuidv4(),
        children: [],
        comments: [],
        finished: false,
        recommended: 'not-recommended-none',
      },
      {
        title: 'SMACSS',
        id: uuidv4(),
        finished: false,
        children: [],
        comments: [],
        recommended: 'not-recommended-none',
      },
    ],
  },
  {
    title: 'CSS Preprocessors',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [
      {
        title: 'Sass',

        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-strict',
      },
      {
        title: 'PostCSS',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-strict',
      },
      {
        title: 'Less',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-recommended-none',
      },
    ],
  },
  {
    title: 'Build Tools',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [
      {
        title: 'Linters and Formatters',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [
          {
            title: 'Prettier',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'not-strict',
          },
          {
            title: 'ESLint',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'not-strict',
          },
          {
            title: 'StandardJS',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'not-recommended-none',
          },
        ],
      },
      {
        title: 'Task Runners',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [
          {
            title: 'npm scripts',

            id: uuidv4(),
            finished: false,
            children: [],
            comments: [],
          },
          {
            title: 'Gulp',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'not-recommended-none',
          },
        ],
      },
      {
        title: 'Module Bundlers',
        id: uuidv4(),
        finished: false,
        comments: [],
        children: [
          {
            title: 'Webpack',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Rollup',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'option',
          },
          {
            title: 'Parcel',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'option',
          },
        ],
      },
    ],
  },
  {
    title: 'Pick a Framework',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [
      {
        title: 'React.js',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [
          {
            title: 'Redux',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'MobX',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'option',
          },
        ],
      },
      {
        title: 'Angular',
        id: uuidv4(),
        recommended: 'option',
        finished: false,
        comments: [],
        children: [
          {
            title: 'RxJS',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'option',
          },
          {
            title: 'NgRx',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'option',
          },
        ],
      },
      {
        title: 'Vue.js',
        id: uuidv4(),
        recommended: 'option',
        finished: false,
        comments: [],
        children: [
          {
            title: 'VueX',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'option',
          },
        ],
      },
    ],
  },
  {
    title: 'Modern CSS',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [
      {
        title: 'Styled Components',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'CSS Modules',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Styled JSX',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'option',
      },
      {
        title: 'Emotion',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'option',
      },
      {
        title: 'Radium',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-recommended-none',
      },
      {
        title: 'Glamorous',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-recommended-none',
      },
    ],
  },
  {
    title: 'Web Components',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    recommended: 'not-strict',
    children: [
      {
        title: 'HTML Templates',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-strict',
      },
      {
        title: 'Custom Elements',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-strict',
      },
      {
        title: 'Shadow DOM',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-strict',
      },
    ],
  },
  {
    title: 'CSS Frameworks',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [
      {
        title: 'Reactstrap',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Material UI',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Tailwind CSS',

        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'option',
      },
      {
        title: 'Chakra UI',

        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'option',
      },
      {
        title: 'Bootstrap',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Materialize CSS',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'option',
      },
      {
        title: 'Bulma',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'option',
      },
    ],
  },
  {
    title: 'Testing your Apps',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    comments: [],
    children: [
      {
        title: 'Jest',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'react-testing-library',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Cypress',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Enzyme',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Mocha',

        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-recommended-none',
      },
      {
        title: 'Chai',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-recommended-none',
      },
      {
        title: 'Ava',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-recommended-none',
      },
      {
        title: 'Jasmine',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-recommended-none',
      },
    ],
  },
  {
    title: 'Type Checkers',
    id: uuidv4(),
    mainKnot: true,
    recommended: 'not-strict',
    finished: false,
    comments: [],
    children: [
      {
        title: 'TypeScript',

        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-strict',
      },
      {
        title: 'Flow',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-recommended-none',
      },
    ],
  },
  {
    title: 'Progressive Web Apps',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    recommended: 'not-strict',
    comments: [],
    children: [
      {
        title: 'Calculating, Measuring, improving Performance',

        id: uuidv4(),
        recommended: 'not-strict',
        finished: false,
        comments: [],
        children: [
          {
            title: 'Storage',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Web Sockets',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Service Workers',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Location',

            id: uuidv4(),
            comments: [],
            finished: false,
            children: [],
          },
          {
            title: 'Notifications',

            id: uuidv4(),
            comments: [],
            finished: false,
            children: [],
          },
          {
            title: 'Device Orientation',

            id: uuidv4(),
            comments: [],
            finished: false,
            children: [],
          },
          {
            title: 'Payments',

            id: uuidv4(),
            finished: false,
            children: [],
            comments: [],
          },
          {
            title: 'Credentials',

            id: uuidv4(),
            finished: false,
            children: [],
            comments: [],
          },
        ],
      },
      {
        title: "Web API's used in PWAs",

        id: uuidv4(),
        recommended: 'not-strict',
        finished: false,
        comments: [],
        children: [
          {
            title: 'PRPL Pattern',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'RAIL Model',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Performance Metrics',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Using Lighthouse',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'Using DevTools',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Server Side Rendering',
    id: uuidv4(),
    mainKnot: true,
    recommended: 'not-strict',
    finished: false,
    comments: [],
    children: [
      {
        title: 'React.js',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [
          {
            title: 'Next.js',

            id: uuidv4(),
            finished: false,
            comments: [],
            children: [],
          },
          {
            title: 'After.js',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'not-recommended-none',
          },
        ],
      },
      {
        title: 'Angular',
        id: uuidv4(),
        recommended: 'option',
        finished: false,
        comments: [],
        children: [
          {
            title: 'Universal',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'option',
          },
        ],
      },
      {
        title: 'Vue.js',
        id: uuidv4(),
        recommended: 'option',
        finished: false,
        comments: [],
        children: [
          {
            title: 'Nuxt.js',

            id: uuidv4(),
            children: [],
            finished: false,
            comments: [],
            recommended: 'option',
          },
        ],
      },
    ],
  },
  {
    title: 'GraphQL',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    recommended: 'not-strict',
    comments: [],
    children: [
      {
        title: 'Apollo',

        id: uuidv4(),
        finished: false,
        children: [],
        comments: [],
      },
      {
        title: 'Relay Modern',

        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'option',
      },
    ],
  },
  {
    title: 'Static Site Generators',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    recommended: 'not-strict',
    comments: [],
    children: [
      {
        title: 'Next.js',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'GatsbyJS',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Nuxt.js',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'option',
      },
      {
        title: 'Vuepress',
        id: uuidv4(),
        children: [],
        recommended: 'option',
        comments: [],
        finished: false,
      },
      {
        title: 'Jekyll',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'option',
      },
      {
        title: 'Hugo',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'option',
      },
    ],
  },
  {
    title: 'Mobile Applications',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    recommended: 'not-strict',
    comments: [],
    children: [
      {
        title: 'React Native',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Native Script',
        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Flutter',
        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Ionic',
        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
    ],
  },
  {
    title: 'Desktop Applications',
    id: uuidv4(),
    mainKnot: true,
    finished: false,
    recommended: 'not-strict',
    comments: [],
    children: [
      {
        title: 'Electron',

        id: uuidv4(),
        finished: false,
        comments: [],
        children: [],
      },
      {
        title: 'Carlo',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-recommended-none',
      },
      {
        title: 'Proton Native',
        id: uuidv4(),
        children: [],
        finished: false,
        comments: [],
        recommended: 'not-recommended-none',
      },
    ],
  },
  {
    title: 'Web Assembly',
    id: uuidv4(),
    mainKnot: true,
    children: [],
    finished: false,
    comments: [],
    recommended: 'not-strict',
  },
  {
    title: 'Keep Learning',
    id: uuidv4(),
    mainKnot: true,
    children: [],
    comments: [],
    finished: false,
  },
];
