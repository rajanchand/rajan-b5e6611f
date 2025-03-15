
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Calendar() {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div ref={calendarRef} className="h-[700px] min-h-[600px] w-full">
        <div
          className="calendly-inline-widget h-full w-full"
          data-url={`https://calendly.com/rajanchand48?hide_landing_page_details=1&hide_gdpr_banner=1`}
        ></div>
      </div>
    </motion.div>
  );
}
