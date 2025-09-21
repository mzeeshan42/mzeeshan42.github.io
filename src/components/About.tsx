import { Card, CardContent } from './ui/card';
import { GraduationCap, Award, Code, Cloud } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Software engineering student from Karachi with a passion for creating 
              AI-driven solutions and cloud-native applications.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Story */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my degree at the University of Karachi, I'm deeply passionate about 
                  the intersection of artificial intelligence and cloud computing. My journey has been 
                  focused on building practical solutions that leverage machine learning and modern 
                  deployment strategies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From developing CNN models with 96.8% accuracy to creating mobile AI applications 
                  with Flutter and TensorFlow Lite, I love turning complex problems into elegant, 
                  scalable solutions.
                </p>
              </div>
            </div>

            {/* Right - Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">96.8%</div>
                  <div className="text-sm text-muted-foreground">ML Model Accuracy</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Certificates</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground">Bachelor of Software Engineering</h4>
                    <p className="text-sm text-muted-foreground">University of Karachi</p>
                    <p className="text-sm text-muted-foreground">2022 - Present</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground">Specializations</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Code className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Machine Learning & AI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cloud className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Cloud Architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Mobile Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cloud className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">System Architecture</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}