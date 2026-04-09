// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'oricha',
  },

  base: '/',

  profile: {
    avatarUrl:
      'https://s3.eu-west-1.amazonaws.com/amzn-s3-https-oricha.github.io-050451388777-eu-west-1-an/yo1.gif',
  },

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
          'oricha/Karma',
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
    title: 'Karel Muñiz Perdomo | Platform Engineer',
    description:
      'Senior Platform Engineer with nearly 20 years building reliable, scalable distributed systems. Expert in Kubernetes, AWS, Azure, CI/CD automation, and production reliability. Transitioning to Platform Engineering. Based in Barcelona.',
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
    fileUrl: 'https://s3.eu-west-1.amazonaws.com/amzn-s3-https-oricha.github.io-050451388777-eu-west-1-an/Karel_Muniz_+.pdf',
  },

  skills: [
    // Platform Engineering & Cloud Infrastructure
    'Platform Engineering',
    'Kubernetes (EKS, OpenShift)',
    'AWS (EC2, EKS, S3, Redshift, EMR, Glue)',
    'Azure (DevOps, App Services, Database)',
    'Docker & Container Orchestration',
    'Terraform & IaC',
    'Ansible',
    'CI/CD (GitHub Actions, Azure DevOps, Jenkins)',
    'Helm',

    // Reliability & Observability
    'ELK Stack (Elasticsearch, Logstash, Kibana)',
    'CloudWatch & Monitoring',
    'Prometheus & Grafana',
    'Incident Response & Production Troubleshooting',
    'Performance Optimization',

    // Backend & Distributed Systems
    'Java 11–21',
    'Spring Boot 3',
    'Scala (Cats, Functional Programming)',
    'Python',
    'Kafka & Event-Driven Architecture',
    'RabbitMQ & Messaging',
    'Redis',
    'Microservices & REST APIs',
    'Hexagonal Architecture & DDD',

    // Data & Storage
    'PostgreSQL',
    'Oracle Database',
    'S3 & Data Lakes',
    'Redshift & Data Warehousing',
    'Elasticsearch',

    // Other Technologies
    'Linux System Administration',
    'Node.js',
    'React & Vue.js',
    'GraphQL',
  ],

  experiences: [
    {
      company: 'Zemsania (Santander Bank)',
      position: 'Senior Data Infrastructure Engineer',
      from: 'May 2025',
      to: 'Present',
      companyLink: 'https://www.santander.com',
    },
    {
      company: 'ING Groep N.V.',
      position: 'Senior DevOps Engineer',
      from: 'Mar 2022',
      to: 'Dec 2024',
      companyLink: 'https://www.ing.com',
    },
    {
      company: 'Icemobile',
      position: 'Senior Software Engineer',
      from: 'Dec 2020',
      to: 'Mar 2022',
      companyLink: 'https://www.icemobile.com',
    },
    {
      company: 'Nike',
      position: 'Senior Software Engineer',
      from: 'Dec 2017',
      to: 'Dec 2020',
      companyLink: 'https://www.nike.com',
    },
    {
      company: 'NTT Data',
      position: 'Senior Software Engineer',
      from: 'Dec 2012',
      to: 'Oct 2017',
      companyLink: 'https://www.nttdata.com',
    },
    {
      company: 'GFT - Deutsche Bank',
      position: 'Test Engineer / Integration and Quality Engineer',
      from: 'Nov 2010',
      to: 'May 2012',
      companyLink: 'https://www.gft.com',
    },
    {
      company: 'Cast Info',
      position: 'Java Software Engineer',
      from: 'Sep 2008',
      to: 'Nov 2011',
      companyLink: 'https://www.castinfo.es',
    },
    {
      company: 'Thales',
      position: 'Java Software Engineer',
      from: 'Dec 2006',
      to: 'Jul 2008',
      companyLink: 'https://www.thales.com',
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
      from: '2001',
      to: '2006',
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
    defaultTheme: 'dark',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'dark',
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
