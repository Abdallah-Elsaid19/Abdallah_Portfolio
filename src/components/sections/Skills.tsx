import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95, color: "primary" },
  { name: "TypeScript", level: 90, color: "primary" },
  { name: "Next.js", level: 85, color: "primary" },
  { name: "Tailwind CSS", level: 95, color: "primary" },
  { name: "React Native", level: 75, color: "primary" },
  { name: "Framer Motion", level: 88, color: "primary" },
];

const technologies = [
  "JavaScript", "HTML5", "CSS3", "Git", "REST APIs", 
  "GraphQL", "Redux", "Zustand", "Vite", "Webpack",
  "Jest", "Cypress", "Figma", "Responsive Design"
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technologies I work with
          </h2>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-lg">{skill.name}</span>
                <span className="text-primary font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  className="h-full bg-primary rounded-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))" }}
              className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium cursor-default transition-all duration-300 hover:text-primary-foreground hover:border-primary"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
