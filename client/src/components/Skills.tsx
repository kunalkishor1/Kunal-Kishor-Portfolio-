import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { BookOpen, Brain, Bug, Code, Database, GitBranch, Languages, Layers, MessageCircle, Network, Palette, RotateCcw, Users, Zap } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    { name: "Java", icon: Code, gradient: "from-orange-500 to-red-500", bgGradient: "from-orange-500/20 to-red-500/20" },
    { name: "Python", icon: Code, gradient: "from-blue-500 to-cyan-500", bgGradient: "from-blue-500/20 to-cyan-500/20" },
    { name: "SQL & PostgreSQL", icon: Database, gradient: "from-indigo-500 to-purple-500", bgGradient: "from-indigo-500/20 to-purple-500/20" },
    { name: "PostgreSQL", icon: Database, gradient: "from-teal-500 to-cyan-500", bgGradient: "from-teal-500/20 to-cyan-500/20" },
    { name: "JavaScript", icon: Code, gradient: "from-yellow-500 to-orange-500", bgGradient: "from-yellow-500/20 to-orange-500/20" },
    { name: "DSA", icon: Layers, gradient: "from-green-500 to-emerald-500", bgGradient: "from-green-500/20 to-emerald-500/20" },
    { name: "OOP Concepts", icon: Code, gradient: "from-violet-500 to-purple-500", bgGradient: "from-violet-500/20 to-purple-500/20" },
    { name: "Git", icon: GitBranch, gradient: "from-red-500 to-orange-500", bgGradient: "from-red-500/20 to-orange-500/20" },
    { name: "UI/UX Design", icon: Palette, gradient: "from-pink-500 to-rose-500", bgGradient: "from-pink-500/20 to-rose-500/20" },
    { name: "Data Structures & Algorithms", icon: Layers, gradient: "from-green-500 to-emerald-500", bgGradient: "from-green-500/20 to-emerald-500/20" },
  ];

  const softSkills = [
    { icon: Brain, name: "Strategic Thinking", gradient: "from-purple-500 to-pink-500" },
    { icon: Users, name: "Team Work", gradient: "from-blue-500 to-cyan-500" },
    { icon: RotateCcw, name: "Adaptability", gradient: "from-green-500 to-emerald-500" },
    { icon: MessageCircle, name: "Communication", gradient: "from-pink-500 to-rose-500" },
    { icon: Network, name: "Basic OS and Networking Understanding", gradient: "from-indigo-500 to-blue-500" },
    { icon: Bug, name: "Problem-solving and Debugging Skills", gradient: "from-red-500 to-orange-500" },
    { icon: BookOpen, name: "Clear Communication and Learning Mindset", gradient: "from-cyan-500 to-teal-500" },
  ];

  const languages = [
    { icon: Languages, name: "English", level: "Fluent (S/R/W)", gradient: "from-blue-500 to-indigo-500" },
    { icon: Languages, name: "Hindi", level: "Native (S/R/W)", gradient: "from-indigo-500 to-purple-500" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary-500/10 text-primary-400 px-4 py-1 text-sm font-semibold mb-4">
            My Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical and soft skills developed through academic projects and professional experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-blue-600 flex items-center justify-center shadow-lg">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-slate-100">Technical Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02, duration: 0.25, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`glass-card rounded-xl p-6 border border-slate-800/50 bg-gradient-to-br ${skill.bgGradient} hover:border-primary-500/30 transition-all duration-150`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <span className="text-slate-100 font-bold text-lg">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Core Competencies</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03, duration: 0.25, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.03 }}
                  className={`glass-card-light p-5 rounded-xl cursor-pointer border border-slate-800/50 bg-gradient-to-br ${skill.gradient} bg-opacity-10 hover:border-primary-500/50 transition-all duration-150`}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center shadow-lg`}>
                      <skill.icon className="text-white" size={26} />
                    </div>
                    <span className="font-bold text-sm text-slate-100 leading-tight">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                <Languages className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.25, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ x: 3 }}
                  className={`glass-card-light p-5 rounded-xl cursor-pointer border border-slate-800/50 bg-gradient-to-r ${language.gradient} bg-opacity-10 hover:border-primary-500/50 transition-all duration-150`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${language.gradient} flex items-center justify-center shadow-lg`}>
                        <language.icon className="text-white" size={22} />
                      </div>
                      <div>
                        <span className="font-bold text-slate-100 block">{language.name}</span>
                        <Badge className="bg-slate-800/70 text-slate-300 border-slate-700/50 font-medium mt-1">
                          {language.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
