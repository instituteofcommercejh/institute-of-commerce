import { ShieldCheck, BarChart, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Board-Focused Curriculum",
    description:
      "Study exactly what you need for JAC and CBSE boards. Every lesson connects directly to exam questions and scoring techniques.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Small Batch Teaching",
    description:
      "Learn in groups of 8-12 students maximum. Get personal attention and ask questions without hesitation.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Weekly Progress Tracking",
    description:
      "Know exactly where you stand with weekly tests and detailed performance reports sent to parents.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "5+ Years Teaching Experience",
    description:
      "Learn from teachers who have successfully guided hundreds of students to top scores in commerce subjects.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">Why Students Choose Us</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Real results from focused teaching. Our students consistently score 70%+ in board exams through proven methods and personal attention.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 stagger-fade">
          {features.map((feature, index) => (
            <div key={index} className="group relative p-4 md:p-6 text-center bg-card rounded-lg border border-border hover-lift hover-glow min-h-[240px] md:min-h-[280px] flex flex-col">
              <div className="mb-3 md:mb-4 transition-transform group-hover:scale-110 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground transition-colors group-hover:text-primary leading-tight">{feature.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;