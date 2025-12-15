import { motion } from 'framer-motion';
import { Award, Calendar, BookOpen, Users, Code, Lightbulb, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    title: 'Networking Basics',
    issuer: 'Cisco',
    year: '2024',
    icon: Award,
    type: 'certification',
  },
  {
    title: 'Core Java',
    issuer: 'Infosys',
    year: '2025',
    icon: Code,
    type: 'certification',
  },
  {
    title: 'Blockchain and its Applications',
    issuer: 'NPTEL',
    year: '2025',
    icon: BookOpen,
    type: 'certification',
  },
  {
    title: 'Ethical Hacking',
    issuer: 'NPTEL',
    year: '2025',
    icon: ShieldCheck,
    type: 'certification',
  },
];

const participations = [
  {
    title: 'IGNITE\'25 Hackathon',
    description: 'Participated in intensive hackathon focused on innovative solutions',
    icon: Lightbulb,
  },
  {
    title: 'International Conference - Heal Hub',
    description: 'Presented research and project findings at international level',
    icon: Users,
  },
  {
    title: 'NETVENTURE',
    description: 'Tech event participation and networking',
    icon: Award,
  },
  {
    title: 'CODEUPHORIA',
    description: 'Competitive coding event participation',
    icon: Code,
  },
];

import { SectionProps } from '../types';

const Certifications: React.FC<SectionProps> = ({ id, className = '' }) => {
  return (
    <section id={id} className={`py-20 bg-gray-50 dark:bg-gray-800 ${className} relative overflow-hidden`}>
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

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
            Continuous Learning
          </span>
          <h2 className="section-heading mt-2">
            Certifications & <span className="gradient-text">Participation</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-semibold text-2xl mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card-hover p-6 rounded-2xl flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <cert.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-lg">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {cert.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Participations */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-semibold text-2xl mb-8 flex items-center gap-3">
              <Users className="h-6 w-6 text-secondary" />
              Events & Participation
            </h3>
            <div className="space-y-4">
              {participations.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card-hover p-6 rounded-2xl flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <event.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg">
                      {event.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
