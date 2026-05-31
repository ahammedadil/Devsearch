export const defaultSkills = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    items: [
      { id: 'html-semantic', name: 'Semantic HTML5 & Accessibility (a11y)' },
      { id: 'css-layouts', name: 'CSS Layouts (Flexbox, Grid, Custom Properties)' },
      { id: 'tailwind-css', name: 'Tailwind CSS Styling & Customization' },
      { id: 'responsive-design', name: 'Responsive & Mobile-First Media Queries' },
      { id: 'js-dom', name: 'JavaScript DOM Manipulation & Event Handling' },
      { id: 'js-es6', name: 'ES6+ Features (Destructuring, Async/Await, Array Methods)' },
      { id: 'react-components', name: 'React Components, Props & State Management' },
      { id: 'react-hooks', name: 'React Hooks (useState, useEffect, custom hooks)' },
      { id: 'react-router', name: 'React Router Routing & Navigation' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    items: [
      { id: 'node-basics', name: 'Node.js Runtime & NPM Module System' },
      { id: 'express-apis', name: 'Express.js & Building RESTful APIs' },
      { id: 'databases-sql', name: 'Relational Databases (SQL & PostgreSQL basics)' },
      { id: 'databases-nosql', name: 'NoSQL Databases (MongoDB & Mongoose schemas)' },
      { id: 'auth-jwt', name: 'User Authentication (Cookies, Sessions & JWT)' }
    ]
  },
  {
    id: 'tools-devops',
    title: 'Tools & DevOps',
    items: [
      { id: 'git-basics', name: 'Git Version Control (Commiting, Branching, Merging)' },
      { id: 'github-workflow', name: 'GitHub Collaborations, Pull Requests & Issues' },
      { id: 'chrome-devtools', name: 'Debugging with Chrome DevTools' },
      { id: 'vercel-deploy', name: 'Continuous Deployment with Vercel or Netlify' },
      { id: 'typescript', name: 'TypeScript Basics & Typed Code' }
    ]
  }
];

