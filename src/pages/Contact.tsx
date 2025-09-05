import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including phone number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Submit to Formspree
      const formspreeResponse = await fetch('https://formspree.io/f/xkgvzzno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      // Submit to Supabase as backup
      const { error } = await supabase
        .from('contacts')
        .insert({
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message
        });

      if (formspreeResponse.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      console.error('Error submitting contact:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-sm opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-700 leading-tight tracking-tighter">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Ready to start your commerce education journey? Contact us today for course information, admission details, or any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Card */}
            <div className="group relative p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:shadow-glow-hover">
              <h2 className="font-heading text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-semibold text-foreground mb-2 block">Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-foreground mb-2 block">Email Address *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-foreground mb-2 block">Phone Number *</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-foreground mb-2 block">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your course interests or any questions..."
                    rows={5}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-gradient group text-lg py-3"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="group relative p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:shadow-glow-hover">
                <h3 className="font-heading text-3xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <MapPin className="h-5 md:h-6 w-5 md:w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Address</h4>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                        Shivpur Road, Near Shivpur Mandir, Godda, Jharkhand 814133
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <Phone className="h-5 md:h-6 w-5 md:w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Phone</h4>
                      <p className="text-muted-foreground text-xs md:text-sm">+91 94313 80007</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <Mail className="h-5 md:h-6 w-5 md:w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Email</h4>
                      <p className="text-muted-foreground text-xs md:text-sm break-words">contact@instituteofcommerce.in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-glow-hover">
                <div className="h-80 bg-muted/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-semibold">Interactive Map Coming Soon</p>
                    <p className="text-sm text-muted-foreground mt-2">Find us in the heart of the education district.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;