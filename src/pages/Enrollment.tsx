import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const courses = [
  "Class 11 Commerce",
  "Class 12 Commerce",
  "B.Com Degree Support"
];

const Enrollment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    previousEducation: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.course || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including phone number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('enrollments')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          course: formData.course,
          previous_education: formData.previousEducation || null,
          message: formData.message || null
        });

      if (error) throw error;

      toast({
        title: "Enrollment Submitted!",
        description: "We'll contact you within 24 hours to discuss your course enrollment.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        previousEducation: "",
        message: ""
      });

      // Redirect to home after 2 seconds
      setTimeout(() => navigate("/"), 2000);

    } catch (error) {
      console.error('Error submitting enrollment:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your enrollment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-sm opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-700 leading-tight tracking-tighter">
            Enroll Today
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Take the first step towards academic excellence. Join Institute of Commerce and unlock your potential.
          </p>
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="group relative p-6 md:p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:shadow-glow-hover">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Course Enrollment Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-semibold text-foreground mb-2 block">Full Name *</label>
                <Input
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-foreground mb-2 block">Email Address *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-foreground mb-2 block">Phone Number *</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-foreground mb-2 block">Course *</label>
                <Select value={formData.course} onValueChange={(value) => handleChange('course', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="font-semibold text-foreground mb-2 block">Previous Education</label>
                <Input
                  value={formData.previousEducation}
                  onChange={(e) => handleChange('previousEducation', e.target.value)}
                  placeholder="e.g., Class 10 passed, Class 12 Science, etc."
                />
              </div>

              <div>
                <label className="font-semibold text-foreground mb-2 block">Additional Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Any specific requirements or questions..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gradient group text-lg py-3"
              >
                {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enrollment;