import React from 'react';
import About from './AboutMe';
import Services from './Services';
import TechStack from './TechStack';
import Experience from './Experience';
interface ReuniteBlackProps {
  techStackRef: React.RefObject<HTMLDivElement | null> | any;
}

const ReuniteBlack: React.FC<ReuniteBlackProps> = ({ techStackRef }) => {
  return (
    <>
      <About />
      <Services />

      <div ref={techStackRef}>
        <TechStack />
      </div>

      <Experience />
    </>
  );
};

export default ReuniteBlack;
