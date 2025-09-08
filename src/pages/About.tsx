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
            About Institute of Commerce
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            5+ years of proven results in commerce education. Located in Godda, Jharkhand, we help students achieve 70%+ board exam scores through focused teaching and personal attention.
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
                <p>Started in 2019 in Godda, Jharkhand, <span className="text-primary font-bold">Institute of Commerce</span> began with a simple goal: help students master commerce subjects and score better in board exams.</p>
                <p>Today, we have taught 30+ students with many achieving 70%+ scores in their board exams. Our small batch sizes and focus on individual attention have made the difference for students who struggled with commerce concepts.</p>
              </div>
            </div>
            <div className="group relative p-6 md:p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-hover order-1 lg:order-2">
              <blockquote className="text-muted-foreground leading-relaxed text-base md:text-lg">
                "Clear explanations, regular practice, honest feedback. No complicated methods—just proven techniques that help students score better."
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
                Help every student understand commerce concepts clearly and score 70%+ in board exams through focused teaching and regular practice.
              </p>
            </div>
            <div className="group relative p-6 md:p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-hover">
              <div className="flex items-center mb-4">
                <Eye className="h-6 md:h-8 w-6 md:w-8 text-primary mr-3 md:mr-4 flex-shrink-0" />
                <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Become the most trusted choice for commerce education in Jharkhand, known for helping students achieve their best possible board exam results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Results</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-muted-foreground leading-relaxed">
              Numbers that matter: real students, real results, real success stories from our focused teaching approach.
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