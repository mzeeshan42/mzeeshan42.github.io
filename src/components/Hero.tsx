import { Button } from './ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // This would trigger CV download
    console.log('Downloading CV...');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                SOFTWARE
                <br />
                <span className="text-primary">ENGINEER</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about AI-driven cloud solutions. Building intelligent systems with Python, 
                machine learning frameworks, and modern cloud technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View Work
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDownloadCV}
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="mailto:mzeeshan42@outlook.com"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="https://github.com/mzeeshan42"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg transition-colors group"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="https://linkedin.com/in/mzeeshan42"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg transition-colors group"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 border border-border">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0JTIwYnVzaW5lc3NtYW58ZW58MXx8fHwxNzU4MDM3NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Muhammad Zeeshan - Software Engineer"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}