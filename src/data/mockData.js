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

export const roadmapsData = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: '🎨',
    color: 'from-violet-500 to-purple-600',
    bgLight: 'bg-violet-50 dark:bg-violet-950/20',
    borderColor: 'border-violet-200 dark:border-violet-800/40',
    badgeColor: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300',
    description: 'Master the art of building beautiful, interactive web interfaces that users love.',
    duration: '6–8 months',
    difficulty: 'Beginner Friendly',
    steps: [
      { phase: 1, title: 'HTML5 Fundamentals', desc: 'Semantic tags, forms, tables, accessibility attributes, and document structure.' },
      { phase: 2, title: 'CSS & Styling', desc: 'Box model, Flexbox, Grid, animations, custom properties, and responsive media queries.' },
      { phase: 3, title: 'JavaScript Core', desc: 'DOM manipulation, events, ES6+, fetch API, async/await, and error handling.' },
      { phase: 4, title: 'React.js', desc: 'Components, hooks (useState, useEffect), Context API, React Router, and state patterns.' },
      { phase: 5, title: 'TypeScript', desc: 'Static typing, interfaces, generics, and integrating TS into React projects.' },
      { phase: 6, title: 'Build & Deploy', desc: 'Vite, Webpack basics, Vercel/Netlify deployment, CI/CD, and performance optimization.' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: '⚙️',
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200 dark:border-blue-800/40',
    badgeColor: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
    description: 'Learn to build powerful server-side applications, REST APIs, and databases.',
    duration: '6–9 months',
    difficulty: 'Intermediate',
    steps: [
      { phase: 1, title: 'Programming Fundamentals', desc: 'Choose Python or Node.js. Learn OOP, data structures, and algorithms basics.' },
      { phase: 2, title: 'Node.js & Express', desc: 'HTTP servers, middleware, routing, error handling, and building REST APIs.' },
      { phase: 3, title: 'Databases', desc: 'SQL (PostgreSQL/MySQL) for relational data and MongoDB for document storage.' },
      { phase: 4, title: 'Authentication & Security', desc: 'JWT tokens, bcrypt hashing, OAuth, CORS, and API security best practices.' },
      { phase: 5, title: 'Advanced APIs', desc: 'GraphQL, WebSockets, rate limiting, caching with Redis, and API documentation.' },
      { phase: 6, title: 'Cloud & DevOps', desc: 'Docker containers, AWS/GCP basics, environment management, and deployment pipelines.' }
    ]
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    icon: '🚀',
    color: 'from-indigo-500 to-violet-600',
    bgLight: 'bg-indigo-50 dark:bg-indigo-950/20',
    borderColor: 'border-indigo-200 dark:border-indigo-800/40',
    badgeColor: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300',
    description: 'Become a complete developer, building entire applications from UI to database.',
    duration: '10–12 months',
    difficulty: 'Intermediate',
    steps: [
      { phase: 1, title: 'Frontend Foundation', desc: 'HTML, CSS, JavaScript, and React. Build pixel-perfect responsive interfaces.' },
      { phase: 2, title: 'Backend Foundation', desc: 'Node.js, Express, REST APIs, and understanding server-side architecture.' },
      { phase: 3, title: 'Databases', desc: 'Design schemas with PostgreSQL and MongoDB. Write efficient queries.' },
      { phase: 4, title: 'Full Stack Integration', desc: 'Connect frontend to backend APIs. Handle auth, CORS, and state syncing.' },
      { phase: 5, title: 'Testing & Quality', desc: 'Unit tests, integration tests with Jest, and end-to-end tests with Playwright.' },
      { phase: 6, title: 'Production Deployment', desc: 'Docker, CI/CD pipelines, cloud hosting, domain setup, and monitoring.' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: '☁️',
    color: 'from-orange-500 to-amber-500',
    bgLight: 'bg-orange-50 dark:bg-orange-950/20',
    borderColor: 'border-orange-200 dark:border-orange-800/40',
    badgeColor: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300',
    description: 'Master infrastructure automation, cloud services, and continuous deployment pipelines.',
    duration: '8–12 months',
    difficulty: 'Advanced',
    steps: [
      { phase: 1, title: 'Linux & Bash', desc: 'Command line mastery, shell scripting, file permissions, and system processes.' },
      { phase: 2, title: 'Git & Version Control', desc: 'Advanced Git workflows, branching strategies, and collaboration best practices.' },
      { phase: 3, title: 'Docker & Containers', desc: 'Containerize apps, write Dockerfiles, and manage multi-container apps with Docker Compose.' },
      { phase: 4, title: 'CI/CD Pipelines', desc: 'GitHub Actions, Jenkins, or GitLab CI. Automate testing, building, and deployment.' },
      { phase: 5, title: 'Cloud Platforms', desc: 'AWS, GCP, or Azure. Learn EC2, S3, Lambda, and managed services.' },
      { phase: 6, title: 'Kubernetes & Monitoring', desc: 'Container orchestration, Helm charts, Prometheus, Grafana, and observability.' }
    ]
  },
  {
    id: 'datascience',
    title: 'Data Science',
    icon: '📊',
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/20',
    borderColor: 'border-emerald-200 dark:border-emerald-800/40',
    badgeColor: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
    description: 'Analyze data, build predictive models, and extract actionable insights from large datasets.',
    duration: '8–10 months',
    difficulty: 'Intermediate',
    steps: [
      { phase: 1, title: 'Python Fundamentals', desc: 'Python syntax, data structures, OOP, file handling, and virtual environments.' },
      { phase: 2, title: 'Data Analysis', desc: 'NumPy arrays, Pandas DataFrames, data cleaning, and exploratory data analysis (EDA).' },
      { phase: 3, title: 'Data Visualization', desc: 'Matplotlib, Seaborn, Plotly — charts, heatmaps, dashboards, and storytelling.' },
      { phase: 4, title: 'Statistics & Math', desc: 'Probability, hypothesis testing, regression, and linear algebra for ML.' },
      { phase: 5, title: 'Machine Learning', desc: 'Scikit-learn: classification, regression, clustering, evaluation, and model tuning.' },
      { phase: 6, title: 'Big Data & Deployment', desc: 'SQL for data, Spark basics, model deployment with Flask/FastAPI, and cloud notebooks.' }
    ]
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    icon: '🤖',
    color: 'from-rose-500 to-pink-600',
    bgLight: 'bg-rose-50 dark:bg-rose-950/20',
    borderColor: 'border-rose-200 dark:border-rose-800/40',
    badgeColor: 'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300',
    description: 'Build intelligent systems with deep learning, NLP, computer vision, and LLMs.',
    duration: '10–14 months',
    difficulty: 'Advanced',
    steps: [
      { phase: 1, title: 'Math Foundations', desc: 'Linear algebra, calculus, probability, and statistics essential for ML models.' },
      { phase: 2, title: 'Python & ML Libraries', desc: 'NumPy, Pandas, Scikit-learn, and classical ML algorithms from scratch.' },
      { phase: 3, title: 'Deep Learning', desc: 'Neural networks, backpropagation, CNNs, RNNs using TensorFlow or PyTorch.' },
      { phase: 4, title: 'NLP & Computer Vision', desc: 'Text classification, transformers, image recognition, and object detection.' },
      { phase: 5, title: 'LLMs & Generative AI', desc: 'Fine-tuning LLMs, prompt engineering, RAG pipelines, and using OpenAI APIs.' },
      { phase: 6, title: 'MLOps & Deployment', desc: 'Model serving, MLflow, experiment tracking, and production AI systems.' }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: '🔐',
    color: 'from-red-500 to-rose-600',
    bgLight: 'bg-red-50 dark:bg-red-950/20',
    borderColor: 'border-red-200 dark:border-red-800/40',
    badgeColor: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300',
    description: 'Protect systems, find vulnerabilities, and defend against cyber threats.',
    duration: '9–12 months',
    difficulty: 'Advanced',
    steps: [
      { phase: 1, title: 'Networking Fundamentals', desc: 'TCP/IP, DNS, HTTP, firewalls, VPNs, OSI model, and packet analysis with Wireshark.' },
      { phase: 2, title: 'Linux & Command Line', desc: 'Kali Linux, Bash scripting, file permissions, and process management.' },
      { phase: 3, title: 'Ethical Hacking Basics', desc: 'Reconnaissance, scanning with Nmap, vulnerability assessment, and OWASP Top 10.' },
      { phase: 4, title: 'Web & Network Attacks', desc: 'SQL injection, XSS, CSRF, MITM attacks, and tools like Burp Suite and Metasploit.' },
      { phase: 5, title: 'CTF & Penetration Testing', desc: 'Solve Capture The Flag challenges on HackTheBox, TryHackMe, and write pentest reports.' },
      { phase: 6, title: 'Certifications & Defense', desc: 'CompTIA Security+, CEH, OSCP prep. Blue team: SIEM, incident response, and forensics.' }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: '📱',
    color: 'from-sky-500 to-cyan-600',
    bgLight: 'bg-sky-50 dark:bg-sky-950/20',
    borderColor: 'border-sky-200 dark:border-sky-800/40',
    badgeColor: 'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300',
    description: 'Build native and cross-platform mobile apps for iOS and Android.',
    duration: '6–9 months',
    difficulty: 'Intermediate',
    steps: [
      { phase: 1, title: 'JavaScript & React Basics', desc: 'Strong JS foundation and React component patterns before going mobile.' },
      { phase: 2, title: 'React Native Setup', desc: 'Expo CLI, project structure, core components, StyleSheet, and Flexbox layout.' },
      { phase: 3, title: 'Navigation', desc: 'React Navigation library — stack, tab, and drawer navigators for multi-screen apps.' },
      { phase: 4, title: 'State & Data', desc: 'AsyncStorage, Context API, Redux Toolkit, and fetching data from REST APIs.' },
      { phase: 5, title: 'Device APIs', desc: 'Camera, GPS, push notifications, biometrics, and device storage access.' },
      { phase: 6, title: 'App Store Deployment', desc: 'Build APK/IPA, sign apps, publish on Google Play & Apple App Store.' }
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    icon: '✏️',
    color: 'from-pink-500 to-fuchsia-600',
    bgLight: 'bg-pink-50 dark:bg-pink-950/20',
    borderColor: 'border-pink-200 dark:border-pink-800/40',
    badgeColor: 'bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300',
    description: 'Design stunning, user-centered digital products using modern design principles.',
    duration: '4–6 months',
    difficulty: 'Beginner Friendly',
    steps: [
      { phase: 1, title: 'Design Fundamentals', desc: 'Color theory, typography, spacing, visual hierarchy, and Gestalt principles.' },
      { phase: 2, title: 'Figma Mastery', desc: 'Frames, components, auto-layout, variants, prototyping, and design tokens.' },
      { phase: 3, title: 'User Research', desc: 'User interviews, personas, journey maps, empathy mapping, and usability tests.' },
      { phase: 4, title: 'Design Systems', desc: 'Create component libraries, style guides, design tokens, and documentation.' },
      { phase: 5, title: 'Prototyping & Testing', desc: 'Interactive prototypes, A/B testing, heuristic evaluation, and iteration.' },
      { phase: 6, title: 'Portfolio & Handoff', desc: 'Case studies, design handoff to developers, and building a Behance/Dribbble portfolio.' }
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    icon: '⛓️',
    color: 'from-amber-500 to-yellow-500',
    bgLight: 'bg-amber-50 dark:bg-amber-950/20',
    borderColor: 'border-amber-200 dark:border-amber-800/40',
    badgeColor: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300',
    description: 'Build decentralized applications, smart contracts, and explore the Web3 ecosystem.',
    duration: '8–12 months',
    difficulty: 'Advanced',
    steps: [
      { phase: 1, title: 'Blockchain Concepts', desc: 'Distributed ledgers, consensus mechanisms, cryptography, wallets, and DeFi basics.' },
      { phase: 2, title: 'Solidity Smart Contracts', desc: 'Ethereum, EVM, Solidity syntax, data types, functions, and testing with Hardhat.' },
      { phase: 3, title: 'Web3.js / Ethers.js', desc: 'Connect frontend to blockchain, read contract data, and send transactions.' },
      { phase: 4, title: 'DeFi & NFTs', desc: 'ERC-20 tokens, ERC-721 NFTs, liquidity pools, and DeFi protocol interaction.' },
      { phase: 5, title: 'Security & Auditing', desc: 'Smart contract vulnerabilities, reentrancy attacks, and security audit techniques.' },
      { phase: 6, title: 'Full dApp', desc: 'Build and deploy a complete decentralized application to mainnet or testnet.' }
    ]
  }
];

export const projectsData = [
  // ==========================================
  // === FRONTEND PROJECTS ===
  // ==========================================
  
  // --- Beginner Frontend (6 projects) ---
  {
    id: 'proj-1',
    title: 'Personal Portfolio Website',
    difficulty: 'Beginner',
    category: 'Frontend',
    description: 'Build your own developer portfolio showcasing your projects, skills, and contact info. The best first project for any developer.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive design', 'Contact form', 'Project showcase', 'Dark mode'],
    githubSearch: 'portfolio website html css javascript',
    color: 'from-violet-500 to-purple-600',
    timeEst: '1–2 weeks'
  },
  {
    id: 'proj-2',
    title: 'To-Do List App',
    difficulty: 'Beginner',
    category: 'Frontend',
    description: 'Classic CRUD app to add, complete, and delete tasks. Add local storage persistence, filters, and priority labels.',
    techStack: ['React', 'CSS', 'LocalStorage'],
    features: ['Add/Delete tasks', 'Mark complete', 'Filter by status', 'Persist on refresh'],
    githubSearch: 'todo list react local storage',
    color: 'from-blue-500 to-cyan-500',
    timeEst: '3–5 days'
  },
  {
    id: 'proj-3',
    title: 'Weather Dashboard',
    difficulty: 'Beginner',
    category: 'Frontend',
    description: 'Fetch real-time weather data using the OpenWeatherMap API. Show temperature, humidity, and a 5-day forecast.',
    techStack: ['React', 'REST API', 'CSS'],
    features: ['Search by city', 'Current weather', '5-day forecast', 'Weather icons'],
    githubSearch: 'weather app react openweathermap',
    color: 'from-sky-500 to-blue-600',
    timeEst: '1 week'
  },
  {
    id: 'proj-4',
    title: 'Quiz App',
    difficulty: 'Beginner',
    category: 'Frontend',
    description: 'Multiple-choice quiz with score tracking, timer, and result summary. Use Open Trivia DB API or custom JSON questions.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    features: ['Timer countdown', 'Score tracking', 'Results page', 'Category selection'],
    githubSearch: 'quiz app javascript trivia',
    color: 'from-emerald-500 to-teal-600',
    timeEst: '1 week'
  },
  {
    id: 'proj-5',
    title: 'Expense Tracker',
    difficulty: 'Beginner',
    category: 'Frontend',
    description: 'Track income and expenses, visualize spending with charts, and set budget limits. Great for learning state management.',
    techStack: ['React', 'Chart.js', 'LocalStorage'],
    features: ['Add transactions', 'Balance overview', 'Spending chart', 'Category filters'],
    githubSearch: 'expense tracker react chart',
    color: 'from-amber-500 to-orange-500',
    timeEst: '1–2 weeks'
  },
  {
    id: 'proj-fe-beg-6',
    title: 'Unit & Currency Converter',
    difficulty: 'Beginner',
    category: 'Frontend',
    description: 'A tool to convert metrics (weight, length, temperature) and global currency values using a live exchange API.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Exchange API'],
    features: ['Real-time calculations', 'Swap currencies', 'Popular units list', 'Offline fallback'],
    githubSearch: 'currency converter web app javascript',
    color: 'from-pink-500 to-rose-500',
    timeEst: '4–6 days'
  },

  // --- Intermediate Frontend (6 projects) ---
  {
    id: 'proj-9',
    title: 'GitHub Profile Finder',
    difficulty: 'Intermediate',
    category: 'Frontend',
    description: 'Search GitHub users, view their repos, followers, and contribution stats using the GitHub REST API.',
    techStack: ['React', 'GitHub API', 'Tailwind CSS'],
    features: ['User search', 'Repo listings', 'Stats charts', 'Profile cards'],
    githubSearch: 'github profile finder react api',
    color: 'from-slate-600 to-slate-800',
    timeEst: '1–2 weeks'
  },
  {
    id: 'proj-10',
    title: 'Recipe Finder App',
    difficulty: 'Intermediate',
    category: 'Frontend',
    description: 'Search recipes by ingredient or cuisine, save favourites, and view step-by-step cooking instructions.',
    techStack: ['React', 'Spoonacular API', 'LocalStorage'],
    features: ['Search by ingredient', 'Recipe details', 'Save favourites', 'Dietary filters'],
    githubSearch: 'recipe app react spoonacular',
    color: 'from-orange-500 to-red-500',
    timeEst: '1–2 weeks'
  },
  {
    id: 'proj-fe-int-1',
    title: 'Movie Search & Review Hub',
    difficulty: 'Intermediate',
    category: 'Frontend',
    description: 'Browse current top movies, filter by genre, check ratings, and read plot summaries powered by TMDb API.',
    techStack: ['React', 'TMDb API', 'Tailwind CSS', 'Framer Motion'],
    features: ['Infinite scroll', 'Detailed modal popup', 'Trailer embed', 'Bookmark list'],
    githubSearch: 'movie database search react api',
    color: 'from-indigo-500 to-purple-600',
    timeEst: '1–2 weeks'
  },
  {
    id: 'proj-fe-int-2',
    title: 'Interactive Markdown Editor',
    difficulty: 'Intermediate',
    category: 'Frontend',
    description: 'A split-pane Markdown editor that parses and renders formatted HTML markup side-by-side in real-time.',
    techStack: ['React', 'Marked.js', 'DOMPurify', 'CSS Grid'],
    features: ['Real-time HTML parsing', 'Code highlighting syntax', 'Auto-save draft', 'Download markdown file'],
    githubSearch: 'markdown editor react preview',
    color: 'from-teal-500 to-cyan-600',
    timeEst: '1 week'
  },
  {
    id: 'proj-fe-int-3',
    title: 'Pomodoro Productivity Timer',
    difficulty: 'Intermediate',
    category: 'Frontend',
    description: 'A beautiful visual tomato clock with customized timer ranges, history trackers, and task check-offs.',
    techStack: ['React', 'Web Audio API', 'LocalStorage', 'CSS variables'],
    features: ['Custom intervals', 'Sound alarms list', 'Work logs chart', 'Task integration'],
    githubSearch: 'pomodoro productivity timer react web app',
    color: 'from-rose-500 to-red-600',
    timeEst: '1 week'
  },
  {
    id: 'proj-fe-int-4',
    title: 'CSS Grid & Flexbox Studio',
    difficulty: 'Intermediate',
    category: 'Frontend',
    description: 'An interactive layout sandbox allowing designers to modify align properties, generate code blocks, and preview blocks.',
    techStack: ['React', 'CSS Grid', 'Tailwind CSS', 'Clipboard API'],
    features: ['Visual layout builders', 'Responsive size sliders', 'Export clean CSS properties', 'Template layouts list'],
    githubSearch: 'css layout playground visual generator react',
    color: 'from-violet-500 to-indigo-600',
    timeEst: '1–2 weeks'
  },

  // --- Advanced Frontend (6 projects) ---
  {
    id: 'proj-fe-adv-1',
    title: 'Vector Drawing & Canvas Studio',
    difficulty: 'Advanced',
    category: 'Frontend',
    description: 'Create a browser graphic editor. Draw freehand lines, shapes, text, adjust strokes, and export vector diagrams.',
    techStack: ['React', 'HTML5 Canvas', 'CSS Modules', 'Redux Toolkit'],
    features: ['Freehand brush', 'Shape creation tools', 'Undo/redo actions history', 'Save as PNG/SVG'],
    githubSearch: 'canvas paint draw app react',
    color: 'from-fuchsia-500 to-pink-600',
    timeEst: '3–4 weeks'
  },
  {
    id: 'proj-fe-adv-2',
    title: 'Custom UI Component Library',
    difficulty: 'Advanced',
    category: 'Frontend',
    description: 'Build a production-ready accessibility-first React UI design framework and publish it as an NPM package.',
    techStack: ['React', 'TypeScript', 'Storybook', 'Vite Bundle'],
    features: ['Component style tokens', 'Keyboard tab accessibility', 'Storybook documentation', 'NPM build bundle'],
    githubSearch: 'build library component react storybook typescript',
    color: 'from-orange-500 to-yellow-500',
    timeEst: '3–5 weeks'
  },
  {
    id: 'proj-fe-adv-3',
    title: 'Crypto Analytics Dashboard',
    difficulty: 'Advanced',
    category: 'Frontend',
    description: 'Track global crypto exchanges, price fluctuations, candlestick metrics, and manage mock currency investments.',
    techStack: ['React', 'CoinGecko API', 'Recharts', 'WebSockets'],
    features: ['Real-time ticker stream', 'Interactive charts', 'Mock transaction ledger', 'Price alerts'],
    githubSearch: 'crypto dashboard ticker react charts',
    color: 'from-violet-600 to-indigo-700',
    timeEst: '3–4 weeks'
  },
  {
    id: 'proj-fe-adv-4',
    title: 'Interactive Client-Side Planner',
    difficulty: 'Advanced',
    category: 'Frontend',
    description: 'A full workspace organizer with drag-and-drop planning cards, lists, tag categories, and local database syncing.',
    techStack: ['React', 'React DnD', 'IndexedDB', 'Tailwind CSS'],
    features: ['Drag cards across columns', 'Filter by labels', 'Offline index database sync', 'Custom themes'],
    githubSearch: 'react kanban drag and drop offline indexdb',
    color: 'from-emerald-500 to-teal-700',
    timeEst: '2–3 weeks'
  },
  {
    id: 'proj-fe-adv-5',
    title: 'Real-time Audio Visualizer',
    difficulty: 'Advanced',
    category: 'Frontend',
    description: 'Connect audio sources, parse spectrum frequencies, and draw animated particles shifting dynamically to music.',
    techStack: ['React', 'Web Audio API', 'HTML5 Canvas', 'Framer Motion'],
    features: ['Mic input channel support', 'Responsive bar frequency waves', 'Particle cluster animations', 'MP3 playlist upload'],
    githubSearch: 'web audio visualizer canvas html5 react',
    color: 'from-rose-500 to-pink-600',
    timeEst: '3–4 weeks'
  },
  {
    id: 'proj-fe-adv-6',
    title: 'Flowchart & Mindmap Builder',
    difficulty: 'Advanced',
    category: 'Frontend',
    description: 'An interactive canvas dashboard allowing developers to link modules, map steps, and export workflow graphs.',
    techStack: ['React', 'ReactFlow', 'TypeScript', 'Tailwind CSS'],
    features: ['Drag-and-drop node templates', 'Dynamic connecting line hooks', 'Zoom/pan controls layout', 'Export JSON diagram'],
    githubSearch: 'mindmap builder flowchart reactflow typescript',
    color: 'from-emerald-600 to-cyan-600',
    timeEst: '3–4 weeks'
  },

  // ==========================================
  // === FULL STACK PROJECTS ===
  // ==========================================
  
  // --- Beginner Full Stack (6 projects) ---
  {
    id: 'proj-fs-beg-1',
    title: 'Simple Digital Guestbook',
    difficulty: 'Beginner',
    category: 'Full Stack',
    description: 'A basic portal allowing visitors to leave comments. Learn standard backend HTTP routing and storage operations.',
    techStack: ['Node.js', 'Express.js', 'Bootstrap', 'JSON DB'],
    features: ['Post message', 'Visitor database list', 'Basic moderation filters', 'Timestamp sorting'],
    githubSearch: 'guestbook node express json storage',
    color: 'from-blue-400 to-indigo-500',
    timeEst: '4–6 days'
  },
  {
    id: 'proj-fs-beg-2',
    title: 'Notes Storage REST API',
    difficulty: 'Beginner',
    category: 'Full Stack',
    description: 'Build a server-side REST API with endpoints to handle full CRUD operations for sticky notes. Perfect backend starting block.',
    techStack: ['Node.js', 'Express.js', 'Postman', 'Lowdb'],
    features: ['CRUD API endpoints', 'JSON format validation', 'Search query parameters', 'Lowdb file persistence'],
    githubSearch: 'express notes crud API lowdb',
    color: 'from-emerald-400 to-teal-500',
    timeEst: '5–7 days'
  },
  {
    id: 'proj-fs-beg-3',
    title: 'CLI Task Organizer',
    difficulty: 'Beginner',
    category: 'Full Stack',
    description: 'Write a command line interface program to track developer tasks, deadlines, and logs directly from your shell.',
    techStack: ['Node.js', 'Inquirer.js', 'Chalk', 'FS Module'],
    features: ['Interactive prompts', 'Color-coded statuses', 'Task CSV import/export', 'Task stats overview'],
    githubSearch: 'node cli task manager inquirer chalk',
    color: 'from-slate-500 to-slate-700',
    timeEst: '3–5 days'
  },
  {
    id: 'proj-fs-beg-4',
    title: 'Static Site Builder Tool',
    difficulty: 'Beginner',
    category: 'Full Stack',
    description: 'Create a static compiler program that parses markdown text sheets and outputs responsive semantic HTML portals.',
    techStack: ['Node.js', 'Markdown-it', 'FS Extra', 'EJS Templates'],
    features: ['Markdown parse parser', 'EJS template mapping', 'Automated directory compiler', 'Local development server'],
    githubSearch: 'static site generator node markdown ejs',
    color: 'from-amber-400 to-orange-500',
    timeEst: '1 week'
  },
  {
    id: 'proj-fs-beg-5',
    title: 'File Metadata Extractor',
    difficulty: 'Beginner',
    category: 'Full Stack',
    description: 'Build an Express backend that handles file uploads and returns metadata payload details (size, type, extension) instantly.',
    techStack: ['Node.js', 'Express.js', 'Multer', 'Tailwind CSS'],
    features: ['Secure file upload handler', 'JSON metadata response API', 'File type detection filters', 'Storage cleaner cron'],
    githubSearch: 'file metadata microservice node multer express',
    color: 'from-indigo-400 to-blue-500',
    timeEst: '4–6 days'
  },
  {
    id: 'proj-fs-beg-6',
    title: 'Local Weather Data Logger',
    difficulty: 'Beginner',
    category: 'Full Stack',
    description: 'Write a Node cron script that fetches weather stats for your city periodically and saves logs to a database.',
    techStack: ['Node.js', 'Axios', 'SQLite', 'Node-cron'],
    features: ['Hourly schedule scraper', 'SQLite table insertion', 'Weather changes alarm email', 'JSON report compiler'],
    githubSearch: 'weather logger script sqlite node cron',
    color: 'from-emerald-500 to-teal-600',
    timeEst: '5–7 days'
  },

  // --- Intermediate Full Stack (6 projects) ---
  {
    id: 'proj-6',
    title: 'Full-Stack Blog Platform',
    difficulty: 'Intermediate',
    category: 'Full Stack',
    description: 'Create and publish blog posts with a rich text editor, user authentication, comments, and tags filtering.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: ['User auth', 'Rich text editor', 'Comments', 'Tag filtering'],
    githubSearch: 'blog platform react node mongodb',
    color: 'from-indigo-500 to-violet-600',
    timeEst: '3–4 weeks'
  },
  {
    id: 'proj-7',
    title: 'Real-Time Chat App',
    difficulty: 'Intermediate',
    category: 'Full Stack',
    description: 'Build a live chat with rooms, online status indicators, message history, and typing indicators using WebSockets.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    features: ['Real-time messages', 'Chat rooms', 'Online status', 'Message history'],
    githubSearch: 'chat app socket.io react node',
    color: 'from-pink-500 to-rose-600',
    timeEst: '2–3 weeks'
  },
  {
    id: 'proj-8',
    title: 'E-Commerce Store',
    difficulty: 'Intermediate',
    category: 'Full Stack',
    description: 'Build a shopping platform with product listings, cart management, checkout flow, and order tracking.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    features: ['Product catalog', 'Cart & checkout', 'Payment gateway', 'Order history'],
    githubSearch: 'ecommerce react node stripe',
    color: 'from-emerald-500 to-green-600',
    timeEst: '4–6 weeks'
  },
  {
    id: 'proj-fs-int-1',
    title: 'Shared Real-Time Document Hub',
    difficulty: 'Intermediate',
    category: 'Full Stack',
    description: 'Create a shared editing board where multiple concurrent users can co-edit paragraphs and view user cursors.',
    techStack: ['React', 'Node.js', 'Socket.io', 'Express.js', 'Redis'],
    features: ['Co-operative document editing', 'Active user cursor indicators', 'Draft auto-saves', 'Document version history'],
    githubSearch: 'collaborative editor react socketio node redis',
    color: 'from-sky-500 to-indigo-600',
    timeEst: '3–4 weeks'
  },
  {
    id: 'proj-fs-int-2',
    title: 'Interactive Live Voting App',
    difficulty: 'Intermediate',
    category: 'Full Stack',
    description: 'Create a polling app where users submit topics, vote on active listings, and view animated graph bars adjusting live.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Chart.js'],
    features: ['Dynamic poll creator', 'WebSocket voting counts', 'Animated graph charts', 'Anonymous IP limiters'],
    githubSearch: 'realtime voting poll app react node socketio',
    color: 'from-fuchsia-500 to-purple-600',
    timeEst: '2–3 weeks'
  },
  {
    id: 'proj-fs-int-3',
    title: 'URL Shortener with Analytics',
    difficulty: 'Intermediate',
    category: 'Full Stack',
    description: 'A platform to input long links, generate short redirect IDs, and track click metrics (geography, browsers).',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'GeoIP'],
    features: ['Base62 link compressor', 'Redirect routing engine', 'Clicks statistics dashboard', 'Browser agent parser'],
    githubSearch: 'url shortener node express mongodb analytics',
    color: 'from-amber-500 to-orange-600',
    timeEst: '1–2 weeks'
  },

  // --- Advanced Full Stack (6 projects) ---
  {
    id: 'proj-11',
    title: 'Social Media Platform',
    difficulty: 'Advanced',
    category: 'Full Stack',
    description: 'Build a Twitter/Instagram-like platform with posts, likes, follows, notifications, and an image upload system.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'Socket.io'],
    features: ['Post creation', 'Likes & comments', 'Follow system', 'Real-time notifications'],
    githubSearch: 'social media clone react node mongodb',
    color: 'from-violet-600 to-indigo-700',
    timeEst: '6–10 weeks'
  },
  {
    id: 'proj-12',
    title: 'Online Code Editor',
    difficulty: 'Advanced',
    category: 'Full Stack',
    description: 'Build a browser-based code editor with syntax highlighting, multiple languages, live preview, and code execution.',
    techStack: ['React', 'Monaco Editor', 'Node.js', 'Docker'],
    features: ['Syntax highlighting', 'Live preview', 'Multi-language', 'Code execution'],
    githubSearch: 'online code editor react monaco',
    color: 'from-teal-500 to-emerald-600',
    timeEst: '4–6 weeks'
  },
  {
    id: 'proj-14',
    title: 'Task Management Dashboard',
    difficulty: 'Advanced',
    category: 'Full Stack',
    description: 'Trello-like kanban board with drag-and-drop, team collaboration, deadlines, and analytics dashboard.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    features: ['Drag-and-drop', 'Team workspaces', 'Deadline tracking', 'Analytics'],
    githubSearch: 'kanban board react drag drop',
    color: 'from-sky-500 to-blue-700',
    timeEst: '5–8 weeks'
  },
  {
    id: 'proj-15',
    title: 'DevSearch Clone (This App!)',
    difficulty: 'Advanced',
    category: 'Full Stack',
    description: 'Recreate a developer resource platform with roadmaps, learning paths, progress tracking, and user authentication.',
    techStack: ['React', 'Vite', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: ['Multi-page routing', 'Auth system', 'Progress tracking', 'Dark mode'],
    githubSearch: 'developer resource platform react node',
    color: 'from-violet-600 to-purple-700',
    timeEst: '6–8 weeks'
  },
  {
    id: 'proj-fs-adv-5',
    title: 'Distributed Event Broker Console',
    difficulty: 'Advanced',
    category: 'Full Stack',
    description: 'Build an event streaming dashboard that streams event topics, connects consumers, and tracks event log indexes.',
    techStack: ['React', 'Node.js', 'Apache Kafka', 'Docker', 'Chart.js'],
    features: ['Kafka topics monitor portal', 'Active producer payload log', 'Event speeds graphing', 'Message recovery indexes'],
    githubSearch: 'kafka dashboard monitoring react node client',
    color: 'from-orange-600 to-red-700',
    timeEst: '4–6 weeks'
  },
  {
    id: 'proj-fs-adv-6',
    title: 'Video Streaming Endpoint Platform',
    difficulty: 'Advanced',
    category: 'Full Stack',
    description: 'Assemble a media streaming hub that transcodes uploaded MP4 files into HLS segments and streams content securely.',
    techStack: ['React', 'Node.js', 'FFmpeg', 'AWS S3', 'HLS.js'],
    features: ['Video transcoding service pipeline', 'AWS cloud bucket uploads', 'HLS adaptive bit streaming player', 'Access logging'],
    githubSearch: 'video streaming server ffmpeg node react',
    color: 'from-rose-600 to-pink-700',
    timeEst: '5–8 weeks'
  },

  // ==========================================
  // === AI & MACHINE LEARNING PROJECTS ===
  // ==========================================
  
  // --- Beginner AI/ML (6 projects) ---
  {
    id: 'proj-ai-beg-1',
    title: 'Iris Plant Classification model',
    difficulty: 'Beginner',
    category: 'AI/ML',
    description: 'Implement a classical ML model using Scikit-Learn to classify flower species based on sepal and petal shapes.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    features: ['Exploratory data study', 'Decision tree logic classifier', 'Model evaluation grid', 'Accuracy graph visualization'],
    githubSearch: 'iris classification scikit learn python dataset',
    color: 'from-emerald-500 to-teal-500',
    timeEst: '4–6 days'
  },
  {
    id: 'proj-ai-beg-2',
    title: 'Spam Detection Classifier',
    difficulty: 'Beginner',
    category: 'AI/ML',
    description: 'Train a Naive Bayes model to filter out promotional email texts and identify authentic communications.',
    techStack: ['Python', 'NLTK', 'Scikit-learn', 'Regular Expressions'],
    features: ['Text tokenization cleaning', 'Count vectorization vectorizer', 'Spam/Ham tagger classifier', 'Precision evaluation index'],
    githubSearch: 'spam detector nltk scikit learn python',
    color: 'from-indigo-400 to-violet-500',
    timeEst: '5–8 days'
  },
  {
    id: 'proj-ai-beg-3',
    title: 'MNIST Digit Draw Recognizer',
    difficulty: 'Beginner',
    category: 'AI/ML',
    description: 'Design a simple neural layer or K-Nearest-Neighbor model to recognize hand-drawn figures from 0 to 9.',
    techStack: ['Python', 'NumPy', 'Matplotlib', 'MNIST Dataset'],
    features: ['Pixel data vector normalization', 'KNN distance categorization', 'Confusion matrix analysis', 'Sample visual layout rendering'],
    githubSearch: 'mnist digit recognition python numpy',
    color: 'from-sky-400 to-blue-500',
    timeEst: '1 week'
  },
  {
    id: 'proj-ai-beg-4',
    title: 'Micro Sentiment API',
    difficulty: 'Beginner',
    category: 'AI/ML',
    description: 'Assemble a basic server API that accepts comment logs, analyzes sentiment weights, and answers polarity values.',
    techStack: ['Python', 'Flask', 'TextBlob', 'Docker'],
    features: ['JSON REST endpoint', 'Polarity weight calculator', 'Confidence index scoring', 'API deployment container'],
    githubSearch: 'sentiment analysis flask api textblob',
    color: 'from-amber-400 to-yellow-500',
    timeEst: '3–5 days'
  },
  {
    id: 'proj-ai-beg-5',
    title: 'House Price Linear Estimator',
    difficulty: 'Beginner',
    category: 'AI/ML',
    description: 'Build a single-variable linear regression model to predict median housing costs based on rooms sizes indices.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
    features: ['Correlation matrix study heatmap', 'Best-fit linear line plot', 'Mean absolute error scoring', 'CSV dataset imports'],
    githubSearch: 'linear regression house pricing python scikit',
    color: 'from-teal-500 to-green-600',
    timeEst: '4–6 days'
  },
  {
    id: 'proj-ai-beg-6',
    title: 'Tic-Tac-Toe Smart AI player',
    difficulty: 'Beginner',
    category: 'AI/ML',
    description: 'Construct a minimax algorithm model that plays a perfect game of Tic-Tac-Toe, preventing user wins.',
    techStack: ['Python', 'Minimax Algorithm', 'Pygame', 'Math modules'],
    features: ['Minimax search tree', 'State evaluation values', 'Interactive Pygame canvas dashboard', 'AI difficulty levels'],
    githubSearch: 'tictactoe minimax python game ai',
    color: 'from-rose-500 to-orange-500',
    timeEst: '1 week'
  },

  // --- Intermediate AI/ML (6 projects) ---
  {
    id: 'proj-ai-int-1',
    title: 'Sales Prediction Forecast model',
    difficulty: 'Intermediate',
    category: 'AI/ML',
    description: 'Train a regression forest or gradient boosting model to forecast retail store sales based on temporal indicators.',
    techStack: ['Python', 'Pandas', 'XGBoost', 'Jupyter'],
    features: ['Feature engineering transforms', 'Seasonality indexes study', 'XGBoost regression training', 'Root mean square error tracking'],
    githubSearch: 'sales forecasting xgboost pandas python',
    color: 'from-purple-500 to-fuchsia-600',
    timeEst: '2–3 weeks'
  },
  {
    id: 'proj-ai-int-2',
    title: 'Customer Segmentation Studio',
    difficulty: 'Intermediate',
    category: 'AI/ML',
    description: 'Segment customer transaction histories into behavioral groups using unsupervised clustering models.',
    techStack: ['Python', 'Scikit-learn', 'Seaborn', 'K-Means Clustering'],
    features: ['Data scaling preparation', 'Elbow method analysis helper', 'K-Means groupings', '3D cluster graph visualization'],
    githubSearch: 'customer segmentation kmeans clustering python',
    color: 'from-teal-500 to-emerald-600',
    timeEst: '1–2 weeks'
  },
  {
    id: 'proj-ai-int-3',
    title: 'OpenCV Real-time Object Tracker',
    difficulty: 'Intermediate',
    category: 'AI/ML',
    description: 'Configure OpenCV scripts to stream video frames, run bounding box divisions, and catalog target shapes.',
    techStack: ['Python', 'OpenCV', 'YOLO v8', 'PyTorch'],
    features: ['Live web camera stream frame processing', 'YOLO model object bounding', 'Real-time classification labels', 'Frame rate display'],
    githubSearch: 'yolo opencv object tracking python',
    color: 'from-pink-500 to-rose-600',
    timeEst: '2–3 weeks'
  },
  {
    id: 'proj-ai-int-4',
    title: 'Recommendation Engine',
    difficulty: 'Intermediate',
    category: 'AI/ML',
    description: 'Establish a recommendation system using collaborative filtering or similarity algorithms on movie indices.',
    techStack: ['Python', 'Pandas', 'Cosine Similarity', 'Scipy'],
    features: ['User item matrix builder', 'Pivot tables', 'Vector similarity scoring', 'Top-10 related list generator'],
    githubSearch: 'movie recommendation system cosine similarity python',
    color: 'from-orange-500 to-amber-600',
    timeEst: '1–2 weeks'
  },
  {
    id: 'proj-ai-int-5',
    title: 'Stock Market Trend Indicator',
    difficulty: 'Intermediate',
    category: 'AI/ML',
    description: 'Compile mathematical moving averages and fit exponential models to identify trends in historical tickers indices.',
    techStack: ['Python', 'Pandas', 'Statsmodels', 'Matplotlib'],
    features: ['Time series splits decomposition', 'Moving average indicators plotting', 'ARIMA prediction curves', 'Backtest accuracy scoring'],
    githubSearch: 'stock price time series prediction arima python',
    color: 'from-blue-500 to-indigo-600',
    timeEst: '2 weeks'
  },
  {
    id: 'proj-ai-int-6',
    title: 'Music Genre Classifier model',
    difficulty: 'Intermediate',
    category: 'AI/ML',
    description: 'Train a convolutional neural network model to segment MP3 files into music categories based on spectrograms.',
    techStack: ['Python', 'Librosa', 'TensorFlow', 'Mel Spectrograms'],
    features: ['Audio feature extraction library', 'Spectrogram images compiler', 'CNN classification architecture', 'Accuracy assessment confusion plot'],
    githubSearch: 'music genre classification cnn librosa python',
    color: 'from-violet-500 to-pink-600',
    timeEst: '2–3 weeks'
  },

  // --- Advanced AI/ML (6 projects) ---
  {
    id: 'proj-13',
    title: 'AI Chatbot Assistant',
    difficulty: 'Advanced',
    category: 'AI/ML',
    description: 'Integrate OpenAI GPT API to build a conversational assistant with chat history, personas, and prompt templates.',
    techStack: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    features: ['GPT integration', 'Chat history', 'Custom personas', 'Prompt templates'],
    githubSearch: 'ai chatbot react openai gpt',
    color: 'from-rose-500 to-pink-600',
    timeEst: '2–3 weeks'
  },
  {
    id: 'proj-ai-adv-1',
    title: 'AI Media Generation Studio',
    difficulty: 'Advanced',
    category: 'AI/ML',
    description: 'Build a portal that connects to image diffusion APIs, logs prompt variables, and compiles a vector image library.',
    techStack: ['React', 'Node.js', 'DALL-E API', 'PostgreSQL'],
    features: ['Prompt structure builders', 'Image aspect ratio adjustment', 'Image gallery list', 'Download image output'],
    githubSearch: 'dall-e image generator react node',
    color: 'from-indigo-600 to-violet-750',
    timeEst: '3–4 weeks'
  },
  {
    id: 'proj-ai-adv-2',
    title: 'Enterprise Support Agent',
    difficulty: 'Advanced',
    category: 'AI/ML',
    description: 'Train a local Retrieval Augmented Generation pipeline utilizing vector indexes to support product documentation lookups.',
    techStack: ['Python', 'LangChain', 'ChromaDB', 'HuggingFace Embeddings'],
    features: ['PDF parser indexing tool', 'Semantic vector space search', 'Response generation framework', 'Chat user interface'],
    githubSearch: 'langchain chromadb rag pipeline chatbot',
    color: 'from-blue-600 to-cyan-600',
    timeEst: '4–6 weeks'
  },
  {
    id: 'proj-ai-adv-3',
    title: 'Autonomous Stock Trading Bot',
    difficulty: 'Advanced',
    category: 'AI/ML',
    description: 'Create an automated stock trading system that queries ticker data streams, processes signals, and executes orders.',
    techStack: ['Python', 'Backtrader', 'Alpaca API', 'LSTM Networks'],
    features: ['Technical indicator computations', 'LSTM price prediction model', 'Paper trading execution engine', 'Historical backtesting log'],
    githubSearch: 'algorithmic trading bot python alpaca lstm',
    color: 'from-emerald-600 to-teal-700',
    timeEst: '5–8 weeks'
  },
  {
    id: 'proj-ai-adv-4',
    title: 'Real-time Facial Recognition Lock',
    difficulty: 'Advanced',
    category: 'AI/ML',
    description: 'Construct a camera monitoring pipeline that runs facial embedding extraction to authenticate user logins.',
    techStack: ['Python', 'Face Recognition Library', 'OpenCV', 'SQLite'],
    features: ['Facial bounding box locator', '128D embedding matching calculations', 'Live feed window locks', 'Authentication log spreadsheet'],
    githubSearch: 'face recognition system python opencv security',
    color: 'from-indigo-700 to-purple-800',
    timeEst: '3–4 weeks'
  },
  {
    id: 'proj-ai-adv-5',
    title: 'LLM Meeting Summarizer',
    difficulty: 'Advanced',
    category: 'AI/ML',
    description: 'Build a server dashboard that accepts meeting audio inputs, runs transcribing models, and drafts action items lists.',
    techStack: ['React', 'Node.js', 'Whisper API', 'LangChain', 'OpenAI'],
    features: ['Audio file upload handling', 'Whisper audio-to-text transcriber', 'GPT summarization pipeline templates', 'PDF report builder'],
    githubSearch: 'whisper openai transcript summarizer react node',
    color: 'from-rose-500 to-amber-600',
    timeEst: '3–5 weeks'
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
