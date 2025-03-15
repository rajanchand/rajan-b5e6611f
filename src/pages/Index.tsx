
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Home/Hero";
import Education from "@/components/Sections/Education";
import Work from "@/components/Sections/Work";
import Skills from "@/components/Sections/Skills";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Appointment from "@/components/Sections/Appointment";
import { useRef } from "react";

const Index = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const appointmentRef = useRef<HTMLDivElement>(null);

  // Pass section refs to the layout for navigation
  const sectionRefs = {
    home: homeRef,
    education: educationRef,
    work: workRef,
    skills: skillsRef,
    about: aboutRef,
    contact: contactRef,
    appointment: appointmentRef
  };

  return (
    <Layout sectionRefs={sectionRefs}>
      <div id="home" ref={homeRef}>
        <Hero />
      </div>
      
      <div id="education" ref={educationRef}>
        <Education />
      </div>
      
      <div id="work" ref={workRef}>
        <Work />
      </div>
      
      <div id="skills" ref={skillsRef}>
        <Skills />
      </div>
      
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      
      <div id="appointment" ref={appointmentRef}>
        <Appointment />
      </div>
    </Layout>
  );
};

export default Index;
