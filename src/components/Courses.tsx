import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, Users, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";
import CourseInquiryForm from "./CourseInquiryForm";

const courses = [
  {
    title: "Class 11 Commerce",
    description: "Start your commerce journey with solid fundamentals in Accountancy, Business Studies, and Entrepreneurship. Perfect for students transitioning from Class 10 science or arts to commerce stream.",
    duration: "Full Academic Year",
    batchSize: "8-12 Students",
    features: [
      "Basic concepts explained step-by-step",
      "Weekly chapter tests with detailed feedback",
      "Live problem-solving sessions",
      "Daily doubt clearing (4-5 PM)",
      "Complete study notes and worksheets"
    ],
    popular: false,
  },
  {
    title: "Class 12 Commerce",
    description: "Intensive board exam preparation with focus on scoring 75%+ marks. Includes previous year question practice, answer writing techniques, and university entrance exam coaching.",
    duration: "Full Academic Year", 
    batchSize: "6-10 Students",
    features: [
      "JAC and CBSE board exam strategies",
      "Monthly full-length mock exams",
      "Answer writing and presentation skills",
      "University entrance exam coaching",
      "Parent-teacher meetings every month"
    ],
    popular: true,
  },
  {
    title: "B.Com Degree Support",
    description: "Semester-wise support for B.Com students covering advanced Accounting, Corporate Law, Taxation, and Economics. Includes project guidance and internship placement assistance.",
    duration: "3 Years",
    batchSize: "Individual Focus", 
    features: [
      "Semester exam preparation and notes",
      "CA Foundation and CS coaching",
      "Project research and writing support",
      "Resume building and interview prep",
      "Banking and finance career guidance"
    ],
    popular: false,
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Course <span className="text-primary">Programs</span></h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Complete preparation for Class 11, Class 12, and B.Com studies. Each program includes study materials, mock tests, and doubt-clearing sessions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-fade">
          {courses.map((course, index) => (
            <div key={index} className="group relative bg-card rounded-lg border border-border p-4 md:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-hover min-h-[500px] md:min-h-[550px] flex flex-col">
              {course.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg border-2 border-white/20 animate-pulse-glow">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`ring-1 ring-border transition-colors group-hover:ring-primary ${course.popular ? 'ring-primary' : ''} rounded-lg p-4 md:p-6 flex-1 flex flex-col`}>
                <div className="flex items-center justify-center mb-4">
                  <GraduationCap className="h-10 md:h-12 w-10 md:w-12 text-primary transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold font-heading mb-3 text-foreground transition-colors group-hover:text-primary text-center">{course.title}</h3>
                <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base text-center flex-grow leading-relaxed">{course.description}</p>
                
                <div className="mb-4 md:mb-6 grid grid-cols-1 gap-3 md:gap-4 text-sm">
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                    <span className="text-xs md:text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                    <span className="text-xs md:text-sm">{course.batchSize}</span>
                  </div>
                </div>

                <div className="mb-4 md:mb-6">
                  <h4 className="font-semibold mb-3 text-foreground text-sm md:text-base">Course Features:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs md:text-sm text-muted-foreground">
                        <Check className="h-3 md:h-4 w-3 md:w-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mt-auto">
                  <Link to="/enrollment" className="block">
                    <Button className="w-full btn-gradient hover-scale text-sm md:text-base lg:text-lg py-2 md:py-3">
                      Enroll Now
                    </Button>
                  </Link>
                  <CourseInquiryForm courseName={course.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;