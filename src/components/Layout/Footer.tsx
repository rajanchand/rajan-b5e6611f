
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Link } from "react-router-dom";
import { 
  Phone, 
  MessageCircle, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Instagram
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [browserInfo, setBrowserInfo] = useState({
    browser: "Unknown",
    ipAddress: "Loading...",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Detect browser
    const detectBrowser = () => {
      const userAgent = navigator.userAgent;
      let browserName = "Unknown";
      
      if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome";
      } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
      } else if (userAgent.match(/safari/i)) {
        browserName = "Safari";
      } else if (userAgent.match(/opr\//i)) {
        browserName = "Opera";
      } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
      }
      
      return browserName;
    };

    // Get IP address (using a free API)
    const getIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
      } catch (error) {
        console.error('Failed to fetch IP address', error);
        return 'Unable to detect';
      }
    };

    const setInfo = async () => {
      const browserName = detectBrowser();
      const ipAddress = await getIpAddress();
      
      setBrowserInfo({
        browser: browserName,
        ipAddress,
      });
    };

    setInfo();
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

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com" },
    { icon: Mail, label: "Email", url: "mailto:rajanchand48@gmail.com" },
  ];

  return (
    <footer className="bg-secondary/80 dark:bg-gray-900 border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Side */}
          <div className="flex flex-col">
            <div className="text-xl font-semibold mb-2">Rajan Prakash Chand</div>
            <div className="text-sm text-muted-foreground">
              <p>{formatDate(currentTime)}</p>
              <p className="text-primary font-medium">{formatTime(currentTime)}</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-3">
              <a 
                href="tel:+1234567890" 
                className="icon-btn hover:bg-primary/10"
                aria-label="Call me"
              >
                <Phone size={18} />
              </a>
              <Link 
                to="/contact" 
                className="icon-btn hover:bg-primary/10"
                aria-label="Message me"
              >
                <MessageCircle size={18} />
              </Link>
              <ThemeToggle />
            </div>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icon-btn hover:bg-primary/10"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:flex md:items-center md:justify-between">
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Rajan Prakash Chand. All rights reserved.
            </p>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Browser:</span> {browserInfo.browser}
            </p>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">IP:</span> {browserInfo.ipAddress}
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            <p className="text-center md:text-right italic">
              "The only way to do great work is to love what you do."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
