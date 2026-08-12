'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import AnimateDescription from '@/components/ui/AnimateDescription';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
  technologies: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: '01',
    role: 'Java Full Stack Developer',
    company: 'RORIRI SOFTWARE SOLUTIONS PVT. LTD.',
    location: 'RORIRI IT PARK, Nallanathapuram, Kalakkad, Tamil Nadu, India',
    period: 'May 2026 – Present',
    isCurrent: true,
    responsibilities: [
      'Developed full-stack application modules using Java, Spring Boot, and database technologies, following clean and maintainable development practices.',
      'Built RESTful APIs and CRUD functionality using Spring Boot and Spring Data JPA for efficient application and data management.',
      'Implemented database integration with MySQL and PostgreSQL using JDBC and JPA, handling reliable data persistence and retrieval.',
      'Applied Core Java, OOP, and Collections Framework concepts to develop efficient backend components and tested API functionality using Postman.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'JDBC',
      'Spring Data JPA',
      'MySQL',
      'PostgreSQL',
      'Postman',
    ],
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingText = 'Experience';
  const descriptionText =
    'My professional journey and key engineering contributions in software development.';

  useGSAP(
    () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 0.5,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="experience"
      className="bg-ink text-light py-24 md:py-32 border-t border-border-subtle/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section Heading */}
        <div className="mb-16 hidden md:block">
          <AnimatedHeading
            text={headingText}
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-black tracking-tight leading-none uppercase mb-4"
          />
          <AnimateDescription
            text={descriptionText}
            className="text-base sm:text-lg md:text-xl text-muted font-sans leading-relaxed"
          />
        </div>

        <div className="mb-12 md:hidden">
          <AnimatedHeading
            text="Experience"
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-black tracking-tight leading-none uppercase mb-4"
          />
          <p className="text-muted text-sm sm:text-base font-sans mt-2">
            {descriptionText}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-4 sm:pl-8 border-l border-forest/30 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="relative group"
            >
              {/* Node indicator on vertical line */}
              <div className="absolute -left-[21px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-forest border-4 border-ink group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(70,227,183,0.5)]" />

              {/* Experience Card */}
              <div className="bg-elevated-dark/20 border border-elevated-dark/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 hover:border-forest/40 transition-all duration-300 shadow-xl">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-border-subtle/40">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-cream">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-3 py-0.5 text-xs font-mono font-medium rounded-full bg-forest/20 text-forest border border-forest/30 uppercase tracking-wider">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-muted text-sm sm:text-base">
                      <span className="flex items-center gap-1.5 font-medium text-warm">
                        <FaBriefcase className="text-forest w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-sans text-gray-mid">
                        <FaMapMarkerAlt className="text-forest/70 w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period pill */}
                  <div className="flex items-center gap-2 self-start lg:self-center px-4 py-2 rounded-full bg-ink/60 border border-border-subtle text-xs sm:text-sm font-mono text-cream">
                    <FaCalendarAlt className="text-forest w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="mb-6 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gray-mid mb-3">
                    Key Responsibilities & Contributions
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm sm:text-base text-muted leading-relaxed"
                      >
                        <FaCheckCircle className="text-forest w-4 h-4 mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Pills */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gray-mid mb-3">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-ink/80 text-light border border-border-subtler hover:border-forest/50 transition-colors"
                      >
                        {tech}
                      </span>
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

export default Experience;
