import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import LightRays from "./LightRays";

const Hero = () => {
  const [allowEffects, setAllowEffects] = useState(false);
  useEffect(() => {
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!m || !m.matches) setAllowEffects(true);
  }, []);

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-background">
      {/* Light Rays (performance-aware) */}
      {allowEffects && (
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <LightRays
            raysOrigin="top-center"
            raysColor="#60A5FA"
            raysSpeed={0.8}
            lightSpread={0.7}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.08}
            noiseAmount={0.03}
            distortion={0.03}
            className="custom-rays"
          />
        </div>
      )}

      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-7xl leading-tight tracking-tight text-foreground text-shimmer px-4">
          Elevate Your Commerce Education
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-muted-foreground animate-fade-in px-4" style={{animationDelay: '0.3s'}}>
          Join thousands of successful students who have transformed their academic journey with our expert guidance in commerce subjects.
        </p>
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-scale-in px-4" style={{animationDelay: '0.6s'}}>
          <Link to="/courses">
            <Button size="lg" className="btn-gradient hover-scale text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
              Start Your Journey
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="hover-scale text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
