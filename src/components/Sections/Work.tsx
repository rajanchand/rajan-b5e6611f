
import { motion } from "framer-motion";
import WorkCard from "@/components/Work/WorkCard";

const workData = [
  {
    company: "Google Cloud",
    position: "Senior Network Engineer",
    period: "2021 - Present",
    description: "Leading network infrastructure projects for cloud services, optimizing network performance, implementing security protocols, and collaborating with cross-functional teams to ensure seamless integration of new technologies.",
  },
  {
    company: "Amazon Web Services",
    position: "Network Engineer",
    period: "2019 - 2021",
    description: "Designed and maintained scalable network architectures for AWS clients, troubleshot complex network issues, and implemented automation solutions to streamline network management processes.",
  },
  {
    company: "Cisco Systems",
    position: "Junior Network Administrator",
    period: "2017 - 2019",
    description: "Assisted in the management of network infrastructure, provided technical support for networking equipment, and participated in the implementation of network security measures.",
  },
];

const Work = () => {
  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
          Over the years, I've been fortunate to work with innovative companies
          where I've applied and expanded my network engineering expertise.
        </p>
      </motion.div>

      <div className="space-y-6">
        {workData.map((work, i) => (
          <WorkCard
            key={i}
            company={work.company}
            position={work.position}
            period={work.period}
            description={work.description}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
