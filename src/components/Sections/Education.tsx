
import { motion } from "framer-motion";
import EducationCard from "@/components/Education/EducationCard";

const educationData = [
  {
    institution: "Massachusetts Institute of Technology",
    degree: "Master of Computer Science",
    period: "2018 - 2020",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png",
  },
  {
    institution: "Stanford University",
    degree: "Bachelor of Science in Network Engineering",
    period: "2014 - 2018",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png",
  },
  {
    institution: "Harvard Extension School",
    degree: "Certificate in Cloud Computing",
    period: "2020 - 2021",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png",
  },
  {
    institution: "Cisco Networking Academy",
    degree: "CCNA & CCNP Certification",
    period: "2017",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1200px-Cisco_logo.svg.png",
  },
];

const Education = () => {
  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Education</h1>
        <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
          My academic journey has equipped me with both theoretical knowledge and practical skills
          in network engineering and computer science.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {educationData.map((education, i) => (
          <EducationCard
            key={i}
            institution={education.institution}
            degree={education.degree}
            period={education.period}
            logo={education.logo}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
