import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface CourseInquiryFormProps {
  courseName: string;
}

const scheduleOptions = [
  "Morning (9 AM - 12 PM)",
  "Afternoon (12 PM - 3 PM)", 
  "Evening (3 PM - 6 PM)",
  "Weekend Only",
  "Flexible"
];

const CourseInquiryForm = ({ courseName }: CourseInquiryFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentEducation: "",
    preferredSchedule: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
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
        .from('course_inquiries')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          course_name: courseName,
          current_education: formData.currentEducation || null,
          preferred_schedule: formData.preferredSchedule || null,
          message: formData.message || null
        });

      if (error) throw error;

      toast({
        title: "Inquiry Submitted!",
        description: "We'll contact you within 24 hours with course details.",
      });
      
      // Reset form and close dialog
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        currentEducation: "",
        preferredSchedule: "",
        message: ""
      });
      setIsOpen(false);
      
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your inquiry. Please try again.",
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <MessageSquare className="h-4 w-4 mr-2" />
          Inquire About Course
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            Inquire About {courseName}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label className="font-semibold text-foreground mb-2 block">Current Education</label>
            <Input
              value={formData.currentEducation}
              onChange={(e) => handleChange('currentEducation', e.target.value)}
              placeholder="e.g., Class 10 completed, Class 11 ongoing, etc."
            />
          </div>

          <div>
            <label className="font-semibold text-foreground mb-2 block">Preferred Schedule</label>
            <Select value={formData.preferredSchedule} onValueChange={(value) => handleChange('preferredSchedule', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select preferred timing" />
              </SelectTrigger>
              <SelectContent>
                {scheduleOptions.map((schedule) => (
                  <SelectItem key={schedule} value={schedule}>
                    {schedule}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="font-semibold text-foreground mb-2 block">Message</label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Any specific questions or requirements..."
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full btn-gradient group"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CourseInquiryForm;