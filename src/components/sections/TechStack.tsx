'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import AnimateDescription from '@/components/ui/AnimateDescription';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVite,
  SiSpring,
  SiHibernate,
  SiJsonwebtokens,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiApachemaven,
  SiPostman,
  SiIntellijidea,
  SiVercel,
  SiRender,
  SiNodedotjs,
  SiExpress,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi, TbDatabase } from 'react-icons/tb';

const NeonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.5 2.25A2.25 2.25 0 0 0 2.25 4.5v15a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25h-15zm3 3.75h3.75l5.25 9.75V6h3v12h-3.75L10.5 8.25V18h-3V6z" />
  </svg>
);

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }> | string;
  color?: string;
}

interface StackSection {
  id: string;
  title: string;
  technologies: TechItem[];
}

const STACK_SECTIONS: StackSection[] = [
  {
    id: 'frontend',
    title: 'FRONTEND',
    technologies: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
    ],
  },
  {
    id: 'backend',
    title: 'BACKEND',
    technologies: [
      { name: 'Java', icon: FaJava, color: '#E76F00' },
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
      { name: 'Spring Security', icon: SiSpring, color: '#6DB33F' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'Hibernate', icon: SiHibernate, color: '#59666C' },
      { name: 'REST APIs', icon: TbApi, color: '#009688' },
      { name: 'JWT Auth', icon: SiJsonwebtokens, color: '#D63AF9' },
    ],
  },
  {
    id: 'database',
    title: 'DATABASE',
    technologies: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'H2 Database', icon: TbDatabase, color: '#E6B800' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
    ],
  },
  {
    id: 'tools',
    title: 'TOOLS',
    technologies: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Maven', icon: SiApachemaven, color: '#C71A36' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: '#FE315D' },
      {
        name: 'Antigravity IDE',
        icon: 'https://media.licdn.com/dms/image/v2/D560BAQG5wmEaqHfmDg/company-logo_200_200/B56ZqUSJh0I4AM-/0/1763424377586/google_antigravity_logo?e=2147483647&v=beta&t=09EGMp77uIgS77oquLNRli_4mMEV8oGvXklIXLBP6YM',
      },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
      { name: 'NeonDB', icon: NeonIcon, color: '#00E599' },
    ],
  },
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const headingText = 'My Tech Stack';
  const descriptionText =
    'A selection of technologies I use to design, build, and deploy Java full stack web applications.';

  useGSAP(
    () => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const items = section.querySelectorAll('.tech-item');
        const title = titleRefs.current[index];

        gsap.fromTo(
          title,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 90%', end: 'top 70%', scrub: true },
          },
        );
        gsap.fromTo(
          items,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, stagger: 0.2, ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 90%', end: 'top 70%', scrub: true },
          },
        );
      });
    },
    { scope: containerRef },
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const iconEl = e.currentTarget.querySelector('.tech-icon');
    if (!iconEl) return;
    gsap.to(iconEl, { rotation: 360, scale: 1.1, duration: 0.6, ease: 'power2.out' });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const iconEl = e.currentTarget.querySelector('.tech-icon');
    if (!iconEl) return;
    gsap.to(iconEl, { rotation: 0, scale: 1, duration: 0.5, ease: 'power2.inOut' });
  };

  return (
    <section
      ref={containerRef}
      id="TechStack"
      className="bg-ink text-light py-24 md:py-32 rounded-b-4xl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-14 hidden md:block">
          <AnimatedHeading
            text={headingText}
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-black tracking-tight leading-none uppercase mb-4"
          />
          <AnimateDescription
            text={descriptionText}
            className="text-base sm:text-lg md:text-xl text-muted font-sans leading-relaxed"
          />
        </div>

        <div className="mb-10 md:hidden">
          <AnimatedHeading
            text="My Stack"
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-black tracking-tight leading-none uppercase mb-4"
          />
        </div>

        <div className="space-y-24">
          {STACK_SECTIONS.map((stack, index) => (
            <div
              key={stack.id}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className="flex flex-col md:flex-row md:items-start md:justify-between gap-4"
            >
              <h3
                ref={(el) => { titleRefs.current[index] = el; }}
                className="md:w-1/3 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#bfbdb8] tracking-tight font-display uppercase"
              >
                {stack.title}
              </h3>

              <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {stack.technologies.map((tech, i) => {
                  const IconComp = typeof tech.icon !== 'string' ? tech.icon : null;
                  return (
                    <div
                      key={i}
                      className="tech-item flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-elevated-dark/40"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="tech-icon w-10 h-10 flex items-center justify-center relative">
                        {IconComp ? (
                          <IconComp
                            className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300"
                            style={{ color: tech.color }}
                          />
                        ) : (
                          <Image
                            src={tech.icon as string}
                            alt={tech.name}
                            width={40}
                            height={40}
                            unoptimized
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg font-mono font-medium text-light">
                        {tech.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
