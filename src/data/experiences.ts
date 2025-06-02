import { Experience } from '../types';
import tmo from '../assets/images/tmo.png';
import walmart from '../assets/images/walmart.png';
import amazon from '../assets/images/amazon.jpg';
import cosmosoft from '../assets/images/cosmosoft.png';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'T-Mobile',
    role: 'Software Technical Lead',
    period: 'Feb 2024 - Present',
    description: ['Designed and developed a scalable, end-to-end system for monitoring, managing, and supporting the Ethernet network infrastructure. The platform includes real-time network analytics, proactive incident detection, and a robust internal ticketing solution for operational teams. This integrated web and mobile tool empowers teams to quickly identify, track, and resolve Ethernet-related issues, improving service uptime, reducing MTTR (Mean Time to Repair), and streamlining overall network operations.'],
    achievements: [
      'Architected and delivered scalable web and mobile solutions using MEAN/MERN stacks, React Native, and Ionic, enabling real-time Ethernet network monitoring, incident ticketing, and cross-platform operations for internal teams',
      'Integrated AWS and Azure cloud services (Lambda, S3, DynamoDB, Functions, AD SSO), containerized microservices with Docker and Kubernetes, and built CI/CD pipelines using GitHub Actions and Jenkins for seamless, secure, and automated deployments.',
      'Modernized legacy UIs with React 17+ and Angular, utilizing Hooks, Suspense, Redux, and NGRX. Enhanced performance with lazy loading and real-time ticket updates via WebSockets and FCM, reducing UI load times and improving user responsiveness.'
    ],
    technologies: ['Angular', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'React Native', 'Ionic', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Git', 'Jira', 'Agile', 'Scrum'],
    logoUrl: tmo
  },
  {
    id: '2',
    company: 'Walmart',
    role: 'Senior Software Engineer',
    period: 'June 2023 - Dec 2023',
    description: ['Developed and maintained a full-stack, enterprise-grade code quality and analysis platform used by Walmart developers across teams — supporting real-time scanning, insights, and integrations to promote DevSecOps and coding best practices. '],
    achievements: [
      'Delivered a comprehensive web and mobile code quality analysis tool using React.js, Angular 16, Ionic, and Cordova—enabling seamless cross-device usability, responsive UI, and reusable component architectures powered by Redux and NGRX.',
      'Engineered real-time updates via WebSockets and Firebase Cloud Messaging, integrated REST/GraphQL APIs, and built event-driven microservices using Node.js, Kafka, and RabbitMQ—all backed by serverless compute with AWS Lambda and Azure Functions for high efficiency.',
      'Boosted load performance using lazy loading, SSR (Next.js), and async rendering. Automated multi-platform CI/CD with GitHub Actions and Jenkins, and enhanced native mobile capabilities with Ionic Capacitor, IndexedDB offline support, and integrations with Kotlin, Swift, and J2ME backends.'
    ],
    technologies: ['React', 'Redux', 'Express.js', 'MongoDB', 'GraphQL', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins', 'Next.js', 'Ionic', 'Capacitor', 'Angular', 'Node.js', 'TypeScript', 'Java', 'Kotlin', 'Swift', 'J2ME'],
    logoUrl: walmart
  },
  {
    id: '3',
    company: 'Amazon',
    role: 'Business Intelligence Engineer',
    period: 'Aug 2018 - Sept 2022',
    description: ['Designed and delivered an internal payroll automation and timecard management system for Amazon HR, combining real-time dashboards, cloud-native APIs, and full-stack microservices.'],
    achievements: [
      'Built and maintained Amazon’s internal payroll and attendance system using MEAN/MERN stacks and hybrid mobile apps (Ionic, Cordova), enabling cross-platform access, real-time dashboards, and secure employee self-service portals for timecards, paystubs, and benefits.',
      'Engineered Node.js-based microservices with REST and GraphQL APIs to automate payroll workflows, integrate third-party systems (ADP, Paychex), and support real-time communication using WebSockets, Redis Pub/Sub, and Firebase Cloud Messaging (FCM).',
      'Deployed CI/CD pipelines (GitHub Actions, Jenkins, Docker), integrated AWS services (Lambda, S3, Glue, Redshift) and Azure tools for cloud-native scalability. Secured systems with OAuth 2.0, JWT, RBAC, and API-level encryption, achieving 95%+ test coverage and streamlined HR operations.'
    ],
    technologies: ['Angular', 'Java', 'Spring Boot', 'AWS Lambda', 'DynamoDB', 'Python', 'React', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes', 'Jenkins', 'Azure', 'GraphQL', 'Redis', 'RabbitMQ', 'OAuth 2.0', 'JWT', 'RBAC', 'API Encryption', 'WebSockets', 'FCM', 'CI/CD', 'AWS Lambda', 'DynamoDB', 'Python', 'React', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes', 'Jenkins', 'Azure', 'GraphQL', 'Redis', 'RabbitMQ', 'OAuth 2.0', 'JWT', 'RBAC', 'API Encryption', 'WebSockets', 'FCM', 'CI/CD'],
    logoUrl: amazon
  },
  {
    id: '4',
    company: 'Cosmosoft',
    role: 'Software Developer',
    period: 'Jan 2018 - Aug 2018',
    description: ['Started career as a junior developer working on web applications for various clients. Built a full-featured e-commerce platform using the MERN stack, delivering responsive UI/UX, secure payment flows, and cloud-scalable infrastructure'],
    achievements: [
      'Designed and delivered a scalable e-commerce solution using the MERN stack and React Native, offering seamless shopping across web and mobile. Developed responsive UIs, secure checkout with Stripe/PayPal, and robust shopping cart experiences optimized for performance and user engagement.',
      'Built Node.js and AWS Lambda APIs with RESTful endpoints, JWT auth, and RBAC via SailPoint and IAM. Integrated MongoDB, DynamoDB, and Cassandra for flexible, high-volume product and order management, with fraud prevention and PCI-DSS-compliant payment flows using 3D Secure and tokenized gateways.',
      'Containerized services with Docker, deployed on GCP Kubernetes, and managed CI/CD pipelines via Jenkins. Leveraged AWS Step Functions, Workato, and Camunda BPMN to automate CRM, procurement, and logistics workflows—ensuring reliability, scalability, and operational efficiency.'
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'jQuery', 'PHP', 'MySQL', 'Bootstrap', 'Node.js', 'AWS Lambda', 'MongoDB', 'Docker', 'Kubernetes', 'Jenkins'],
    logoUrl: cosmosoft
  }
];