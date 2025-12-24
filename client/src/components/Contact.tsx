import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Configuration Error",
        description: "Email service is not configured. Please contact me directly at kunalkishor93344@gmail.com",
        variant: "destructive",
      });
      const mailtoLink = `mailto:kunalkishor93344@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      return;
    }
    
    try {
      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "kunalkishor93344@gmail.com",
      }, publicKey);
      
      if (result.text === 'OK') {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      const mailtoLink = `mailto:kunalkishor93344@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      toast({
        title: "Sending via Email Client",
        description: "Opening your email client as a fallback. Please send the message manually.",
      });
      setTimeout(() => { window.location.href = mailtoLink; }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadResume = async () => {
    try {
      // Get base path for GitHub Pages
      const basePath = import.meta.env.BASE_URL || '/';
      // Ensure base path ends with / and remove double slashes
      const normalizedBase = basePath.endsWith('/') ? basePath : basePath + '/';
      
      // Try multiple paths: public folder first (simpler), then attached_assets
      const pathsToTry = [
        `${normalizedBase}resume.pdf`, // From public folder (simplest)
        `${normalizedBase}attached_assets/kunal%20kishor%20resume444_1751541870634.pdf`, // URL encoded
        `${normalizedBase}attached_assets/kunal kishor resume444_1751541870634.pdf`, // With spaces
      ];
      
      let success = false;
      for (const resumePath of pathsToTry) {
        try {
          console.log('Trying resume path:', resumePath);
          const response = await fetch(resumePath);
          
          if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Kunal_Kishor_Resume.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            toast({
              title: "Resume Downloaded!",
              description: "Your resume has been downloaded successfully.",
            });
            success = true;
            break;
          } else {
            console.log(`Path ${resumePath} failed with status: ${response.status}`);
          }
        } catch (err) {
          console.log(`Path ${resumePath} threw error:`, err);
          continue;
        }
      }
      
      if (!success) {
        throw new Error(`Failed to download resume. Tried paths: ${pathsToTry.join(', ')}`);
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast({
        title: "Download Error",
        description: `Failed to download resume: ${error instanceof Error ? error.message : 'Unknown error'}. Please check the console for details.`,
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kunalkishor93344@gmail.com", href: "mailto:kunalkishor93344@gmail.com", gradient: "from-blue-500 to-cyan-500" },
    { icon: Phone, label: "Phone", value: "+91 6205625053", href: "tel:6205625053", gradient: "from-green-500 to-emerald-500" },
    { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka, India", href: "#", gradient: "from-orange-500 to-red-500" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kunal-kishor-48778a223", href: "https://linkedin.com/in/kunal-kishor-48778a223", gradient: "from-blue-600 to-indigo-600" },
    { icon: Github, label: "GitHub", value: "github.com/kunalkishor1", href: "https://github.com/kunalkishor1", gradient: "from-slate-600 to-slate-800" }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
        
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -25, 0], x: [0, Math.sin(i) * 15, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            className="absolute w-2 h-2 bg-primary-400 rounded-full"
            style={{ top: `${10 + i * 15}%`, left: `${5 + (i % 3) * 30}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <Badge className="bg-primary-500/10 text-primary-400 px-4 py-1 text-sm font-semibold border border-primary-500/20">
              <Sparkles className="w-3 h-3 mr-2 inline" />
              Contact
            </Badge>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-100 via-primary-300 to-slate-300 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto text-slate-400 leading-relaxed"
          >
            I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Let's connect!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-2 text-slate-100 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-blue-500 rounded-full"></div>
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm ml-4">Reach out through any of these channels</p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    delay: index * 0.05 + 0.2, 
                    duration: 0.3, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 120
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.01, x: 3 }}
                  className="group"
                >
                  <div className="glass-card rounded-xl p-5 border border-slate-800/50 hover:border-primary-500/30 transition-all duration-200 cursor-pointer">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <info.icon className="text-white" size={22} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wide">{info.label}</p>
                        {info.href !== "#" ? (
                          <a 
                            href={info.href} 
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-slate-200 hover:text-primary-400 transition-colors duration-150 font-semibold block truncate group-hover:translate-x-1 transition-transform"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-200 font-semibold">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                onClick={downloadResume}
                className="w-full bg-gradient-to-r from-primary-600 via-blue-500 to-primary-600 hover:from-primary-500 hover:via-blue-400 hover:to-primary-500 text-white shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/60 transition-all duration-200 relative overflow-hidden group"
                size="lg"
              >
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-2 text-slate-100 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                Send a Message
              </h3>
              <p className="text-slate-400 text-sm ml-4">Fill out the form below and I'll get back to you</p>
            </motion.div>

            <Card className="glass-card border-slate-800/50 shadow-2xl overflow-hidden">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your Name" },
                    { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                    { id: "subject", label: "Subject", type: "text", placeholder: "Subject" },
                  ].map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.05, duration: 0.25 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor={field.id} className="block text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                        {field.label}
                      </label>
                      <Input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={handleInputChange}
                        required
                        className="glass-card-light border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-slate-900/50 transition-all duration-200"
                        placeholder={field.placeholder}
                      />
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.25 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="glass-card-light border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-none bg-slate-900/50 transition-all duration-200"
                      placeholder="Your message..."
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.25 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary-600 via-blue-500 to-primary-600 hover:from-primary-500 hover:via-blue-400 hover:to-primary-500 text-white shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/60 transition-all duration-200 relative overflow-hidden group"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-150" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
