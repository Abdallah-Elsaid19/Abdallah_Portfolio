import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border ">
      <div className="container mx-auto px-6 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Abdallah Elsaid. All rights reserved.
          </p>
        
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
