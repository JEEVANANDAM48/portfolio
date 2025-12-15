import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const handleDownload = () => {
    // Open the resume PDF in a new tab (download attribute may not work for all browsers)
    window.open('/resume.pdf', '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-card rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
              <h2 className="font-heading text-xl md:text-2xl font-bold gradient-text">Resume</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="btn-primary flex items-center gap-2 text-sm py-2 px-4"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl glass-card hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="text-center pb-6 border-b border-border">
                  <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Jeevanandam A
                  </h1>
                  <p className="text-lg text-primary font-medium mb-4">
                    CSE Student | AI & Full-Stack Developer
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <span>jeevaalk647@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Chennai, Tamil Nadu</span>
                    </div>
                  </div>
                </div>

                {/* Objective */}
                <section>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Career Objective
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Motivated Computer Science Engineering student with hands-on experience in AI, 
                    image processing, and full-stack development. Seeking opportunities to leverage 
                    my technical skills and passion for innovation to contribute to impactful projects 
                    in a dynamic organization.
                  </p>
                </section>

                {/* Education */}
                <section>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Education
                  </h3>
                  <div className="glass-card p-4 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-foreground">B.E Computer Science and Engineering</h4>
                        <p className="text-muted-foreground">Easwari Engineering College</p>
                        <p className="text-muted-foreground text-sm">Anna University</p>
                        <p className="text-primary font-medium text-sm">CGPA: 8.75</p>
                      </div>
                      <span className="text-sm text-primary font-medium">2024 – 2028</span>
                    </div>
                  </div>
                </section>

                {/* Skills */}
                <section>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Technical Skills
                  </h3>
                  <div className="grid gap-4">
                    {[
                      { category: 'Programming', skills: ['Python', 'C', 'C++', 'Core Java'] },
                      { category: 'Web & Frameworks', skills: ['React.js', 'Node.js', 'Flask'] },
                      { category: 'AI & Data', skills: ['Machine Learning', 'Image Processing', 'Data Analytics'] },
                      { category: 'Tools', skills: ['Git', 'MS Excel', 'VS Code'] },
                    ].map((group, index) => (
                      <div key={index} className="glass-card p-4 rounded-xl">
                        <h4 className="font-semibold text-foreground mb-2">{group.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {group.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Projects */}
                <section>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Key Projects
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        title: 'Image Processing for Quality Control',
                        description: 'Automated bottle defect detection system using advanced image processing techniques.',
                      },
                      {
                        title: 'AI-Driven Plant Disease Detection App',
                        description: 'Full-stack application using image classification and climate-based advisory system.',
                      },
                      {
                        title: 'Facial Recognition Customer Loyalty System',
                        description: 'AI-based cardless customer recognition and reward management system.',
                      },
                    ].map((project, index) => (
                      <div key={index} className="glass-card p-4 rounded-xl">
                        <h4 className="font-semibold text-foreground">{project.title}</h4>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Certifications
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { name: 'Networking Basics', issuer: 'Cisco', year: '2024' },
                      { name: 'Core Java', issuer: 'Infosys', year: '2025' },
                      { name: 'Blockchain and its Applications', issuer: 'NPTEL', year: '2025' },
                    ].map((cert, index) => (
                      <div key={index} className="glass-card p-3 rounded-xl">
                        <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                        <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Achievements */}
                <section>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Achievements
                  </h3>
                  <div className="glass-card p-4 rounded-xl">
                    <h4 className="font-semibold text-foreground">3rd Prize - Mathematical Modelling Competition</h4>
                    <p className="text-sm text-muted-foreground">SRM Institute of Science and Technology</p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
