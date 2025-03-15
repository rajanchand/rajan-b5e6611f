
import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Link } from "react-router-dom";

export default function TopFooter() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="bg-secondary/50 border-b border-border/70 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center py-2">
          {/* Date and Time */}
          <div className="text-sm text-muted-foreground mb-2 md:mb-0">
            <span className="font-medium">{formatDate(currentTime)}</span>
            <span className="mx-2">|</span>
            <span className="text-primary font-medium">{formatTime(currentTime)}</span>
          </div>
          
          {/* Contact Icons */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:+1234567890" 
              className="icon-btn hover:bg-primary/10 text-sm flex items-center gap-1"
              aria-label="Call me"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">Call Me</span>
            </a>
            <a 
              href="mailto:rajanchand48@gmail.com" 
              className="icon-btn hover:bg-primary/10 text-sm flex items-center gap-1"
              aria-label="Email me"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">Email Me</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