export const jobsData = [
  {
    id: 'job-1',
    title: 'Junior Frontend Developer Intern',
    company: 'TechVibe Solutions',
    logoColor: 'from-purple-500 to-indigo-500',
    role: 'Frontend',
    type: 'Internship',
    location: 'Remote (US/Canada)',
    salary: '$25 - $35 / hour',
    posted: '2 days ago',
    description: 'We are looking for a passionate Junior Frontend Intern with strong knowledge of HTML, CSS, and basic React. You will work alongside senior developers to build client dashboards and implement responsive user interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    applyUrl: 'https://example.com/apply/frontend-intern'
  },
  {
    id: 'job-2',
    title: 'Junior Backend Engineer',
    company: 'CloudScale Systems',
    logoColor: 'from-blue-500 to-cyan-500',
    role: 'Backend',
    type: 'Full-time',
    location: 'Remote (India)',
    salary: '₹6L - ₹8L / year',
    posted: '3 days ago',
    description: 'Join our infrastructure team to design, build, and maintain server-side business logic and APIs. You will work with Node.js, Express, and PostgreSQL databases under high scalability conditions.',
    skills: ['Node.js', 'Express', 'SQL', 'Git'],
    applyUrl: 'https://example.com/apply/backend-engineer'
  },
  {
    id: 'job-3',
    title: 'Associate Fullstack Developer',
    company: 'BuildQuick Startups',
    logoColor: 'from-emerald-500 to-teal-500',
    role: 'Fullstack',
    type: 'Full-time',
    location: 'Bengaluru, India (Hybrid)',
    salary: '₹8L - ₹12L / year',
    posted: '1 week ago',
    description: 'Looking for a fullstack developer who loves building products from scratch. You will work on a SaaS dashboard using React, Tailwind CSS on the frontend, and Node/MongoDB on the backend.',
    skills: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    applyUrl: 'https://example.com/apply/fullstack-dev'
  },
  {
    id: 'job-4',
    title: 'React.js Developer (Remote)',
    company: 'PixelPerfect Agency',
    logoColor: 'from-pink-500 to-rose-500',
    role: 'Frontend',
    type: 'Full-time',
    location: 'Remote (Global)',
    salary: '$50,000 - $65,000 / year',
    posted: '5 days ago',
    description: 'We build stunning marketing sites and web apps for global brands. You must have pixel-perfect coding skills in React, Tailwind CSS, and a deep understanding of component-driven architecture.',
    skills: ['React', 'Tailwind CSS', 'JavaScript', 'Git'],
    applyUrl: 'https://example.com/apply/react-dev'
  },
  {
    id: 'job-5',
    title: 'Node.js API Intern',
    company: 'CoreLogic Data',
    logoColor: 'from-amber-500 to-orange-500',
    role: 'Backend',
    type: 'Internship',
    location: 'Remote (Europe)',
    salary: '€1,500 - €2,200 / month',
    posted: 'Yesterday',
    description: 'Learn the backend engineering ropes! Build microservices, integrate 3rd party APIs, write integration tests, and optimize data schemas. Node.js & Express knowledge is required.',
    skills: ['Node.js', 'Express', 'Git', 'MongoDB'],
    applyUrl: 'https://example.com/apply/node-intern'
  },
  {
    id: 'job-6',
    title: 'Junior Web Developer (Tailwind & JS)',
    company: 'Launchpad Media',
    logoColor: 'from-yellow-400 to-amber-500',
    role: 'Frontend',
    type: 'Internship',
    location: 'Mumbai, India (On-site)',
    salary: '₹25,000 - ₹35,000 / month',
    posted: '4 days ago',
    description: 'Launchpad Media is a dynamic digital agency. We need someone who can take Figma files and convert them to interactive, high-performance HTML/Tailwind templates with dynamic JS interactions.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    applyUrl: 'https://example.com/apply/junior-web-dev'
  },
  {
    id: 'job-7',
    title: 'Fullstack Intern (React & Express)',
    company: 'ZettaBytes Inc',
    logoColor: 'from-violet-500 to-purple-600',
    role: 'Fullstack',
    type: 'Internship',
    location: 'Remote (Global)',
    salary: '$1,200 - $1,800 / month',
    posted: '1 week ago',
    description: 'ZettaBytes is a decentralized tech firm. You will support the frontend React UI and backend Express servers to create custom interactive charts and handle data flows from endpoints.',
    skills: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    applyUrl: 'https://example.com/apply/fullstack-intern'
  },
  {
    id: 'job-8',
    title: 'Junior Database & Backend Admin',
    company: 'SecureVault Tech',
    logoColor: 'from-indigo-600 to-blue-700',
    role: 'Backend',
    type: 'Full-time',
    location: 'Delhi NCR (Hybrid)',
    salary: '₹5L - ₹7L / year',
    posted: '6 days ago',
    description: 'Help monitor database health, write complex queries, structure schemas, and manage secure user tokens. Must know SQL, Git, and Node.js backend workflows.',
    skills: ['Node.js', 'SQL', 'Git', 'Express'],
    applyUrl: 'https://example.com/apply/db-backend-admin'
  },
  {
    id: 'job-9',
    title: 'Frontend UI/UX Developer',
    company: 'DesignFirst Systems',
    logoColor: 'from-pink-500 to-purple-500',
    role: 'Frontend',
    type: 'Full-time',
    location: 'Remote (US)',
    salary: '$60,000 - $75,000 / year',
    posted: '3 days ago',
    description: 'A UI engineer position focusing heavily on CSS layout systems, responsive typography, animation transitions, and accessibility compliance. Prior Tailwind CSS portfolio requested.',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
    applyUrl: 'https://example.com/apply/frontend-uiux'
  },
  {
    id: 'job-10',
    title: 'Associate React Developer',
    company: 'FinTrack Labs',
    logoColor: 'from-sky-500 to-indigo-500',
    role: 'Frontend',
    type: 'Full-time',
    location: 'London, UK (Hybrid)',
    salary: '£35,000 - £45,000 / year',
    posted: '2 weeks ago',
    description: 'FinTrack is a fintech app. Work on critical user journeys, transaction listings, filter views, and charts using React state, React hooks, and clean components.',
    skills: ['React', 'JavaScript', 'CSS', 'Git'],
    applyUrl: 'https://example.com/apply/associate-react-dev'
  },
  {
    id: 'job-11',
    title: 'Fullstack JavaScript Developer',
    company: 'NextGen Retail',
    logoColor: 'from-teal-500 to-emerald-600',
    role: 'Fullstack',
    type: 'Full-time',
    location: 'Remote (India)',
    salary: '₹10L - ₹14L / year',
    posted: '4 days ago',
    description: 'Develop ecommerce web portals. Manage global state in React, hook up custom backend API endpoints via Node/Express, and store transaction documents in MongoDB.',
    skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    applyUrl: 'https://example.com/apply/fullstack-javascript'
  },
  {
    id: 'job-12',
    title: 'Junior Cloud & Backend Engineer',
    company: 'Apex Cloud Services',
    logoColor: 'from-cyan-500 to-blue-600',
    role: 'Backend',
    type: 'Internship',
    location: 'Remote (APAC)',
    salary: '$1,500 / month',
    posted: '1 week ago',
    description: 'Gain DevOps & backend experience. Assist in deploying server applications, managing server variables, configuring API endpoints, and writing test suites for Express applications.',
    skills: ['Node.js', 'Express', 'Git', 'SQL'],
    applyUrl: 'https://example.com/apply/cloud-backend-intern'
  }
];

