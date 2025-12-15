import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, FolderOpen } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';
import ResumeModal from './ResumeModal';
import { SectionProps } from '../types';

const Hero: React.FC<SectionProps> = ({ id, className = '' }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id={id}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background z-0" />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 20, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, 20, -30, 0],
            y: [0, -20, 50, 0],
            scale: [1, 1.05, 0.95, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl" 
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Jeevanandam A</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-muted-foreground mb-6"
          >
            CSE Student | Aspiring AI & Full-Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Passionate about building intelligent solutions using AI, image processing, 
            and modern web technologies. Transforming ideas into impactful digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={handleScrollToProjects}
              className="btn-primary flex items-center gap-2 group"
            >
              <FolderOpen className="h-5 w-5 transition-transform group-hover:scale-110" />
              View Projects
            </button>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="btn-secondary flex items-center gap-2 group"
            >
              <FileText className="h-5 w-5 transition-transform group-hover:scale-110" />
              View Resume
            </button>
          </motion.div>

          {/* Resume Modal */}
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            {[
              { value: '3+', label: 'Projects' },
              { value: '5+', label: 'Certifications' },
              { value: '2028', label: 'Graduating' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
