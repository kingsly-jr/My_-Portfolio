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
];

export function getAllProjects(): Project[] {
  return projects;
}
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

