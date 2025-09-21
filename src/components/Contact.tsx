import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  CheckCircle 
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// EmailJS service - you'll need to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';

// EmailJS mock function for demonstration
const sendEmail = async (templateParams: any) => {
  // In production, you would use: emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
  // For now, we'll simulate the API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success for demo purposes
      console.log('Email would be sent with params:', templateParams);
      resolve({ status: 200 });
    }, 2000);
  });
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'mzeeshan42@outlook.com'
      };
      
      // Send email using EmailJS
      await sendEmail(templateParams);
      
      // Show success message
      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('Failed to send message. Please try again or email me directly at mzeeshan42@outlook.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's work <span className="text-primary">together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? 
              I'd love to hear from you and explore how we can collaborate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in touch</h3>
                <p className="text-muted-foreground mb-8">
                  Ready to turn your ideas into reality? Let's discuss your next project 
                  and see how my expertise in AI, mobile development, and cloud solutions 
                  can help bring your vision to life.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium">Email</div>
                    <a 
                      href="mailto:mzeeshan42@outlook.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      mzeeshan42@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium">Phone</div>
                    <a 
                      href="tel:+923183623721"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +92 318 3623 721
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium">Location</div>
                    <span className="text-muted-foreground">Karachi, Pakistan</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium text-foreground mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/mzeeshan42"
                    className="p-3 bg-card hover:bg-primary/10 rounded-lg transition-colors group border border-border"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/mzeeshan42"
                    className="p-3 bg-card hover:bg-primary/10 rounded-lg transition-colors group border border-border"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                  <a 
                    href="mailto:mzeeshan42@outlook.com"
                    className="p-3 bg-card hover:bg-primary/10 rounded-lg transition-colors group border border-border"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-foreground mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`bg-input-background border-border text-foreground ${
                          errors.firstName ? 'border-destructive' : ''
                        }`}
                        required
                      />
                      {errors.firstName && (
                        <p className="text-destructive text-sm">{errors.firstName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`bg-input-background border-border text-foreground ${
                          errors.lastName ? 'border-destructive' : ''
                        }`}
                        required
                      />
                      {errors.lastName && (
                        <p className="text-destructive text-sm">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`bg-input-background border-border text-foreground ${
                        errors.email ? 'border-destructive' : ''
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Discussion"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`bg-input-background border-border text-foreground ${
                        errors.subject ? 'border-destructive' : ''
                      }`}
                      required
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm">{errors.subject}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`bg-input-background border-border text-foreground ${
                        errors.message ? 'border-destructive' : ''
                      }`}
                      required
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Setup Instructions */}
                <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Setup Required:</strong> To enable direct email sending, you'll need to:
                  </p>
                  <ol className="text-sm text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
                    <li>Create a free account at <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">EmailJS</a></li>
                    <li>Set up an email service (Gmail, Outlook, etc.)</li>
                    <li>Create an email template</li>
                    <li>Replace the placeholder credentials in the code</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Available for Work */}
          <div className="mt-16 text-center">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm text-primary font-medium">Available for work</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to start your next project?
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm currently available for freelance projects, internships, and full-time opportunities. 
                  Let's discuss how I can help bring your ideas to life.
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.open('mailto:mzeeshan42@outlook.com', '_blank')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}