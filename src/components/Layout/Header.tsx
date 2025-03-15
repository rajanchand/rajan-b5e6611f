
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "work", label: "Work Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "appointment", label: "Schedule" },
];

interface HeaderProps {
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

export default function Header({ sectionRefs }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      if (sectionRefs) {
        const scrollPosition = window.scrollY + 100; // offset for header

        // Check which section is in view
        for (const [id, ref] of Object.entries(sectionRefs)) {
          if (ref.current) {
            const element = ref.current;
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
              setActiveSection(id);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  const scrollToSection = (id: string) => {
    if (sectionRefs && sectionRefs[id as keyof typeof sectionRefs]) {
      const section = sectionRefs[id as keyof typeof sectionRefs].current;
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80, // Offset for header
          behavior: "smooth",
        });
      }
    }
    
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="text-2xl font-semibold tracking-tight flex items-center"
        >
          <span className="text-primary">Rajan</span>
          <span className="ml-1">Chand</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden icon-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass shadow-lg border-t border-white/10 overflow-hidden"
        >
          <nav className="flex flex-col py-4 px-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`nav-link py-3 text-center ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
