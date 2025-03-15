
import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";
import Calendar from "@/components/Appointment/Calendar";

const Appointment = () => {
  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Schedule an Appointment</h1>
        <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
          Choose a convenient time for us to connect and discuss your network engineering
          needs or potential collaboration opportunities.
        </p>
      </motion.div>
      
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="card flex items-center"
          >
            <div className="p-4 rounded-full bg-primary/10 mr-4">
              <CalendarDays size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Flexible Scheduling</h3>
              <p className="text-muted-foreground">Choose from a range of available dates</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="card flex items-center"
          >
            <div className="p-4 rounded-full bg-primary/10 mr-4">
              <Clock size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">30-Minute Sessions</h3>
              <p className="text-muted-foreground">Efficient consultations that respect your time</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Calendar />
    </div>
  );
};

export default Appointment;
