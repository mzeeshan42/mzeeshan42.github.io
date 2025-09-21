import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-medium text-foreground mb-2">Muhammad Zeeshan</h3>
              <p className="text-muted-foreground text-sm">
                Software Engineer passionate about AI-driven cloud solutions
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:text-center">
              <nav className="flex flex-wrap gap-6">
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Projects
                </a>
                <a 
                  href="#skills" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Skills
                </a>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Social Links */}
            <div className="md:text-right">
              <div className="flex gap-3 md:justify-end">
                <a 
                  href="mailto:mzeeshan42@outlook.com"
                  className="p-2 bg-background hover:bg-primary/10 rounded-lg transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </a>
                <a 
                  href="https://github.com/mzeeshan42"
                  className="p-2 bg-background hover:bg-primary/10 rounded-lg transition-colors group"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </a>
                <a 
                  href="https://linkedin.com/in/mzeeshan42"
                  className="p-2 bg-background hover:bg-primary/10 rounded-lg transition-colors group"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Muhammad Zeeshan. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <span>Made with ❤️ in Karachi</span>
                <span>•</span>
                <span>Built with React & Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}