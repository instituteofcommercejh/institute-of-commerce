import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, Users, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";
import CourseInquiryForm from "./CourseInquiryForm";

const courses = [
  {
    title: "Class 11 Commerce",
    description: "A comprehensive foundation covering Accountancy, Business Studies, and Entrepreneurship.",
    popular: false,
  },
  {
    title: "Class 12 Commerce",
    description: "Advanced preparation with a focus on board exams and competitive university entrances.",
    popular: true,
  },
  {
    title: "B.Com Degree Support",
    description: "Complete support for Bachelor of Commerce students, including specialization guidance.",
    popular: false,
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Our <span className="text-primary">Signature</span> Programs</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Choose from our expertly designed courses to excel in your academic journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-fade">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group relative p-4 md:p-8 bg-card rounded-lg border border-border hover-lift hover-glow ${
                course.popular ? 'shadow-glow-hover border-primary ring-2 ring-primary/20' : ''
              }`}>
              {course.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold animate-fade-in shadow-lg border-2 border-primary-foreground/20">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-bold font-heading mb-2 text-foreground transition-colors group-hover:text-primary">{course.title}</h3>
              <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base min-h-[4rem] md:min-h-[4rem]">{course.description}</p>
              <div className="space-y-3">
                <Link to="/enrollment" className="block">
                  <Button className="w-full btn-gradient hover-scale text-base md:text-lg py-2 md:py-3">
                    Enroll Now
                  </Button>
                </Link>
                <CourseInquiryForm courseName={course.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;