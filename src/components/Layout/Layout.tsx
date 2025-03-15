
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopFooter from "./TopFooter";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
  sectionRefs?: {
    home: React.RefObject<HTMLDivElement>;
    education: React.RefObject<HTMLDivElement>;
    work: React.RefObject<HTMLDivElement>;
    skills: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
    appointment: React.RefObject<HTMLDivElement>;
  };
}

export default function Layout({ children, sectionRefs }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopFooter />
      <Header sectionRefs={sectionRefs} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-grow pt-24"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
