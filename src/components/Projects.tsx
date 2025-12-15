import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import projectQualityControl from '@/assets/project-quality-control.jpg';
import projectPlantDisease from '@/assets/project-plant-disease.jpg';
import projectFacialRecognition from '@/assets/project-facial-recognition.jpg';

const projects = [
  {
    title: 'Image Processing for Quality Control',
    description: 'Developed a system using OpenCV to detect manufacturing defects in real-time. This academic project demonstrates my ability to apply image processing techniques to solve practical problems.',
    image: projectQualityControl,
    tags: ['Python', 'OpenCV', 'Image Processing'],
    featured: true,
    award: '3rd Prize - Mathematical Modelling Competition, SRMIST',
  },
  {
    title: 'Plant Disease Detection',
    description: 'Built a full-stack application that identifies plant diseases from images. This project helped me learn about machine learning model deployment and web development integration.',
    image: projectPlantDisease,
    tags: ['React.js', 'Flask', 'TensorFlow'],
    featured: true,
  },
  {
    title: 'Facial Recognition System',
    description: 'Created a proof-of-concept for a facial recognition system as part of my coursework. This project strengthened my understanding of computer vision and backend development.',
    image: projectFacialRecognition,
    tags: ['Python', 'Face Recognition', 'OpenCV'],
    featured: true,
  },
];

import { SectionProps } from '../types';

const Projects: React.FC<SectionProps> = ({ id, className = '' }) => {
  return (
    <section id={id} className={`py-20 bg-white dark:bg-gray-900 ${className}`}>
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

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
            My Work
          </span>
          <h2 className="section-heading mt-2">
            Academic & <span className="gradient-text">Personal Projects</span>
          </h2>
          <p className="section-subheading mt-4">
            Projects that demonstrate my learning journey and technical growth
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card-hover rounded-2xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Award Badge */}
                {project.award && (
                  <div className="absolute top-4 left-4 glass-card px-3 py-1.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-500/30">
                    🏆 Award Winner
                  </div>
                )}

                {/* Hover Actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button className="p-2 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="h-5 w-5" />
                  </button>
                  <button className="p-2 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Award Description */}
                {project.award && (
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg px-3 py-2">
                    {project.award}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
