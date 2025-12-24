import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Sparkles } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Online Quiz Application",
      description: "Interactive quiz platform with robust and scalable system handling multiple users. Features optimized UI for seamless cross-platform experience and real-time score tracking.",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Java", "UI/UX", "Database"],
      githubLink: "#"
    },
    {
      title: "Recipe Generator",
      description: "Deep learning-based project using DenseNet201 model to identify Indian dishes from food images and generate step-by-step recipes. Demonstrates AI application in culinary domain.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Deep Learning", "DenseNet201", "Computer Vision"],
      githubLink: "https://github.com/kunalkishor1/recipe-generator-with-image-.git"
    },
    {
      title: "Cake Bakery Website",
      description: "Responsive e-commerce website featuring intuitive product navigation and enhanced UI/UX design. Streamlined customer shopping experience resulting in increased sales and satisfaction.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "E-commerce", "Responsive", "UI/UX"],
      githubLink: "https://github.com/kunalkishor1/cake-bakery-Website.git"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, -50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -25, 0], x: [0, Math.sin(i) * 15, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            className="absolute w-2 h-2 bg-primary-400 rounded-full"
            style={{ top: `${15 + i * 20}%`, left: `${10 + (i % 2) * 30}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <Badge className="bg-primary-500/10 text-primary-400 px-4 py-1 text-sm font-semibold border border-primary-500/20">
              <Sparkles className="w-3 h-3 mr-2 inline" />
              Portfolio
            </Badge>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-100 via-primary-300 to-slate-300 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of my development projects demonstrating full-stack capabilities and innovative solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.4, 
                ease: "easeOut",
                type: "spring",
                stiffness: 120
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group"
            >
              <Card className="glass-card overflow-hidden hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 border-slate-800/50 h-full flex flex-col">
                <div className="relative overflow-hidden h-56">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent z-10"></div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20 z-10"
                  />
                  
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Badge className="bg-primary-500/90 backdrop-blur-sm text-white border-primary-400/50 text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.15 }}
                    viewport={{ once: true }}
                    className="text-xl font-bold text-slate-100 mb-3 group-hover:text-primary-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-blue-500 rounded-full"></div>
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="text-slate-400 mb-6 leading-relaxed text-sm flex-1"
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.25 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center pt-4 border-t border-slate-800/50"
                  >
                    {project.githubLink && project.githubLink !== "#" ? (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-500 hover:to-blue-400 text-white text-sm font-semibold shadow-lg shadow-primary-500/50 hover:shadow-xl transition-all duration-200 group w-full justify-center"
                      >
                        <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                        View on GitHub
                      </motion.a>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 w-full justify-center"
                      >
                        <Github size={20} className="text-slate-500" />
                        <span className="text-sm text-slate-500 font-medium">Code Private</span>
                      </motion.div>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
