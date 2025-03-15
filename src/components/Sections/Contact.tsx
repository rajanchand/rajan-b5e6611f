
import { motion } from "framer-motion";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
          Interested in working together or have a question? Reach out through the form
          below or connect with me on social media.
        </p>
      </motion.div>
      
      <ContactForm />
    </div>
  );
};

export default Contact;
