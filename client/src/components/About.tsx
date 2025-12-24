import { Badge } from "@/components/ui/badge";
import _23MCAA50_new__2__min_min__1___1___1___2__min from "@assets/23MCAA50 new (2)-min-min (1) (1) (1) (2)-min.jpg";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary-500/10 text-primary-400 px-4 py-1 text-sm font-semibold mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Passionate software engineer with a strong foundation in computer applications and hands-on development experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-200"></div>
            <div className="relative glass-card-light p-2 rounded-3xl">
              <img 
                src={_23MCAA50_new__2__min_min__1___1___1___2__min} 
                alt="Kunal Kishor's Portrait" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-slate-100 mb-4">My Journey</h3>
              <p className="text-slate-300 leading-relaxed mb-4 text-base">
                Completed Master of Computer Applications (MCA) at Kristu Jayanti College with a focus on 
                full-stack development, cybersecurity, and cloud computing. I'm actively involved as a Placement 
                Coordinator and IEEE Member, participating in technical events and research activities.
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                My academic journey includes a Bachelor's in Computer Applications with 73.15% from Chandigarh Group of Colleges, 
                where I specialized in software development and database management. I bring practical experience from my 
                internship at Solitaire Infosys where I worked on Java development projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, title: "Location", desc: "Bengaluru, Karnataka", gradient: "from-orange-500 to-red-500" },
                { icon: GraduationCap, title: "Education", desc: "MCA Student (Current)", gradient: "from-blue-500 to-cyan-500" },
                { icon: Briefcase, title: "Experience", desc: "Software Engineering Intern", gradient: "from-purple-500 to-pink-500" },
                { icon: Users, title: "Role", desc: "Placement Coordinator", gradient: "from-green-500 to-emerald-500" },
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.25 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 rounded-xl cursor-pointer"
                >
                  <div className="flex items-center mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mr-3`}>
                      <item.icon className="text-white" size={20} />
                    </div>
                    <h4 className="font-semibold text-slate-100">{item.title}</h4>
                  </div>
                  <p className="text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
