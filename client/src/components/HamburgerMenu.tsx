import { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Live Dashboard", href: "/live-dashboard" },
  { label: "Social Inbox", href: "/social-inbox" },
  { label: "AI Studio", href: "/ai-studio" },
  { label: "Calendar", href: "/calendar" },
  { label: "Analytics", href: "/analytics" },
  { label: "Posts", href: "/posts" },
  { label: "AI Generator", href: "/ai/generator" },
  { label: "Visual Creator", href: "/ai-visual-creator" },
  { label: "Templates", href: "/templates" },
  { label: "Content Library", href: "/content-library" },
  { label: "Scheduler", href: "/scheduler" },
  { label: "Social Accounts", href: "/connections/social-accounts" },
  { label: "Social Listening", href: "/social-listening" },
  { label: "Competitor Intelligence", href: "/competitor-intelligence" },
  { label: "Growth Tools", href: "/growth-tools" },
  { label: "Integrations", href: "/connections/integrations" },
  { label: "Automation", href: "/connections/automation" },
  { label: "Alerts", href: "/connections/alerts" },
  { label: "Team Members", href: "/team" },
  { label: "Team Collaboration", href: "/connections/team" },
  { label: "Approval Flows", href: "/approvals" },
  { label: "Accounts", href: "/accounts" },
  { label: "Automation Rules", href: "/automation" },
  { label: "Profile", href: "/settings/profile" },
  { label: "Billing", href: "/settings/billing" },
  { label: "Notifications", href: "/settings/notifications" },
  { label: "Preferences", href: "/settings/preferences" },
  { label: "Help Center", href: "/help" },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-sfs-gold hover:text-sfs-gold-hover transition-colors"
        aria-label="Toggle menu"
        data-testid="button-hamburger"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-56 z-50 flex flex-col bg-sfs-brown/95 backdrop-blur-xl border-r border-sfs-gold/30 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-sfs-gold/20">
          <h3 className="text-sfs-gold font-bold">Menu</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-sfs-gold/70 hover:text-sfs-gold"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="space-y-1 px-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sfs-beige/70 hover:bg-sfs-gold/10 hover:text-sfs-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
