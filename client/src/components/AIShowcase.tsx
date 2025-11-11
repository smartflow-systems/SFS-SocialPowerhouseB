import contentGenImage from "@assets/generated_images/AI_content_generator_interface_51501057.png";
import analyticsImage from "@assets/generated_images/Analytics_dashboard_interface_1315b702.png";

const showcases = [
  {
    image: contentGenImage,
    title: "AI Content Generation",
    description: "Transform ideas into compelling social media posts instantly",
    features: [
      "Multi-platform content optimization",
      "Tone and style customization",
      "Hashtag and emoji suggestions",
      "Real-time preview and editing"
    ]
  },
  {
    image: analyticsImage,
    title: "Advanced Analytics",
    description: "Make data-driven decisions with comprehensive insights",
    features: [
      "Engagement tracking across platforms",
      "Audience growth analytics",
      "Performance comparison tools",
      "Automated reporting"
    ]
  }
];

export default function AIShowcase() {
  return (
    <section id="showcase" className="py-16 md:py-24 lg:py-32 bg-card" data-testid="section-showcase">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-showcase-heading">
            Powered by Advanced AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-showcase-subheading">
            See how our AI technology transforms your social media workflow
          </p>
        </div>

        <div className="space-y-24">
          {showcases.map((showcase, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              data-testid={`showcase-item-${index}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <img 
                  src={showcase.image} 
                  alt={showcase.title}
                  className="rounded-xl border shadow-lg w-full"
                  data-testid={`image-showcase-${index}`}
                />
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4" data-testid={`text-showcase-title-${index}`}>
                  {showcase.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6" data-testid={`text-showcase-description-${index}`}>
                  {showcase.description}
                </p>
                <ul className="space-y-3">
                  {showcase.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-start gap-3" 
                      data-testid={`list-item-feature-${index}-${featureIndex}`}
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
