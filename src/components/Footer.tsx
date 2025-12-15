import { ArrowUp, Heart, Linkedin, Github, Mail, Code2 } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jeeva-nandam-499168320/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/JEEVANANDAM48/portfolio', label: 'GitHub' },
    { icon: Code2, href: 'https://leetcode.com/u/Jeevanandam_A/', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:jeevaalk647@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-foreground text-background py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="JA Logo" 
                className="h-12 w-12 rounded-xl bg-background/10 p-1"
              />
              <div>
                <h3 className="font-heading font-bold text-xl">Jeevanandam A</h3>
                <p className="text-sm text-background/60">AI & Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Passionate about building intelligent solutions and creating impactful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-background/60 hover:text-background transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-background/60 text-sm mt-4">
              jeevaalk647@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm flex items-center gap-1">
            © {currentYear} Jeevanandam A. Made with <Heart className="h-4 w-4 text-red-400 fill-red-400" /> in Chennai
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-background/60 hover:text-background transition-colors"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
