import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Database, GitBranch, Github, Layers, Linkedin, Mail, Palette, Phone } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const techIcons = [
    { Icon: Code, name: "Java", gradient: "from-orange-500 to-red-500", delay: 0 },
    { Icon: Code, name: "Python", gradient: "from-blue-500 to-cyan-500", delay: 0.05 },
    { Icon: Database, name: "PostgreSQL", gradient: "from-teal-500 to-cyan-500", delay: 0.1 },
    { Icon: Code, name: "JavaScript", gradient: "from-yellow-500 to-orange-500", delay: 0.15 },
    { Icon: Layers, name: "DSA", gradient: "from-green-500 to-emerald-500", delay: 0.2 },
    { Icon: Code, name: "OOP", gradient: "from-violet-500 to-purple-500", delay: 0.25 },
    { Icon: GitBranch, name: "Git", gradient: "from-red-500 to-orange-500", delay: 0.3 },
    { Icon: Palette, name: "UI/UX", gradient: "from-pink-500 to-rose-500", delay: 0.35 },
  ];

  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-500"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-40 w-32 h-32 border-2 border-primary-500/20 rounded-lg rotate-45"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-40 left-40 w-24 h-24 border-2 border-blue-500/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-lg rotate-45"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05, duration: 0.25 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-semibold">
                Software Engineer
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-slate-100">Hi, I'm </span>
              <span className="tech-gradient">Kunal Kishor</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="text-xl md:text-2xl text-slate-300 mb-6 font-medium"
            >
              Software Engineer & Full-Stack Developer
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed"
            >
              Results-driven Software Engineer skilled in Java, Python, SQL, and Web Development. 
              Currently pursuing MCA with focus on full-stack development, cybersecurity, and cloud computing.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection("#projects")}
                className="bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-500 hover:to-blue-400 text-white border-0 shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/60 transform hover:scale-105 transition-all duration-150"
                size="lg"
              >
                <Code className="mr-2 h-4 w-4" />
                View My Work
              </Button>
              
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="glass-card border-slate-700 text-slate-200 hover:text-primary-400 hover:border-primary-500 transition-all duration-150"
                size="lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="flex justify-center lg:justify-start space-x-6 mt-8"
            >
              <a href="mailto:kunalkishor93344@gmail.com" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-150 hover:scale-110">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/kunal-kishor-48778a223" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-150 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/kunalkishor1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-150 hover:scale-110">
                <Github size={20} />
              </a>
              <a href="tel:6205625053" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-150 hover:scale-110">
                <Phone size={20} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-lg h-[600px]">
              <div className="absolute inset-0 glass-card rounded-3xl p-8 flex items-center justify-center overflow-hidden">
                <div className="relative w-72 h-72">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-primary-500/30 rounded-full"
                  >
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-primary-500 rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) translateY(-144px) rotate(${i * 45}deg)`,
                          transformOrigin: '0 144px',
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-12 border-2 border-blue-500/30"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) translateY(-120px) rotate(${i * 60}deg)`,
                          transformOrigin: '0 120px',
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-20 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.65, 0.4] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="absolute inset-28 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ boxShadow: ['0 0 20px rgba(59, 130, 246, 0.3)', '0 0 35px rgba(59, 130, 246, 0.5)', '0 0 20px rgba(59, 130, 246, 0.3)'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-600 to-blue-600 flex items-center justify-center shadow-2xl"
                    >
                      <Code className="text-white" size={44} />
                    </motion.div>
                  </div>
                </div>
                
                {techIcons.map((tech, index) => {
                  const angle = (index / techIcons.length) * 2 * Math.PI;
                  const radius = 35;
                  const top = 50 + Math.sin(angle) * radius;
                  const left = 50 + Math.cos(angle) * radius;
                  
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + tech.delay, duration: 0.3 }}
                      className="absolute"
                      style={{
                        top: `${Math.max(10, Math.min(90, top))}%`,
                        left: `${Math.max(5, Math.min(95, left))}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <motion.div
                        animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                        transition={{ duration: 2 + index * 0.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center shadow-lg glass-card-light border border-white/10`}
                      >
                        <tech.Icon className="text-white" size={24} />
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 + tech.delay }}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 font-medium whitespace-nowrap"
                      >
                        {tech.name}
                      </motion.span>
                    </motion.div>
                  );
                })}
                
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -30, 0], x: [0, Math.sin(i) * 25, 0], opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.1, 0.8] }}
                    transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                    className="absolute w-2 h-2 bg-primary-400 rounded-full"
                    style={{
                      top: `${10 + (i % 4) * 25}%`,
                      left: `${8 + Math.floor(i / 4) * 30}%`,
                    }}
                  />
                ))}
              </div>
              
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary-500/40 rounded-tl-3xl"
              />
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-500/40 rounded-br-3xl"
              />
            </div>
          </motion.div> 
        </div>
      </div>
    </section>
  );
}
