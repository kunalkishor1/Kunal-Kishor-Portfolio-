import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    { name: "Java Programming", description: "Professional certification in Java development", icon: "☕", gradient: "from-orange-500 to-red-500" },
    { name: "Git Version Control", description: "Complete Udemy course on Git and version control", icon: "🔧", gradient: "from-slate-500 to-slate-700" },
    { name: "Machine Learning", description: "NPTEL certification in machine learning concepts", icon: "🤖", gradient: "from-purple-500 to-pink-500" },
    { name: "Spring Boot", description: "H20 from Infosys Spring Boot online certification", icon: "🍃", gradient: "from-green-500 to-emerald-500" }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary-500/10 text-primary-400 px-4 py-1 text-sm font-semibold mb-4">
            Certifications
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.25, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-xl text-center group cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-150`}>
                <span className="text-2xl">{cert.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-primary-400 transition-colors duration-150">{cert.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
