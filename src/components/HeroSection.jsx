import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 ">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Rugved
            </span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">
              Gadge
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I design and develop high-quality web applications with a focus on
            performance and usability. Passionate about full-stack development
            and turning ideas into real-world solutions. Always learning, always
            building.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">View My Work</a>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce bottom-5">
      <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
      <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
};

export default HeroSection;
