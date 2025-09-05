import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Yash",
      course: "Commerce Student",
      result: "Excellent Results",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The teaching style here is very clear and easy to understand. Regular tests helped me improve my confidence before the boards."
    },
    {
      name: "Shivraj",
      course: "Commerce Student",
      result: "Great Performance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Small batches and personal attention made a huge difference. I could ask doubts freely and got quick solutions."
    },
    {
      name: "Zaid",
      course: "Commerce Student",
      result: "Outstanding Results",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Concept clarity is the best part of this institute. The teachers focus on understanding rather than just memorizing."
    },
    {
      name: "Aditya",
      course: "Commerce Student",
      result: "Excellent Preparation",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The notes and revision classes were very helpful. I felt fully prepared for my exams."
    },
    {
      name: "Raman",
      course: "Commerce Student",
      result: "Improved Performance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Thanks to the guidance here, I improved my score and built a strong base for my future studies."
    },
    {
      name: "Anish",
      course: "Commerce Student",
      result: "Great Success",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The faculty are very supportive and always motivate us to give our best in exams."
    },
    {
      name: "Anthony",
      course: "Commerce Student",
      result: "Excellent Progress",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I liked the regular mock tests and progress tracking. It helped me know exactly where I stood."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            What Our Students Say
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our successful students who achieved their academic goals with us
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-scale-in" style={{animationDelay: '0.3s'}}>
          <div className="glass-card relative overflow-hidden hover-glow">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Student Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center border border-border">
                  <span className="font-montserrat font-bold text-xl text-foreground">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="font-inter text-lg text-foreground mb-6 leading-relaxed">
                    "{currentTestimonial.text}"
                  </p>
                  
                  {/* Student Info */}
                  <div>
                    <h4 className="font-montserrat font-bold text-xl text-foreground mb-1">
                      {currentTestimonial.name}
                    </h4>
                    <p className="font-inter text-muted-foreground mb-1">
                      {currentTestimonial.course}
                    </p>
                    <p className="font-inter font-semibold text-primary">
                      {currentTestimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={goToPrevious}
                className="rounded-full hover-scale bg-background/80 backdrop-blur border border-border"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={goToNext}
                className="rounded-full hover-scale bg-background/80 backdrop-blur border border-border"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover-scale ${
                  index === currentIndex 
                    ? 'bg-primary scale-125 shadow-glow-sm' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;