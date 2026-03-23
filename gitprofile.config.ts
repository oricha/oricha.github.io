// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'oricha',
  },

  base: '/',

  publications: [],

  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 6,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        projects: [
          'oricha/recicar',
          'oricha/cardealer',
          'oricha/citamedica',
          'oricha/gitportfolio',
        ],
      },
    },

    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'Recicar',
          description:
            'Marketplace platform for selling car parts from scrapyards. Built with Spring Boot and PostgreSQL. Commission-based multi-seller architecture.',
          imageUrl:
            'https://img.freepik.com/free-vector/car-parts-concept-illustration_114360-8036.jpg',
          link: 'https://github.com/oricha/recicar',
        },
        {
          title: 'CitaMedica',
          description:
            'SaaS medical appointment booking platform focused on scheduling, scalability, and clean architecture using TypeScript.',
          imageUrl:
            'https://img.freepik.com/free-vector/online-doctor-concept-illustration_114360-1783.jpg',
          link: 'https://github.com/oricha/citamedica',
        },
        {
          title: 'CarDealer',
          description:
            'Car marketplace prototype for listings and dealership flows. Frontend-focused HTML project.',
          imageUrl:
            'https://img.freepik.com/free-vector/car-dealer-concept-illustration_114360-8890.jpg',
          link: 'https://github.com/oricha/cardealer',
        },
        {
          title: 'Nordic Design Studio',
          description:
            'Concept platform for Nordic-style modular homes and energy-efficient housing projects.',
          imageUrl:
            'https://img.freepik.com/free-vector/modern-house-concept-illustration_114360-1088.jpg',
          link: 'https://github.com/oricha',
        },
      ],
    },
  },

  seo: {
    title: 'Karel Muñiz Perdomo | Senior Backend & DevOps Engineer',
    description:
      'Senior Software Engineer with 15+ years of experience in Java, Spring Boot, Kubernetes, AWS, and cloud-native architectures. Based in Barcelona, working across Europe.',
    imageURL: '',
  },

  social: {
    linkedin: 'oricha',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'oricha',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'https://karelmuniz.com/',
    phone: '',
    email: 'oricha@gmail.com',
  },

  resume: {
    fileUrl: 'https://karelmuniz.com/CV.pdf',
  },

  skills: [
    'Java 11–21',
    'Spring Boot 3',
    'Scala (Cats, FP)',
    'Kotlin',
    'NodeJS',
    'REST APIs',
    'Microservices',
    'Hexagonal Architecture',
    'Domain Driven Design',
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes (EKS, Fargate)',
    'Terraform',
    'Ansible',
    'GitHub Actions',
    'GitLab CI',
    'Helm',
    'Kafka',
    'RabbitMQ',
    'PostgreSQL',
    'Oracle',
    'DynamoDB',
    'Vue.js',
    'React',
    'Next.js',
    'Tailwind',
  ],

  experiences: [
    {
      company: 'Nike',
      position: 'Senior Backend / Staff Engineer',
      from: '2022',
      to: '2024',
      companyLink: 'https://www.nike.com',
    },
    {
      company: 'ING Netherlands',
      position: 'Senior DevOps / Backend Engineer',
      from: '2020',
      to: '2022',
      companyLink: 'https://www.ing.com',
    },
    {
      company: 'Allianz Trade',
      position: 'Senior Backend Engineer',
      from: '2018',
      to: '2020',
      companyLink: 'https://www.allianz-trade.com',
    },
    {
      company: 'RACC',
      position: 'Senior Software Engineer',
      from: '2016',
      to: '2018',
      companyLink: 'https://www.racc.es',
    },
  ],

  certifications: [
    {
      name: 'AWS Cloud Certification',
      body: 'Cloud infrastructure and DevOps',
      year: '2023',
      link: '',
    },
    {
      name: 'Microsoft Azure Administrator',
      body: 'Azure infrastructure and deployment',
      year: '2022',
      link: '',
    },
  ],

  educations: [
    {
      institution: 'Polytechnic University José Antonio Echeverría',
      degree: "Bachelor's Degree in Computer Software Engineering",
      from: '2004',
      to: '2009',
    },
  ],

  blog: {
    source: 'dev',
    username: 'oricha',
    limit: 4,
  },

  googleAnalytics: {
    id: 'G-BXBMVEX8LW',
  },

  hotjar: { id: '', snippetVersion: 6 },

  themeConfig: {
    defaultTheme: 'nord',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'corporate',
      'lofi',
      'pastel',
      'business',
      'nord',
      'winter',
      'dim',
      'abyss',
      'procyon',
    ],
  },

  footer: `Built with <a 
      class="text-primary" href="https://github.com/oricha/gitportfolio"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> · Karel Muñiz Perdomo`,

  enablePWA: true,
};

export default CONFIG;
