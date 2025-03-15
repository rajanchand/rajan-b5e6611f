
import { motion } from "framer-motion";

type EducationCardProps = {
  institution: string;
  degree: string;
  period: string;
  logo: string;
  index: number;
};

export default function EducationCard({
  institution,
  degree,
  period,
  logo,
  index,
}: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card flex flex-col md:flex-row gap-4 hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-secondary rounded-full flex items-center justify-center overflow-hidden mx-auto md:mx-0">
        <img 
          src={logo} 
          alt={institution} 
          className="h-full w-full object-contain p-2"
          onError={(e) => {
            // Fallback for failed image load
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80?text=School';
          }}
        />
      </div>
      <div className="flex-grow text-center md:text-left">
        <h3 className="font-bold text-xl">{institution}</h3>
        <p className="text-primary font-medium">{degree}</p>
        <p className="text-sm text-muted-foreground mt-1">{period}</p>
      </div>
    </motion.div>
  );
}
