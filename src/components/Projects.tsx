import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const projects = [
  {
    title: "CNN Image Classifier",
    description: "High-accuracy convolutional neural network achieving 96.8% accuracy for image classification tasks. Built with TensorFlow and optimized for production deployment.",
    image: "https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NTc4OTU0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "TensorFlow", "CNN", "Machine Learning"],
    metrics: "96.8% Accuracy"
  },
  {
    title: "Mobile AI Deployment",
    description: "Cross-platform mobile application with integrated AI capabilities using Flutter and TensorFlow Lite for on-device inference and real-time processing.",
    image: "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGZsdXR0ZXJ8ZW58MXx8fHwxNzU3OTE2ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Flutter", "TensorFlow Lite", "Mobile", "AI"],
    metrics: "Cross-platform"
  },
  {
    title: "LLM Engineering",
    description: "Advanced language model implementation using Llama 3.2 and LangChain for natural language processing and intelligent conversation systems.",
    image: "https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NTc4OTU0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Llama 3.2", "LangChain", "NLP", "Python"],
    metrics: "Production Ready"
  },
  {
    title: "Cloud-Secure Home Server",
    description: "Robust home server architecture with cloud integration, security hardening, and automated deployment pipelines for scalable infrastructure.",
    image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTc5MTY4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Cloud", "Security", "DevOps", "Infrastructure"],
    metrics: "99.9% Uptime"
  },
  {
    title: "P2P Video Chat App",
    description: "Real-time peer-to-peer video communication application built with WebRTC for seamless, low-latency video calls and messaging.",
    image: "https://images.unsplash.com/photo-1637592156141-d41fb6234e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNoYXQlMjBjb21tdW5pY2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTc5MTY4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["WebRTC", "JavaScript", "Real-time", "P2P"],
    metrics: "Real-time"
  },
  // Additional projects that would be shown when "Show All" is clicked
  {
    title: "E-commerce Analytics Platform",
    description: "Full-stack analytics dashboard for e-commerce businesses with real-time data visualization and machine learning insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTgwMzc1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "Data Analysis", "ML"],
    metrics: "Full-stack"
  },
  {
    title: "IoT Smart Home System",
    description: "Comprehensive IoT platform for home automation with sensor integration, mobile control, and cloud-based monitoring.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc1ODAzNzU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["IoT", "Arduino", "Cloud", "Mobile"],
    metrics: "Connected"
  },
  {
    title: "Blockchain Supply Chain",
    description: "Decentralized supply chain tracking system using blockchain technology for transparent and secure product authentication.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwc3VwcGx5JTIwY2hhaW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODAzNzU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Blockchain", "Solidity", "Web3", "Smart Contracts"],
    metrics: "Decentralized"
  }
];

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Show only first 5 projects initially
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 5);
  const hasMoreProjects = projects.length > 5;

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My recent <span className="text-primary">works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my latest projects spanning AI, mobile development, 
              cloud architecture, and real-time communication systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {displayedProjects.map((project, index) => (
              <Card key={index} className="bg-card border-border group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                        {project.metrics}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-primary/20 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-primary/20 text-primary hover:bg-primary/10"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Show All Projects Card */}
            {!showAllProjects && hasMoreProjects && (
              <Card 
                className="bg-card border-border group hover:border-primary/50 transition-all duration-300 cursor-pointer"
                onClick={() => setShowAllProjects(true)}
              >
                <CardContent className="p-0">
                  <div className="h-full flex flex-col items-center justify-center p-8 min-h-[400px]">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Plus className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-3">View All Projects</h3>
                    <p className="text-muted-foreground text-center">
                      Explore {projects.length - 5} more projects showcasing my diverse skill set
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Got a project in <span className="text-primary">mind?</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Let's collaborate and bring your ideas to life with cutting-edge technology.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}