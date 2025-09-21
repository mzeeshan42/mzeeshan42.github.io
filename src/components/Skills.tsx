import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Brain, 
  Smartphone, 
  Cloud, 
  Database, 
  Zap, 
  Shield 
} from 'lucide-react';

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 90 },
      { name: "Computer Vision", level: 92 },
      { name: "NLP", level: 85 }
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 88 },
      { name: "TensorFlow Lite", level: 85 },
      { name: "Cross-platform", level: 90 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 82 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 78 },
      { name: "CI/CD", level: 80 }
    ]
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "FastAPI", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "API Design", level: 88 }
    ]
  },
  {
    title: "Real-time Systems",
    icon: Zap,
    skills: [
      { name: "WebRTC", level: 85 },
      { name: "WebSockets", level: 88 },
      { name: "P2P Networks", level: 80 }
    ]
  },
  {
    title: "Security & Networks",
    icon: Shield,
    skills: [
      { name: "Network Security", level: 80 },
      { name: "VPN/WireGuard", level: 85 },
      { name: "Authentication", level: 82 }
    ]
  }
];

const certifications = [
  "AWS Cloud Practitioner",
  "TensorFlow Developer Certificate",
  "Google Cloud Associate"
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & <span className="text-primary">expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical skills spanning AI/ML, 
              mobile development, cloud infrastructure, and modern development practices.
            </p>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium text-foreground">{category.title}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-foreground">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-muted"
                            style={{
                              background: 'var(--muted)'
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm border-primary/20 text-primary bg-primary/5"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Strengths */}
          <div className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Key Strengths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">96.8%</div>
                <div className="text-sm text-muted-foreground">ML Model Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Cloud Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}