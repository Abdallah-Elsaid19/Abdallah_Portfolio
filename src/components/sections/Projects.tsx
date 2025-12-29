import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "EvTick – Event Booking Platform",
    description:
      "A full-featured event booking web application supporting online and offline events with real-time interactive seat selection and secure checkout flows.",
    tags: [
      "React",
      "Redux",
      "Firebase",
      "Firestore",
      "Leaflet.js",
      "GetStream.io",
    ],
    image: "https://i.ibb.co/rGPsV15D/community-events-with-logo-of-Ev-Tick.jpg", 
    liveUrl: "https://evtick.vercel.app/",
    githubUrl: "https://github.com/Abdallah-Elsaid19/ev_tick",
  },
  {
    id: 2,
    title: "Livingo – Furniture E-Commerce",
    description:
      "Modern furniture e-commerce website simulating a real shopping experience with product browsing, search, filters, wishlist, cart, and checkout.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "LocalStorage"],
    image: "https://i.ibb.co/d4x5SDKx/website-called-livingo-for-furniture-i-need-a-poster.jpg",
    liveUrl: "https://livingo-silk.vercel.app/",
    githubUrl: "https://github.com/Abdallah-Elsaid19/Livingo",
  },
  {
    id: 3,
    title: "Rosea – E-Commerce Store",
    description:
      "Responsive online store built with React featuring authentication, cart & wishlist, product management, and an admin dashboard with analytics and CRUD operations.",
    tags: [
      "React 19",
      "TypeScript",
      "Redux",
      "React Query",
      "Axios",
      "Recharts",
    ],
    image: "https://i.ibb.co/7dhgjLrM/i-need-a-logo-for-website-called-rosea.jpg", 
    liveUrl: "#",
    githubUrl: "https://github.com/Abdallah-Elsaid19/Rosea",
  },
  {
    id: 4,
    title: "ModaTech – Mobile E-Commerce App",
    description:
      "Cross-platform mobile e-commerce application providing authentication, product browsing, cart management, and order processing for Android & iOS.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Axios",
    ],
    image: "https://i.ibb.co/N6C7YvxP/i-need-logo-for-mobile-app-called-Moda-Tech-used-in-react-native.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/asmaamdht/ModaTech.git",
  },
];


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Projects I've built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Overlay buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  className="absolute inset-0 flex items-center justify-center gap-4 bg-background/60 backdrop-blur-sm"
                >
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="ghost" size="lg" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
