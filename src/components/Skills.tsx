import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Brain, 
  Wrench, 
  Users,
  FileCode,
  Database,
  Cpu
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Python', 'C', 'C++', 'Java'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: 'from-violet-500 to-purple-500',
    skills: ['React.js', 'Node.js', 'HTML/CSS', 'JavaScript'],
  },
  {
    title: 'AI & Data Science',
    icon: Brain,
    color: 'from-pink-500 to-rose-500',
    skills: ['Machine Learning', 'Image Processing', 'Data Analysis', 'NumPy/Pandas'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-amber-500 to-orange-500',
    skills: ['Git/GitHub', 'VS Code', 'Jupyter Notebooks', 'Linux'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
    skills: ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability'],
  },
];

const techStack = [
  { name: 'Python', icon: FileCode },
  { name: 'React', icon: Globe },
  { name: 'Node.js', icon: Database },
  { name: 'AI/ML', icon: Cpu },
];

import { SectionProps } from '../types';

const Skills: React.FC<SectionProps> = ({ id, className = '' }) => {
  return (
    <section id={id} className={`py-20 bg-gray-50 dark:bg-gray-800 ${className} relative overflow-hidden`}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

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
            What I Know
          </span>
          <h2 className="section-heading mt-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mt-4">
            A growing toolkit of technologies I'm learning and applying in my projects
          </p>
        </motion.div>

        {/* Tech Stack Quick View */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="glass-card px-6 py-3 rounded-full flex items-center gap-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <tech.icon className="h-5 w-5 text-primary" />
              <span className="font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 rounded-2xl group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-chip bg-background/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative Line */}
              <div className={`h-1 w-full mt-6 rounded-full bg-gradient-to-r ${category.color} opacity-20 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
