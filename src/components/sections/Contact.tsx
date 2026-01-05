// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     toast({
//       title: "Message sent!",
//       description: "Thank you for reaching out. I'll get back to you soon.",
//     });
    
//     setFormData({ name: "", email: "", message: "" });
//     setIsSubmitting(false);
//   };

//   const contactInfo = [
//     { icon: Mail, label: "Email", value: "abdallahelsaid863@gmail.com" },
//     { icon: MapPin, label: "Location", value: "Tanta , Egypt" },
//     { icon: Phone, label: "Phone", value: "+20 1067055973" },
//   ];

//   const socialLinks = [
//     { icon: Github, href: "https://github.com/Abdallah-Elsaid19", label: "GitHub" },
//     { icon: Linkedin, href: "https://www.linkedin.com/in/abdallah-elsaid19", label: "LinkedIn" },
//   ];

//   return (
//     <section id="contact" className="py-24" ref={ref}>
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-primary font-semibold text-sm uppercase tracking-wider">
//             Get In Touch
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4">
//             Let's work together
//           </h2>
//           <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
//             Have a project in mind or want to discuss an opportunity? 
//             Feel free to reach out!
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <motion.div
//                   whileFocus={{ scale: 1.02 }}
//                   className="relative"
//                 >
//                   <Input
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     required
//                     className="h-14 bg-card border-border focus:border-primary transition-all duration-300"
//                   />
//                 </motion.div>
//               </div>
//               <div>
//                 <Input
//                   type="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                   className="h-14 bg-card border-border focus:border-primary transition-all duration-300"
//                 />
//               </div>
//               <div>
//                 <Textarea
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   required
//                   rows={6}
//                   className="bg-card border-border focus:border-primary transition-all duration-300 resize-none"
//                 />
//               </div>
//               <Button 
//                 type="submit" 
//                 variant="hero" 
//                 size="lg" 
//                 className="w-full"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                     className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
//                   />
//                 ) : (
//                   <>
//                     Send Message
//                     <Send className="ml-2 h-4 w-4" />
//                   </>
//                 )}
//               </Button>
//             </form>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="space-y-8"
//           >
//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <motion.div
//                   key={info.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
//                   className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
//                 >
//                   <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
//                     <info.icon className="h-5 w-5" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">{info.label}</p>
//                     <p className="font-semibold">{info.value}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={social.label}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="p-4 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
//                     aria-label={social.label}
//                   >
//                     <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { contactSchema, ContactFormData } from "@/schema/contactSchema";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);

      await axios.post(
        "https://695b39211d8041d5eeb62629.mockapi.io/myContacts/message",
        data
      );

      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
     { icon: Mail, label: "Email", value: "abdallahelsaid863@gmail.com" },
     { icon: MapPin, label: "Location", value: "Tanta , Egypt" },
     { icon: Phone, label: "Phone", value: "+20 1067055973" },
   ];
   const socialLinks = [
     { icon: Github, href: "https://github.com/Abdallah-Elsaid19", label: "GitHub" },
     { icon: Linkedin, href: "https://www.linkedin.com/in/abdallah-elsaid19", label: "LinkedIn" },
   ];

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's work together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  {...register("name")}
                  className="h-14"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email")}
                  className="h-14"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info  */}
         <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={isInView ? { opacity: 1, x: 0 } : {}}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="space-y-8"
         >
           <div className="space-y-6">
             {contactInfo.map((info, index) => (
               <motion.div
                 key={info.label}
                 initial={{ opacity: 0, y: 20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                 className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
               >
                 <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                   <info.icon className="h-5 w-5" />
                 </div>
                 <div>
                   <p className="text-sm text-muted-foreground">{info.label}</p>
                   <p className="font-semibold">{info.value}</p>
                 </div>
               </motion.div>
             ))}
           </div>

           {/* Social Links */}
           <div>
             <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
             <div className="flex gap-4">
               {socialLinks.map((social, index) => (
                 <motion.a
                   key={social.label}
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={isInView ? { opacity: 1, scale: 1 } : {}}
                   transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.95 }}
                   className="p-4 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                   aria-label={social.label}
                 >
                   <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                 </motion.a>
               ))}
             </div>
           </div>
         </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
