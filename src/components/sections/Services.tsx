'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import AnimateDescription from '@/components/ui/AnimateDescription';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const ctx = gsap.context(() => {
      const allSections = servicesRef.current.filter(Boolean);
      const pinOffset = 50;
      allSections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: `top ${pinOffset + index * 100}px`,
          endTrigger: allSections[allSections.length - 1],
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const headingText = 'What I Do';
  const descriptionText =
    "I specialize in building full-stack web applications using Java (Spring Boot) and Node.js (Express.js) on the backend with React on the frontend. With a strong foundation across both tiers, I help bring ideas to life for businesses, startups, and product teams.";

  const services = [
    {
      id: '01',
      title: 'Full Stack Web Development',
      description:
        'Develop complete web applications using React.js on the frontend and Java Spring Boot or Node.js / Express on the backend, integrated with modern databases. End-to-end delivery from database schema to polished UI.',
      items: [
        'React.js + Spring Boot & Node.js/Express',
        'Database Schema & REST API Integration',
        'End-to-End Responsive App Architecture',
      ],
    },
    {
      id: '02',
      title: 'Backend Engineering & APIs',
      description:
        'Build secure, scalable server-side systems and RESTful APIs using Java, Spring Boot, Node.js, and Express.js. Designed for performance, maintainability, and enterprise-grade reliability.',
      items: [
        'Java, Spring Boot & Node.js / Express',
        'RESTful API Design & Middleware',
        'Hibernate ORM & Database Access',
      ],
    },
    {
      id: '03',
      title: 'Modern Frontend Development',
      description:
        'Create responsive, modern, and user-friendly interfaces using React.js, JavaScript (ES6+), HTML5, CSS3, and Vite. Focused on clean code, accessibility, and smooth user experiences across all devices.',
      items: [
        'React.js, JavaScript (ES6+), Vite',
        'Responsive & Glassmorphism UI Systems',
        'API Integration & State Management',
      ],
    },
    {
      id: '04',
      title: 'Database & Security Architecture',
      description:
        'Design relational databases, write optimized SQL queries, and implement secure user authentication and role-based access control using JWT, Spring Security, and middleware.',
      items: [
        'MySQL, PostgreSQL, NeonDB & SQLite',
        'JWT Authentication & Role-Based Security',
        'Schema Design & Query Optimization',
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="min-h-screen bg-ink text-light pt-5 md:pt-5 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-20">
          <AnimatedHeading
            text={headingText}
            className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl mt-6 md:mt-20 mb-3 md:mb-4"
          />

          <div className="grid md:grid-cols-12 gap-4 md:gap-8">
            <div className="md:col-start-6 md:col-span-7 flex flex-col md:flex-row gap-3 md:gap-10">
              <span className="text-warm uppercase text-sm md:text-base font-medium whitespace-nowrap">
                (Services)
              </span>

              <AnimateDescription
                text={descriptionText}
                className="max-w-2xl text-base sm:text-lg md:text-xl text-muted font-sans leading-relaxed"
              />
            </div>
          </div>
        </div>

        <div className="relative pb-8 md:pb-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => { servicesRef.current[index] = el; }}
              className="bg-ink pb-20 md:pb-64"
              style={{ zIndex: index + 1 }}
            >
              <div className="grid md:grid-cols-12 gap-4 items-center py-4 md:py-8 border-t border-border-subtle">
                <h3
                  className="font-display md:col-span-9 md:col-start-2 text-light font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl leading-none"
                  style={{ transform: 'translateY(-0.1em)' }}
                >
                  {service.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-12 gap-4 md:gap-8 pt-4 md:pt-6">
                <div className="md:col-span-7 md:col-start-6 space-y-4 md:space-y-6">
                  <p className="text-muted text-base sm:text-base md:text-lg lg:text-lg leading-relaxed font-sans">
                    {service.description}
                  </p>

                  <div className="divide-y divide-border-subtle">
                    {service.items.map((item, i) => (
                      <div key={i} className="py-3 flex items-center gap-3 md:gap-4">
                        <span className="text-gray-500 text-xs md:text-sm font-mono">0{i + 1}</span>
                        <span className="text-base sm:text-base md:text-lg lg:text-xl font-bold font-sans">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
