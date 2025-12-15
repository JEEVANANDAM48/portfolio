import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: '3rd Prize Winner',
    description: 'Mathematical Modelling Competition at SRMIST',
    project: 'Image Processing for Quality Control',
    color: 'from-amber-400 to-orange-500',
  },
];

import { SectionProps } from '../types';

const Achievements: React.FC<SectionProps> = ({ id, className = '' }) => {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
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
            Recognition
          </span>
          <h2 className="section-heading mt-2">
            Achievements & <span className="gradient-text">Awards</span>
          </h2>
        </motion.div>

        {/* Main Achievement Card */}
        <div className="max-w-2xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
              
              <div className="relative glass-card p-8 md:p-12 rounded-3xl overflow-hidden">
                {/* Decorative Stars */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-4 right-4 flex gap-1"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                    </motion.div>
                  ))}
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Trophy Icon */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform`}
                  >
                    <achievement.icon className="h-12 w-12 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center md:text-left flex-1">
                    <h3 className="font-heading text-3xl font-bold gradient-text mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-xl text-foreground font-medium mb-2">
                      {achievement.description}
                    </p>
                    <p className="text-muted-foreground">
                      Project: <span className="text-primary">{achievement.project}</span>
                    </p>
                  </div>
                </div>

                {/* Bottom Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/50"
                >
                  {[
                    { icon: Medal, label: 'Competition', value: 'SRMIST' },
                    { icon: Target, label: 'Category', value: 'Innovation' },
                    { icon: Star, label: 'Achievement', value: 'Top 3' },
                  ].map((stat, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="text-center"
                    >
                      <stat.icon className="h-5 w-5 mx-auto text-primary mb-2" />
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                      <div className="font-semibold">{stat.value}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
