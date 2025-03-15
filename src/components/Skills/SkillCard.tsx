
import { motion } from "framer-motion";

type SkillCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
};

export default function SkillCard({
  title,
  description,
  icon,
  index,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card hover:bg-primary/5 hover:border hover:border-primary/10 transition-all"
    >
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-3 rounded-lg mr-4 text-primary">
          {icon}
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
