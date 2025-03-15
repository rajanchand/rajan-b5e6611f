
import { motion } from "framer-motion";
import Layout from "@/components/Layout/Layout";
import SkillCard from "@/components/Skills/SkillCard";
import { 
  Network, 
  HeadphonesIcon, 
  WrenchIcon, 
  CloudIcon,
  ServerIcon,
  ShieldIcon,
  CodeIcon,
  SettingsIcon
} from "lucide-react";

const skillsData = [
  {
    title: "Networking",
    description: "Expert in designing, implementing, and maintaining complex network infrastructures. Proficient in routing protocols, VPNs, firewalls, and SDN technologies.",
    icon: <Network size={24} />,
  },
  {
    title: "Customer Support",
    description: "Providing exceptional technical support and guidance to clients, ensuring their networking needs are met with effective and timely solutions.",
    icon: <HeadphonesIcon size={24} />,
  },
  {
    title: "Technical Support",
    description: "Diagnosing and resolving complex technical issues across various networking platforms and hardware configurations.",
    icon: <WrenchIcon size={24} />,
  },
  {
    title: "Cloud Computing",
    description: "Implementing and managing cloud-based network solutions across major platforms including AWS, Google Cloud, and Azure.",
    icon: <CloudIcon size={24} />,
  },
  {
    title: "DevOps",
    description: "Bridging the gap between network operations and development through automation, CI/CD pipelines, and infrastructure as code.",
    icon: <CodeIcon size={24} />,
  },
  {
    title: "Network Security",
    description: "Implementing robust security measures to protect network infrastructure from threats while ensuring compliance with industry standards.",
    icon: <ShieldIcon size={24} />,
  },
  {
    title: "Server Administration",
    description: "Managing and configuring servers to ensure optimal performance, reliability, and security within network environments.",
    icon: <ServerIcon size={24} />,
  },
  {
    title: "System Integration",
    description: "Seamlessly integrating various systems and technologies to create cohesive and efficient networking solutions.",
    icon: <SettingsIcon size={24} />,
  },
];

const Skills = () => {
  return (
    <Layout>
      <div className="section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            Through years of hands-on experience and continuous learning, I've developed
            a diverse set of skills that enable me to tackle complex networking challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, i) => (
            <SkillCard
              key={i}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              index={i}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
