import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { SiLinkedin, SiMeta, SiX } from "react-icons/si";
import heroImage from "@assets/generated_images/AI_dashboard_hero_background_14b92293.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground" data-testid="text-hero-headline">
          AI-Powered Social Media<br />Management Made Simple
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-subheadline">
          Create engaging content, schedule posts across platforms, and grow your audience with intelligent AI assistance
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="text-base px-8 py-6" data-testid="button-hero-getstarted">
            Get Started Free
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base px-8 py-6 backdrop-blur-sm bg-background/50" 
            data-testid="button-hero-watchdemo"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-trust-indicator">
            Trusted by 5,000+ marketers worldwide
          </p>
          <div className="flex items-center gap-6 opacity-60">
            <SiLinkedin className="w-6 h-6" data-testid="icon-linkedin" />
            <SiX className="w-6 h-6" data-testid="icon-x" />
            <SiMeta className="w-6 h-6" data-testid="icon-meta" />
          </div>
        </div>
      </div>
    </section>
  );
}
