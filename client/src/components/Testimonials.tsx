import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import testimonial1 from "@assets/generated_images/Customer_testimonial_photo_1_4bdee3e3.png";
import testimonial2 from "@assets/generated_images/Customer_testimonial_photo_2_4cea6eb3.png";
import testimonial3 from "@assets/generated_images/Customer_testimonial_photo_3_b9f608d1.png";

const testimonials = [
  {
    image: testimonial1,
    quote: "SFS-SocialPowerhouse has transformed how we manage our social media. The AI content generation saves us hours every week.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp"
  },
  {
    image: testimonial2,
    quote: "The analytics dashboard gives us insights we never had before. We've increased engagement by 300% in just two months.",
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "StartupHub"
  },
  {
    image: testimonial3,
    quote: "Best social media tool I've used. The AI suggestions are spot-on and the scheduling feature is incredibly intuitive.",
    name: "Emma Rodriguez",
    role: "Social Media Manager",
    company: "BrandWorks"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-heading">
            Loved by Marketers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subheading">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8" data-testid={`card-testimonial-${index}`}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" data-testid={`star-${index}-${i}`} />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed" data-testid={`text-testimonial-quote-${index}`}>
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