export const resourcesData = [
  {
    id: 'res-1',
    title: 'FreeCodeCamp Responsive Web Design',
    topic: 'HTML',
    type: 'Course',
    url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
    difficulty: 'Beginner',
    duration: '300 hours',
    platform: 'FreeCodeCamp',
    description: 'Learn the HTML and CSS elements needed to build beautiful, responsive web pages. Covers semantic tags, forms, flexbox, grid, and CSS media queries.'
  },
  {
    id: 'res-2',
    title: 'MDN Web Docs — HTML Basics',
    topic: 'HTML',
    type: 'Docs',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
    difficulty: 'Beginner',
    duration: '2 hours',
    platform: 'MDN Web Docs',
    description: 'The definitive guide and absolute reference for web standards. Highly recommended for understanding structure, attributes, and tags.'
  },
  {
    id: 'res-3',
    title: 'CSS Grid & Flexbox Guide',
    topic: 'CSS',
    type: 'Docs',
    url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    difficulty: 'Beginner',
    duration: '1 hour',
    platform: 'CSS-Tricks',
    description: 'Super visual and comprehensive cheat sheets for CSS Flexbox and Grid. Crucial resource for understanding modern layout properties.'
  },
  {
    id: 'res-4',
    title: 'Tailwind CSS Crash Course',
    topic: 'CSS',
    type: 'Video',
    url: 'https://www.youtube.com/watch?v=U5aeM5rpaOg',
    difficulty: 'Beginner',
    duration: '1.5 hours',
    platform: 'YouTube (Traversy Media)',
    description: 'An excellent video tutorial covering utility-first CSS design, responsive tags, dark mode configuration, and core properties of Tailwind.'
  },
  {
    id: 'res-5',
    title: 'JavaScript.info — Complete JS Guide',
    topic: 'JavaScript',
    type: 'Docs',
    url: 'https://javascript.info/',
    difficulty: 'Intermediate',
    duration: '50 hours',
    platform: 'JavaScript.info',
    description: 'From the basics to advanced topics like promises, closures, objects, prototypes, and asynchronous execution. Best theoretical manual.'
  },
  {
    id: 'res-6',
    title: 'Namaste JavaScript Playlist',
    topic: 'JavaScript',
    type: 'Video',
    url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCgSeGVyZbLYUFld_',
    difficulty: 'Intermediate',
    duration: '15 hours',
    platform: 'YouTube (Akshay Saini)',
    description: 'The highly acclaimed video course covering closures, call stack, event loops, promises, engine mechanics, and scope chain in-depth.'
  },
  {
    id: 'res-7',
    title: 'React Official Documentation',
    topic: 'React',
    type: 'Docs',
    url: 'https://react.dev/',
    difficulty: 'Beginner',
    duration: '8 hours',
    platform: 'React.dev',
    description: 'The new interactive tutorial and reference manual for React. Explains components, hooks (useState, useEffect), and interactive logic perfectly.'
  },
  {
    id: 'res-8',
    title: 'React JS Course for Beginners (2024)',
    topic: 'React',
    type: 'Video',
    url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
    difficulty: 'Beginner',
    duration: '6 hours',
    platform: 'YouTube (Programming with Mosh)',
    description: 'A beginner-friendly crash course setting up Vite + React projects, building forms, creating custom styles, and mapping list components.'
  },
  {
    id: 'res-9',
    title: 'Node.js & Express.js Course',
    topic: 'Backend',
    type: 'Video',
    url: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
    difficulty: 'Intermediate',
    duration: '8 hours',
    platform: 'YouTube (freeCodeCamp)',
    description: 'Full course covering Node runtime fundamentals, file modules, HTTP servers, Express middlewares, routing, and REST endpoint construction.'
  },
  {
    id: 'res-10',
    title: 'MDN Server-Side Express Tutorial',
    topic: 'Backend',
    type: 'Docs',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
    difficulty: 'Intermediate',
    duration: '10 hours',
    platform: 'MDN Web Docs',
    description: 'Excellent text-based tutorial guiding you to build a local library management server, connect to MongoDB, and render template pages.'
  },
  {
    id: 'res-11',
    title: 'Git & GitHub Crash Course for Beginners',
    topic: 'Tools',
    type: 'Video',
    url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
    difficulty: 'Beginner',
    duration: '1 hour',
    platform: 'YouTube (Amigoscode)',
    description: 'Covers git init, git add, git commit, branching, pull requests, resolving merge conflicts, and publishing repos to GitHub.'
  },
  {
    id: 'res-12',
    title: 'SQL Bolt — Interactive SQL Lessons',
    topic: 'Backend',
    type: 'Course',
    url: 'https://sqlbolt.com/',
    difficulty: 'Beginner',
    duration: '4 hours',
    platform: 'SQLBolt',
    description: 'Interactive browser-based database lessons. Learn select queries, joins, aggregates, filtering, and schema alterations with immediate feedback.'
  },
  {
    id: 'res-13',
    title: 'TypeScript Fast Crash Course',
    topic: 'Tools',
    type: 'Video',
    url: 'https://www.youtube.com/watch?v=zQnBQ4tB3ZA',
    difficulty: 'Intermediate',
    duration: '2 hours',
    platform: 'YouTube (Net Ninja)',
    description: 'Learn typed Javascript: interfaces, types, functions, configuration files, compiling, and type inference features.'
  },
  {
    id: 'res-14',
    title: 'Complete Git Reference Documentation',
    topic: 'Tools',
    type: 'Docs',
    url: 'https://git-scm.com/doc',
    difficulty: 'Beginner',
    duration: '3 hours',
    platform: 'Git-SCM',
    description: 'The official book (Pro Git) and detailed document reference manuals for everyday commands, repository configuration, and subtrees.'
  },
  {
    id: 'res-15',
    title: 'React Router v6 Tutorial',
    topic: 'React',
    type: 'Video',
    url: 'https://www.youtube.com/watch?v=SMq1tQCoCis',
    difficulty: 'Intermediate',
    duration: '1 hour',
    platform: 'YouTube (Web Dev Simplified)',
    description: 'Excellent explanation of Client-Side routing using React Router. Learn dynamic path names, useParams, searchParams, and nested routes.'
  }
];
