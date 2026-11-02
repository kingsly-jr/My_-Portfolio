export interface Project {
  id: number;
  slug: string;
  title: string;
  year: string;
  tech: string[];
  description: string;
  myRole: string[];
  images: string[];
  hoverImage: string;
  github: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1002,
    slug: 'honey-e-comm',
    title: 'Golden Hive',
    year: '2026',
    tech: [
      'Next.js 16',
      'React 19',
      'Tailwind CSS v4',
      'Prisma ORM 6',
      'PostgreSQL',
      'NeonDB',
      'Razorpay',
      'Zod',
      'PDFKit',
      'Lucide Icons',
      'Vercel',
    ],
    description:
      'Golden Hive is an artisanal, luxury raw honey e-commerce platform showcasing single-origin mountain harvests and bioactive apiculture. Engineered with Next.js 16 App Router, Server Actions, and Prisma ORM with Neon PostgreSQL, it features dynamic jar-size pricing, multi-attribute catalog filtering, secure Razorpay checkout, automated PDF invoices via PDFKit, and an Apiary OS admin console for critical stock alerts and order dispatch.',
    myRole: [
      'Architected full-stack e-commerce architecture utilizing Next.js 16 App Router, Server Actions, and Route Handlers for high-performance server-side rendering.',
      'Designed scalable relational database schemas with Prisma ORM 6 connected to Neon Serverless PostgreSQL.',
      'Engineered dynamic jar-sizing options (250g, 500g, 1000g) with reactive price recalculations and live inventory stock level indicators.',
      'Built multi-facet sidebar filtering across botanical honey varieties, signature collections, and customer ratings.',
      'Integrated Razorpay payment rails (UPI, Credit/Debit Cards, NetBanking) with cryptographic HMAC-SHA256 signature verification and strict Zod validation.',
      'Implemented automated invoice and packing slip generation using PDFKit for instant post-purchase customer downloads.',
      'Constructed the Apiary OS Admin Management Console featuring gross revenue telemetry, critical inventory watchlists with restock triggers, and customer order management.',
      'Crafted an artisanal, warm-gold responsive aesthetic using Tailwind CSS v4 and deployed seamlessly to Vercel.',
    ],
    images: [
      '/Projects/Project - Honey-E Comm/Screenshot 2026-11-02 213502.png',
      '/Projects/Project - Honey-E Comm/Screenshot 2026-11-02 213513.png',
      '/Projects/Project - Honey-E Comm/Screenshot 2026-11-02 213532.png',
      '/Projects/Project - Honey-E Comm/Screenshot 2026-11-02 213545.png',
      '/Projects/Project - Honey-E Comm/Screenshot 2026-11-02 213602.png',
      '/Projects/Project - Honey-E Comm/Screenshot 2026-11-02 213645.png',
    ],
    hoverImage: '/Projects/Project - Honey-E Comm/Screenshot 2026-11-02 213502.png',
    github: 'https://github.com/kingsly-jr/Honey-E-Commerce-Site',
    liveUrl: 'https://honey-e-commerce-site.vercel.app/',
  },
  {
    id: 1001,
    slug: 'crackers',
    title: 'Zenyne Crackers',
    year: '2026',
    tech: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'PostgreSQL',
      'NeonDB',
      'Razorpay',
      'Render',
    ],
    description:
      'Zenyne Crackers is a full-stack celebration fireworks and Sivakasi pyrotechnics web platform engineered for wholesale and festive retail purchasing. Built with a React + Vite frontend and a Java Spring Boot REST API backend backed by PostgreSQL on NeonDB, it features a fast-order estimation table with dynamic quantity counters and a floating batch cart dock, categorized pyrotechnic showcases, automated invoice generation, Razorpay checkout, and an admin fulfillment pipeline tracking orders from packing to dispatch.',
    myRole: [
      'Architected an interactive, rapid-order estimation table in React and Tailwind CSS allowing customers to adjust package quantities with instant line item calculations.',
      'Engineered a persistent floating batch dock summarizing selected articles and batch subtotal with a one-click "Confirm & Add to Cart" workflow.',
      'Designed and implemented robust RESTful APIs using Java and Spring Boot with Hibernate and Spring Data JPA for catalog, order, and customer management.',
      'Configured and connected PostgreSQL hosted on NeonDB with optimized relational data models for pyrotechnic taxonomies and order tracking.',
      'Integrated Razorpay payment processing and automated order invoice generation for seamless checkout confirmation.',
      'Constructed an executive Admin Storefront Overview dashboard featuring catalog metrics, recent celebration orders, and a 4-stage fulfillment pipeline (Pending, In Packing, Dispatched, Delivered).',
      'Deployed both client and server applications in production on Render with zero-downtime containerized workflows.',
    ],
    images: [
      '/Projects/Project - Crackers/Screenshot 2026-11-02 214354.png',
      '/Projects/Project - Crackers/Screenshot 2026-11-02 214406.png',
      '/Projects/Project - Crackers/Screenshot 2026-11-02 214431.png',
      '/Projects/Project - Crackers/Screenshot 2026-11-02 214445.png',
      '/Projects/Project - Crackers/Screenshot 2026-11-02 214500.png',
      '/Projects/Project - Crackers/Screenshot 2026-11-02 214544.png',
    ],
    hoverImage: '/Projects/Project - Crackers/Screenshot 2026-11-02 214354.png',
    github: 'https://github.com/kingsly-jr/Crackers-Website',
    liveUrl: 'https://crackers-website-8c37.onrender.com/',
  },
  {
    id: 1000,
    slug: 'saloon',
    title: 'Vérro Salon',
    year: '2026',
    tech: [
      'React',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'Framer Motion',
      'LocalStorage',
      'ESLint',
      'Vercel',
    ],
    description:
      'VÉRRO is an editorial-grade, luxury salon and bespoke barbershop web platform engineered to eliminate waiting room friction. Built with modern React and an event-driven, reactive client data engine, VÉRRO bridges the gap between public customer booking transparency and high-throughput salon floor management.',
    myRole: [
      'Engineered an editorial-grade, responsive user interface using React, Vite, and Tailwind CSS with fluid micro-interactions powered by Framer Motion.',
      'Built a reactive client-side state and persistence engine backed by LocalStorage to synchronize barber chair telemetry, live queue counts, and booking records.',
      'Architected a 4-step interactive appointment booking modal (Service selection, Stylist picking, Time slot scheduling, and Guest details).',
      'Developed a real-time Barber Stations & Chairs occupancy monitor reflecting live statuses (Available, In Service, On Break, Off Duty) and estimated customer wait times.',
      'Created a categorized Services Catalog with real-time text search, category filtering (Hair, Beard, Facial, Hair Spa, Packages), and transparent service inclusions.',
      'Constructed an executive Admin Sanctuary Control Tower dashboard featuring 7-day revenue performance curves, hourly footfall distribution charts, and station dispatcher controls.',
      'Integrated chair-side service actions allowing administrators to mark services completed, seat next waiting guests, and manage stylist rest breaks.',
      'Configured strict ESLint linting rules, code quality standards, and automated deployment pipelines on Vercel.',
    ],
    images: [
      '/Projects/Project - Saloon/Screenshot 2026-11-02 210056.png',
      '/Projects/Project - Saloon/Screenshot 2026-11-02 210112.png',
      '/Projects/Project - Saloon/Screenshot 2026-11-02 210138.png',
      '/Projects/Project - Saloon/Screenshot 2026-11-02 210201.png',
      '/Projects/Project - Saloon/Screenshot 2026-11-02 210217.png',
      '/Projects/Project - Saloon/Screenshot 2026-11-02 210242.png',
      '/Projects/Project - Saloon/Screenshot 2026-11-02 211425.png',
      '/Projects/Project - Saloon/Screenshot 2026-11-02 211437.png',
    ],
    hoverImage: '/Projects/Project - Saloon/Screenshot 2026-11-02 210056.png',
    github: 'https://github.com/kingsly-jr/Saloon-Website',
    liveUrl: 'https://saloon-website-ochre.vercel.app/',
  },
  {
    id: 999,
    slug: 'lms',
    title: 'LearnSphere LMS',
    year: '2026',
    tech: ['React 18', 'Vite', 'Java 17', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'NeonDB', 'Razorpay API', 'Vanilla CSS'],
    description:
      'A modern, full-stack Learning Management System designed to connect students with expert instructors. It features dedicated portals for students, instructors, and administrators, supporting interactive course enrollments, video lectures, and certificates.',
    myRole: [
      'Built a comprehensive Student Portal with course catalog browsing, secure enrollments via Razorpay, interactive video lectures, and automated certificates.',
      'Developed an Instructor Dashboard to create multi-lesson courses, upload videos, track student engagement, and review assignment submissions.',
      'Implemented an Administrator Panel for full CRUD operations on users, course category management, and platform revenue monitoring.',
      'Architected a robust backend using Java, Spring Boot 3, and PostgreSQL (deployed on NeonDB), secured with stateless JWT authentication and Role-Based Access Control (RBAC).',
      'Designed a fully responsive frontend utilizing React 18, Vite, and a custom Glassmorphism UI design system.',
    ],
    images: [
      '/Projects/Project - LMS/Screenshot 2026-07-27 143053.png',
      '/Projects/Project - LMS/Screenshot 2026-07-27 143910.png',
      '/Projects/Project - LMS/Screenshot 2026-07-27 143921.png',
      '/Projects/Project - LMS/Screenshot 2026-07-27 143931.png',
      '/Projects/Project - LMS/Screenshot 2026-07-27 143939.png',
      '/Projects/Project - LMS/Screenshot 2026-07-27 143947.png',
      '/Projects/Project - LMS/Screenshot 2026-07-27 143957.png',
      '/Projects/Project - LMS/Screenshot 2026-07-27 144106.png'
    ],
    hoverImage: '/Projects/Project - LMS/Screenshot 2026-07-27 143053.png',
    github: 'https://github.com/kingsly-jr/Learning-Management-System',
    liveUrl: 'https://learning-management-system-1-79m3.onrender.com',
  },
  {
    id: 998,
    slug: 'tms',
    title: 'Task Management System',
    year: '2026',
    tech: ['React.js', 'Vite', 'Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'NeonDB', 'JWT'],
    description:
      'Developed a full-stack Task Management System that enables organizations to efficiently manage projects, tasks, and teams. The application includes secure JWT-based authentication, role-based access control (Admin, Project Manager, Team Member), project and task management, a Kanban board, activity logs, and real-time project progress tracking.',
    myRole: [
      'Designed and developed RESTful APIs using Spring Boot for user, project, task, and team management.',
      'Implemented JWT authentication and role-based authorization for secure access to application features.',
      'Built responsive React.js interfaces for project dashboards, Kanban task management, and user administration.',
      'Designed the PostgreSQL database schema and implemented CRUD operations using Spring Data JPA/Hibernate.',
      'Integrated frontend and backend using Axios, with validation, error handling, and role-based navigation.',
    ],
    images: [
      '/Projects/Project - TMS/Screenshot 2026-07-28 102416.png',
      '/Projects/Project - TMS/Screenshot 2026-07-28 101011.png',
      '/Projects/Project - TMS/Screenshot 2026-07-28 101030.png',
      '/Projects/Project - TMS/Screenshot 2026-07-28 101052.png',
      '/Projects/Project - TMS/Screenshot 2026-07-28 101124.png',
      '/Projects/Project - TMS/Screenshot 2026-07-28 101251.png',
      '/Projects/Project - TMS/Screenshot 2026-07-28 101311.png',
      '/Projects/Project - TMS/Screenshot 2026-07-28 102254.png',
      '/Projects/Project - TMS/Screenshot 2026-07-28 102312.png',
      '/Projects/Project - TMS/Screenshot 2026-07-28 102321.png',
      '/Projects/Project - TMS/Screenshot 2026-07-28 102332.png',
      '/Projects/Project - TMS/Screenshot 2026-07-28 102345.png',
      '/Projects/Project - TMS/Screenshot 2026-07-28 102405.png'
    ],
    hoverImage: '/Projects/Project - TMS/Screenshot 2026-07-28 102416.png',
    github: 'https://github.com/kingsly-jr/Task-Management-System',
    liveUrl: 'https://task-management-system-1-0sf4.onrender.com',
  },
  {
    id: 997,
    slug: 'bakery',
    title: 'Zenyne Bakery',
    year: '2026',
    tech: [
      'Next.js',
      'Tailwind CSS',
      'JavaScript',
      'PostgreSQL',
      'NeonDB',
      'Vercel',
      'Vercel Blob',
      'Razorpay',
    ],
    description:
      'Developed a premium bakery e-commerce platform with an elegant, responsive UI and a sophisticated cream-and-chocolate aesthetic. It features dynamic product and category management, interactive product cards and variants, shopping cart and online checkout with payment integration, an admin dashboard for inventory and orders, and an engaging promotional homepage.',
    myRole: [
      'Designed and developed reusable UI components and responsive layouts for desktop, tablet, and mobile devices.',
      'Implemented dynamic CRUD operations and catalog management for bakery categories and products (cakes, pastries, breads, cookies).',
      'Integrated frontend components with backend APIs and a PostgreSQL database hosted on NeonDB.',
      'Developed seamless product browsing, cart management, order placement, and checkout workflows.',
      'Integrated Razorpay payment processing and real-time order status tracking.',
      'Built an administrative dashboard to manage products, categories, inventory, customer orders, and availability.',
      'Managed cloud media storage with Vercel Blob and optimized image loading for high performance.',
      'Implemented robust client and server validation, error handling, and handled production deployment on Vercel.',
    ],
    images: [
      '/Projects/Project - Bakery/Screenshot 2026-10-26 214607.png',
      '/Projects/Project - Bakery/Screenshot 2026-10-26 214623.png',
      '/Projects/Project - Bakery/Screenshot 2026-10-26 214635.png',
      '/Projects/Project - Bakery/Screenshot 2026-10-26 214703.png',
      '/Projects/Project - Bakery/Screenshot 2026-10-26 214718.png',
      '/Projects/Project - Bakery/Screenshot 2026-10-26 214729.png',
      '/Projects/Project - Bakery/Screenshot 2026-10-26 214741.png',
      '/Projects/Project - Bakery/Screenshot 2026-10-26 214757.png',
    ],
    hoverImage: '/Projects/Project - Bakery/Screenshot 2026-10-26 214607.png',
    github: 'https://github.com/kingsly-jr/Bakery-Site',
    liveUrl: 'https://bakery-site-eight.vercel.app',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
