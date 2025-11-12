import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-sfs-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left section with hamburger and logo */}
          <div className="flex items-center gap-3">
            {/* Hamburger Menu - visible on all screen sizes */}
            <HamburgerMenu />

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sfs-gold to-sfs-gold-hover flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-shadow">
                <Sparkles className="w-6 h-6 text-sfs-black" />
              </div>
              <span className="text-xl font-bold text-white hidden sm:inline">
                SFS-SocialPowerhouse
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sfs-beige/80 hover:text-sfs-gold transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sfs-beige/80 hover:text-sfs-gold transition-colors">
              Pricing
            </a>
            <a href="/dashboard" className="text-sfs-beige/80 hover:text-sfs-gold transition-colors">
              Dashboard
            </a>
            <Button
              className="bg-sfs-gold hover:bg-sfs-gold-hover text-sfs-black font-semibold px-6 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <Button
              className="bg-sfs-gold hover:bg-sfs-gold-hover text-sfs-black font-semibold px-4 py-2 text-sm shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            >
              Trial
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
