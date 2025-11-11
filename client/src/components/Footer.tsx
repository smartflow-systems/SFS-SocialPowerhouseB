import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { SiLinkedin, SiX, SiGithub } from "react-icons/si";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log('Newsletter subscription:', email);
    setEmail("");
  };

  return (
    <footer className="border-t" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" data-testid="icon-footer-logo" />
              <span className="font-bold" data-testid="text-footer-brand">SFS-SocialPowerhouse</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-tagline">
              Transform your social media with AI-powered content generation and intelligent scheduling.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-social-linkedin">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-social-x">
                <SiX className="w-5 h-5" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-social-github">
                <SiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-product-heading">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-block" data-testid="link-features">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-block" data-testid="link-integrations">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-block" data-testid="link-pricing-footer">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-block" data-testid="link-changelog">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-resources-heading">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-block" data-testid="link-documentation">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-block" data-testid="link-blog">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-block" data-testid="link-support">Support</a></li>
              <li><a href="#" className="text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-block" data-testid="link-community">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-newsletter-heading">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-newsletter-description">
              Get the latest updates and tips for social media success.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-newsletter-email"
              />
              <Button onClick={handleSubscribe} data-testid="button-newsletter-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2024 SFS-SocialPowerhouse. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md" data-testid="link-terms">Terms</a>
            <a href="#" className="text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md" data-testid="link-privacy">Privacy</a>
            <a href="#" className="text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md" data-testid="link-cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
