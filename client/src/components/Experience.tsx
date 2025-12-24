import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

export default function Experience() {
  const workExperience = [
    {
      title: "Software Engineering Intern",
      company: "Solitaire Infosys",
      location: "Bengaluru, Karnataka",
      period: "Aug 2022 - Oct 2022",
      description: "Gained hands-on Java development experience and engineered an Online Quiz Application. Designed and developed a Cake Bakery Website, streamlining online orders and enhancing customer experience. Committed to delivering high-impact, scalable, and secure applications.",
      current: false
    }
  ];

  const education = [
    {
      degree: "Master in Computer Application",
      school: "Kristu Jayanti College, Autonomous",
      period: "Jan 2023 - Present",
      description: "Pursuing MCA with focus on full-stack development, cybersecurity, and cloud computing. Active as Placement Coordinator facilitating industry interactions and career opportunities.",
      gpa: "",
      achievements: "IEEE Member | Technical Events Participant",
      current: true
    },
    {
      degree: "Bachelor in Computer Application",
      school: "Chandigarh Group of Colleges",
      period: "Jan 2020 - Jan 2023",
      description: "Earned BCA with 73.15%, specializing in software development and database management. Participated in college hackathons and programming events.",
      gpa: "73.15%",
      achievements: "",
      current: false
    },
    {
      degree: "Higher Secondary Education",
      school: "Marwari College, Ranchi",
      period: "Jan 2017 - Jan 2019",
      description: "Focused on mathematics and computer science with active participation in extracurricular activities.",
      gpa: "53.2%",
      achievements: "",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary-500/10 text-primary-400 px-4 py-1 text-sm font-semibold mb-4">
            Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            My professional journey and academic achievements in computer science and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Work Experience</h3>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-500"></div>
              
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.25, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative pl-10 pb-8"
                >
                  <div className="absolute left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 border-4 border-slate-900 shadow-lg"></div>
                  <div className="glass-card-light p-6 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-bold text-slate-100">{job.title}</h4>
                      <Badge className="bg-primary-500/20 text-primary-300 border-primary-500/30 mt-2 sm:mt-0">
                        {job.period}
                      </Badge>
                    </div>
                    <p className="text-primary-400 font-medium mb-3">{job.company} • {job.location}</p>
                    <p className="text-slate-300 leading-relaxed text-sm">{job.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Education</h3>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.25, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative pl-10 pb-8"
                >
                  <div className={`absolute left-2 top-0 w-4 h-4 rounded-full border-4 border-slate-900 shadow-lg ${
                    edu.current ? 'bg-gradient-to-br from-primary-500 to-blue-500' : 'bg-slate-600'
                  }`}></div>
                  <div className="glass-card-light p-6 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-bold text-slate-100">{edu.degree}</h4>
                      <Badge className={`mt-2 sm:mt-0 ${
                        edu.current 
                          ? 'bg-primary-500/20 text-primary-300 border-primary-500/30'
                          : 'bg-slate-700/50 text-slate-400 border-slate-600/50'
                      }`}>
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-slate-300 font-medium mb-3">{edu.school}</p>
                    <p className="text-slate-400 leading-relaxed mb-3 text-sm">{edu.description}</p>
                    
                    <div className="space-y-2">
                      {edu.gpa && (
                        <div className="flex items-center gap-2">
                          <TrendingUp className="text-green-400" size={16} />
                          <span className="text-sm text-slate-300">GPA: {edu.gpa}</span>
                        </div>
                      )}
                      {edu.achievements && (
                        <div className="flex items-center gap-2">
                          <Award className="text-primary-400" size={16} />
                          <span className="text-sm text-slate-300">{edu.achievements}</span>
                        </div>
                      )}
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
