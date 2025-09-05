import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, Users, Star, Check, BookOpen, Award, Target, Calculator, TrendingUp, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import CourseInquiryForm from "@/components/CourseInquiryForm";

const courses = [
  {
    title: "Class 11 Commerce",
    description: "Build a strong foundation in commerce with comprehensive coverage of core subjects. Our expertly designed curriculum introduces students to the fundamentals of Accountancy, Business Studies, and Entrepreneurship, preparing them for advanced studies and future career success.",
    duration: "Full Academic Year",
    batchSize: "Small Batches",
    features: [
      "Foundation building in commerce subjects",
      "Regular assessments and feedback",
      "Interactive learning sessions",
      "Doubt clearing sessions",
      "Study materials provided"
    ],
    popular: false,
  },
  {
    title: "Class 12 Commerce",
    description: "Advanced preparation program focused on board examination excellence and competitive university entrance preparation. This comprehensive course ensures students achieve top scores while developing critical thinking and analytical skills essential for higher education success.",
    duration: "Full Academic Year", 
    batchSize: "Small Batches",
    features: [
      "Board exam focused curriculum",
      "Competitive exam preparation",
      "Mock tests and practice papers",
      "University entrance support"
    ],
    popular: true,
  },
  {
    title: "B.Com Degree Support",
    description: "Complete academic support for Bachelor of Commerce students throughout their three-year journey. Our program provides specialized guidance, project assistance, and industry exposure to ensure graduates are well-prepared for professional careers or further studies.",
    duration: "3 Years",
    batchSize: "Personalized Batches", 
    features: [
      "Comprehensive degree support",
      "Specialization guidance",
      "Project assistance",
      "Placement preparation",
      "Industry exposure"
    ],
    popular: false,
  },
];

const subjects = [
  { name: "Accountancy", icon: <Calculator className="h-8 w-8 mx-auto" /> },
  { name: "Business Studies", icon: <TrendingUp className="h-8 w-8 mx-auto" /> },
  { name: "Entrepreneurship", icon: <Target className="h-8 w-8 mx-auto" /> },
  { name: "Economics", icon: <BarChart className="h-8 w-8 mx-auto" /> },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-sm opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-purple-800 leading-tight tracking-tighter">
            Our <span className="text-primary font-extrabold">Courses</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Comprehensive commerce education programs designed to build strong foundations and excel in your academic journey.
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="group relative p-4 md:p-6 bg-card rounded-lg border border-border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-hover">
              <div className="flex items-center justify-center mb-2 md:mb-3 text-primary">
                <Users className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <p className="font-heading text-lg md:text-xl font-bold text-foreground">30+ Students Taught</p>
            </div>
            <div className="group relative p-4 md:p-6 bg-card rounded-lg border border-border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-hover">
              <div className="flex items-center justify-center mb-2 md:mb-3 text-primary">
                <Award className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <p className="font-heading text-lg md:text-xl font-bold text-foreground">Faculty with 5+ years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Subjects Section */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Board Subjects We Cover</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
              Expert guidance in core commerce subjects for comprehensive understanding.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Ensure proper text wrapping for longer subject names */}
            {subjects.map((subject, index) => (
              <div key={index} className="group relative p-4 md:p-6 text-center bg-card rounded-lg border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-hover">
                <div className="mb-3 md:mb-4 text-primary transition-transform group-hover:scale-110 flex justify-center">
                  {subject.icon}
                </div>
                <h3 className="font-heading text-base md:text-lg lg:text-xl font-bold break-words">{subject.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Choose Your Path</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
              Select the course that best fits your academic goals and career aspirations.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <div key={index} className="group relative bg-card rounded-lg border border-border p-4 md:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-hover">
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-cta text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`ring-1 ring-border transition-colors group-hover:ring-primary ${course.popular ? 'ring-primary' : ''} rounded-lg p-4 md:p-6 h-full flex flex-col`}>
                  <div className="flex items-center justify-center mb-4">
                    <GraduationCap className="h-10 md:h-12 w-10 md:w-12 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold font-heading mb-3 text-foreground transition-colors group-hover:text-primary text-center">{course.title}</h3>
                  <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base text-center flex-grow leading-relaxed">{course.description}</p>
                  
                  <div className="mb-4 md:mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm">
                    <div className="flex items-center justify-center sm:justify-start text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-xs md:text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start text-muted-foreground">
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8">
            Take the first step towards a successful career in commerce. Join thousands of students who have achieved their dreams with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enrollment">
              <Button size="lg" className="btn-gradient hover-scale text-lg px-8 py-4">
                Enroll Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="hover-scale text-lg px-8 py-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;