import { FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi';

const Footer = () => {
  
  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub size={18} />, url: 'https://github.com/prakhar-bip' },
    { name: 'LinkedIn', icon: <FiLinkedin size={18} />, url: 'https://linkedin.com/in/prakhar-batwal-a72323249' },
    { name: 'LeetCode', icon: <FiCode size={18} />, url: 'https://leetcode.com/u/Prakhar_batwal/' },
    { name: 'Email', icon: <FiMail size={18} />, url: 'mailto:prakharbatwal418@gmail.com' }
  ];

  return (
    <footer className="border-t border-border bg-surface/30 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Identity & Copyright */}
        <div className="text-center md:text-left space-y-1">
          <span className="font-mono text-base font-bold tracking-tight text-text block">
            Prakhar Batwal
          </span>
          <span className="text-xs text-muted block">
            Full-Stack Backend Developer &amp; Machine Learning Operations Engineer
          </span>
          <span className="text-xs text-muted/60 block pt-2">
            &copy; {new Date().getFullYear()} Prakhar Batwal. All rights reserved.
          </span>
        </div>

        {/* Action Controls & Socials */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Social Badges */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-surface/50 hover:bg-surface text-muted hover:text-primary transition-all duration-300"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>


        </div>

      </div>
    </footer>
  );
};

export default Footer;
