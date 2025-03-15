
import { motion } from "framer-motion";
import Layout from "@/components/Layout/Layout";
import { Github, Linkedin, Twitter, Mail, Calendar, MapPin, HeartIcon } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Get to know me better, both professionally and personally.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-1"
            >
              <div className="card">
                <div className="mb-6 overflow-hidden rounded-lg aspect-square">
                  <img
                    src="/profile.jpg"
                    alt="Rajan Prakash Chand"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      // Fallback image if profile image fails to load
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80';
                    }}
                  />
                </div>

                <h2 className="text-2xl font-bold mb-2">Rajan Prakash Chand</h2>
                <p className="text-primary font-medium mb-4">Network Engineer</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-muted-foreground" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-muted-foreground" />
                    <a href="mailto:rajanchand48@gmail.com" className="hover:text-primary">
                      rajanchand48@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-muted-foreground" />
                    <span>Available for opportunities</span>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn hover:bg-primary/10"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn hover:bg-primary/10"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn hover:bg-primary/10"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="mailto:rajanchand48@gmail.com"
                    className="icon-btn hover:bg-primary/10"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-2"
            >
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">My Journey</h2>
                <div className="space-y-4">
                  <p>
                    With over four years of experience in the IT industry, I've developed a passion for network engineering
                    and the technologies that connect our digital world. My journey began with a curiosity about how the internet
                    works, which led me to pursue formal education in networking and computer science.
                  </p>
                  <p>
                    Throughout my career, I've had the opportunity to work with leading tech companies, where I've gained
                    hands-on experience with cutting-edge networking technologies and methodologies. From managing complex
                    network infrastructures to implementing security protocols and automation solutions, I've developed a
                    comprehensive skill set that allows me to tackle diverse networking challenges.
                  </p>
                  <p>
                    I believe in the power of continuous learning and staying updated with the latest industry trends.
                    This approach has enabled me to adapt to the rapidly evolving tech landscape and deliver innovative
                    solutions that meet modern networking demands.
                  </p>
                  <p>
                    Beyond technical skills, I value collaboration, clear communication, and a user-centered approach to
                    problem-solving. I'm dedicated to creating network solutions that not only function efficiently but
                    also enhance the overall user experience.
                  </p>
                </div>

                <div className="border-t border-border mt-8 pt-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <HeartIcon size={20} className="text-primary" />
                    <span>Personal Interests</span>
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="bg-secondary/60 rounded-lg p-3 text-center">
                      <span className="font-medium">Tech Innovation</span>
                    </div>
                    <div className="bg-secondary/60 rounded-lg p-3 text-center">
                      <span className="font-medium">Mountain Hiking</span>
                    </div>
                    <div className="bg-secondary/60 rounded-lg p-3 text-center">
                      <span className="font-medium">Photography</span>
                    </div>
                    <div className="bg-secondary/60 rounded-lg p-3 text-center">
                      <span className="font-medium">Open Source</span>
                    </div>
                    <div className="bg-secondary/60 rounded-lg p-3 text-center">
                      <span className="font-medium">Science Fiction</span>
                    </div>
                    <div className="bg-secondary/60 rounded-lg p-3 text-center">
                      <span className="font-medium">Travel</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
