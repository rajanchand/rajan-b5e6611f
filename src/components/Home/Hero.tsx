
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="section">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8 overflow-hidden rounded-full h-60 w-60 md:h-72 md:w-72 border-4 border-white shadow-lg"
        >
          <img
            src="/profile.jpg" 
            alt="Rajan Prakash Chand"
            className="h-full w-full object-cover"
            onError={(e) => {
              // Fallback image if profile image fails to load
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80';
            }}
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 font-bold leading-tight"
        >
          Hi I'm, <span className="text-primary">Rajan Prakash Chand</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <p className="text-xl text-balance">
            A Network engineer driven by curiosity and desire to push the boundaries of what is possible with technology.
            With over four years of experience working in the IT industry, I have gained a deep understanding of software design 
            and development principles, as well as expertise in various programming languages and frameworks.
          </p>
          <p className="mt-4 text-xl text-balance">
            I believe that diversity is essential to creating truly innovative solutions, and I am committed 
            to bringing my unique background and perspective to every project I work on.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Feel free to read, comment and share. Enjoy reading!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/contact" className="btn btn-primary flex items-center gap-2">
            <MessageCircle size={18} />
            <span>Message Me</span>
          </Link>
          <a href="tel:+1234567890" className="btn btn-secondary flex items-center gap-2">
            <Phone size={18} />
            <span>Contact Me</span>
          </a>
          <a 
            href="https://linktr.ee/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn glass hover:bg-primary/5 flex items-center gap-2"
          >
            <ExternalLink size={18} />
            <span>Linktree</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
