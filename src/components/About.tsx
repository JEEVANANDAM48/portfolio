import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react';

import { SectionProps } from '../types';

const About: React.FC<SectionProps> = ({ id, className = '' }) => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.E CSE, Easwari Engineering College, Anna University (CGPA: 8.75)',
    },
    {
      icon: Briefcase,
      title: 'Focus Areas',
      description: 'AI, Image Processing, Full-Stack Development',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Chennai, Tamil Nadu, India',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Building innovative tech solutions',
    },
  ];

  return (
    <section id={id} className={`py-20 bg-white dark:bg-gray-900 ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Get to Know Me
          </span>
          <h2 className="section-heading mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a dedicated Computer Science and Engineering student passionate about 
                <span className="text-foreground font-medium"> AI, machine learning, and full-stack development</span>. 
                Currently pursuing my B.E. in CSE, I'm actively building my skills through coursework and hands-on projects.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                My technical journey includes working with 
                <span className="text-foreground font-medium"> Python, React, and various AI/ML tools</span>. 
                I enjoy turning complex problems into elegant solutions through clean, efficient code.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                I'm excited to connect with like-minded individuals and explore opportunities to 
                <span className="text-foreground font-medium"> contribute to meaningful projects</span> 
                that challenge me to grow as a developer.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover p-6 rounded-2xl group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
