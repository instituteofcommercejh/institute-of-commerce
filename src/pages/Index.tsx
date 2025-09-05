import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import TopPerformers from "@/components/TopPerformers";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      <Hero />
      <div className="bg-grid bg-fixed">
        <Features />
        <Courses />
        <TopPerformers />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
