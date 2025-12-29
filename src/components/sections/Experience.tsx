import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Front-End & Cross-Platform Mobile Application Trainee",
    company: "Information Technology Institute (ITI) – Tanta",
    period: "07 | 2025 - 12 | 2025",
    description:"Trainee in the Front-End & Cross-Platform Mobile Development track, focusing on modern web technologies, responsive UI development, and cross-platform mobile applications.",
  },
  {
    type: "work",
    title: "Front-End Developer (Freelance)",
    company: "Real Client – Clothing Store",
    period: "2025",
    description:
      "Developed an online fashion e-commerce platform for a real client. Collaborated with a team to build and enhance core features, integrated payment gateway and shopping cart, and delivered a smooth user experience with full client satisfaction.",
  },
  {
    type: "work",
    title: "Database Administrator & IT Help Desk",
    company: "Egyptian Air Force – Systems Department",
    period: "03 | 2024 - 03 | 2025",
    description:
      "Served as Database Administrator and IT Help Desk, providing technical support, system maintenance, and database management.",
  },
  {
    type: "work",
    title: "Database Intern",
    company: "Health Insights Asia",
    period: "03 | 2025 - 07 | 2025",
    description:
      "Worked on database-related tasks, data handling, and system support within a healthcare-focused environment.",
  },
];


const education = [
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "Tanta University, Egypt",
    period: "10 | 2019 - 07 | 2023",
    description: "GPA: 3.14",
  },
];


const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const TimelineItem = ({ item, index, isLast }: { item: typeof experiences[0]; index: number; isLast: boolean }) => (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-10"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[15px] top-10 w-0.5 h-full bg-border" />
      )}
      
      {/* Icon */}
      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
        {item.type === "work" ? (
          <Briefcase className="h-4 w-4 text-primary" />
        ) : (
          <GraduationCap className="h-4 w-4 text-primary" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <span className="text-primary text-sm font-medium">{item.period}</span>
        <h3 className="text-xl font-bold mt-1">{item.title}</h3>
        <p className="text-muted-foreground font-medium">{item.company}</p>
        <p className="text-muted-foreground/80 mt-2">{item.description}</p>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-24 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-8 flex items-center gap-3"
            >
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </motion.h3>
            <div>
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  item={exp}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-8 flex items-center gap-3"
            >
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </motion.h3>
            <div>
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  item={edu}
                  index={index}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
