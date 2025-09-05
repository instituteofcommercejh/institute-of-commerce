import { Trophy, Award } from "lucide-react";

const TopPerformers = () => {
  const performers = [
    {
      name: "Raman",
      class: "12th",
      board: "JAC",
      percentage: "73.8%"
    },
    {
      name: "Anish",
      class: "12th",
      board: "BSBE",
      percentage: "73%"
    },
    {
      name: "Anthony",
      class: "12th",
      board: "JAC",
      percentage: "72%"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
            Top Performers
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating our outstanding students who achieved excellence in their board examinations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto animate-scale-in" style={{animationDelay: '0.3s'}}>
          {performers.map((performer, index) => (
            <div key={index} className="group relative p-6 md:p-8 text-center bg-card rounded-lg border border-border hover-lift hover-glow">
              <div className="mb-4 transition-transform group-hover:scale-110 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
                  {index === 0 ? (
                    <Trophy className="h-8 w-8 text-white" />
                  ) : (
                    <Award className="h-8 w-8 text-white" />
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground transition-colors group-hover:text-primary font-heading">
                {performer.name}
              </h3>
              <p className="text-muted-foreground mb-1 font-inter">
                {performer.class} - {performer.board} Board
              </p>
              <p className="text-3xl font-bold text-primary font-heading">
                {performer.percentage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPerformers;