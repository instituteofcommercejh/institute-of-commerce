import { ShieldCheck, BarChart, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Comprehensive Curriculum",
    description:
      "Our curriculum is designed by industry experts to cover all aspects of modern commerce and finance.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Expert Instructors",
    description:
      "Learn from seasoned professionals and academicians who bring real-world experience to the classroom.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Personalized Feedback",
    description:
      "Receive regular, constructive feedback to track your progress and identify areas for improvement.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Faculty with 5+ years experience",
    description:
      "Learn from experienced educators with deep subject expertise.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">Why Choose Institute of Commerce</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            We're not just another coaching center. We are your partners in success, dedicated to providing an unparalleled learning experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8 stagger-fade">
          {features.map((feature, index) => (
            <div key={index} className="group relative p-6 text-center bg-card rounded-lg border border-border hover-lift hover-glow">
              <div className="mb-4 transition-transform group-hover:scale-110 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground transition-colors group-hover:text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;