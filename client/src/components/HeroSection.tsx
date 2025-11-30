import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden circuit-bg">
      {/* Floating stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-sfs-gold rounded-full animate-pulse" />
        <div className="absolute top-[25%] right-[20%] w-1 h-1 bg-sfs-gold rounded-full animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-[30%] left-[25%] w-1 h-1 bg-sfs-gold rounded-full animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-[60%] right-[30%] w-1 h-1 bg-sfs-gold rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 py-16 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          AI-Powered Social Media<br />Management Made Simple
        </h1>
        <p className="text-base md:text-lg text-sfs-beige/80 mb-8 max-w-2xl mx-auto">
          Create engaging content, schedule posts across platforms, and grow your audience with intelligent AI assistance
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button 
            size="default" 
            className="bg-sfs-gold hover:bg-sfs-gold-hover text-sfs-black font-bold px-8 py-5 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all"
          >
            Get Started Free
          </Button>
          <Button 
            size="default" 
            variant="outline" 
            className="border-sfs-gold/40 text-sfs-beige hover:bg-sfs-gold/10 px-8 py-5 rounded-full backdrop-blur-sm"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </Button>
        </div>
        
        <p className="text-sm text-sfs-beige/50">
          Trusted by 5,000+ marketers worldwide
        </p>
      </div>
    </section>
  );
}
