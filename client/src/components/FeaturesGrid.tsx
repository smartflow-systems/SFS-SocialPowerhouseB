import { Card } from "@/components/ui/card";
import { Sparkles, Calendar, BarChart3, Users, CalendarDays, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description: "Generate engaging posts tailored to your brand voice and audience in seconds"
  },
  {
    icon: Calendar,
    title: "Multi-Platform Scheduling",
    description: "Schedule and publish content across all major social platforms from one dashboard"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track performance metrics and gain insights to optimize your social strategy"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with approval workflows and role-based permissions"
  },
  {
    icon: CalendarDays,
    title: "Content Calendar",
    description: "Visualize your posting schedule and maintain consistent content flow"
  },
  {
    icon: Lightbulb,
    title: "Smart Suggestions",
    description: "Get AI-powered recommendations for best posting times and content ideas"
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32" data-testid="section-features">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-features-heading">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-subheading">
            Powerful tools designed to streamline your social media workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate active-elevate-2 transition-all" 
              data-testid={`card-feature-${index}`}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" data-testid={`icon-feature-${index}`} />
              <h3 className="text-xl font-semibold mb-2" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
