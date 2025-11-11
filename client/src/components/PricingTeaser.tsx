import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "1 social account",
      "10 AI-generated posts/month",
      "Basic analytics",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing teams and businesses",
    features: [
      "Unlimited social accounts",
      "Unlimited AI-generated posts",
      "Advanced analytics & reporting",
      "Team collaboration tools",
      "Priority support",
      "Custom brand voice training"
    ],
    highlighted: true
  }
];

export default function PricingTeaser() {
  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 bg-card" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-pricing-heading">
            Start Growing Your Social Presence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subheading">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 ${plan.highlighted ? 'border-primary border-2' : ''}`}
              data-testid={`card-plan-${index}`}
            >
              {plan.highlighted && (
                <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4" data-testid="badge-popular">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2" data-testid={`text-plan-name-${index}`}>
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold" data-testid={`text-plan-price-${index}`}>{plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mb-6" data-testid={`text-plan-description-${index}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-start gap-3" 
                    data-testid={`list-item-feature-${index}-${featureIndex}`}
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.highlighted ? "default" : "outline"}
                data-testid={`button-plan-${index}`}
              >
                {plan.name === "Free" ? "Get Started Free" : "Start Free Trial"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
