import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Award, BookOpen, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {

  const stats = [
    { icon: Users, number: "30+", label: "Students Taught" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: BookOpen, number: "5+", label: "Faculty Experience (Years)" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-sm opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-black mb-6">
            About INSTITUTE OF COMMERCE
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Dedicated to excellence in commerce education, shaping successful careers and building tomorrow's business leaders in Godda, Jharkhand.
          </p>
          <div className="mt-8">
            <Link to="/enrollment">
              <Button className="btn-gradient text-lg px-8 py-3">
                Join Our Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story, Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>Located in the heart of Godda, Jharkhand, <span className="text-primary font-bold">INSTITUTE OF COMMERCE</span> has been providing quality commerce education to students across the region. We have established ourselves as a trusted name in commerce education.</p>
                <p>We believe that every student has unique potential, and our personalized approach ensures that each student receives the attention and guidance they need to excel in their academic journey.</p>
              </div>
            </div>
            <div className="group relative p-6 md:p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-hover order-1 lg:order-2">
              <blockquote className="text-muted-foreground leading-relaxed text-base md:text-lg">
                "We keep it simple: clear teaching, regular practice, and honest feedback. No buzzwords. Just steady progress you can see."
              </blockquote>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="group relative p-6 md:p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-hover">
              <div className="flex items-center mb-4">
                <Target className="h-6 md:h-8 w-6 md:w-8 text-primary mr-3 md:mr-4 flex-shrink-0" />
                <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                To provide comprehensive and quality commerce education that empowers students with knowledge, skills, and confidence to excel in their academic pursuits and future careers.
              </p>
            </div>
            <div className="group relative p-6 md:p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-hover">
              <div className="flex items-center mb-4">
                <Eye className="h-6 md:h-8 w-6 md:w-8 text-primary mr-3 md:mr-4 flex-shrink-0" />
                <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                To be the leading institute for commerce education, recognized for excellence in teaching, innovation in learning, and producing graduates who contribute meaningfully to business and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">By the Numbers</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-muted-foreground leading-relaxed">
              Our track record speaks for itself. We are proud of the community we've built and the results we've achieved.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group relative p-6 md:p-8 text-center bg-card rounded-lg border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-hover">
                  <IconComponent className="h-10 md:h-12 w-10 md:w-12 text-primary mx-auto mb-4 transition-transform group-hover:scale-110" />
                  <p className="text-3xl md:text-4xl font-bold font-heading text-primary mb-2">{stat.number}</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;