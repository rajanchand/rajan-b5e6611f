
import { motion } from "framer-motion";

type WorkCardProps = {
  company: string;
  position: string;
  period: string;
  description: string;
  index: number;
};

export default function WorkCard({
  company,
  position,
  period,
  description,
  index,
}: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group hover:translate-y-[-5px]"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
        <h3 className="font-bold text-xl md:text-2xl">{company}</h3>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <h4 className="text-primary text-lg font-medium mb-3">{position}</h4>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
