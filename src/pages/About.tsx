import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Leaf, Heart, Shield, Users, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Waves,
      title: "Ocean Inspired",
      description: "Our formulations draw from the healing power of marine botanicals and sea minerals."
    },
    {
      icon: Leaf,
      title: "100% Organic",
      description: "Every ingredient is carefully sourced from certified organic farms and sustainable practices."
    },
    {
      icon: Heart,
      title: "Cruelty Free",
      description: "We never test on animals and work only with ethical suppliers who share our values."
    },
    {
      icon: Shield,
      title: "Clean Beauty",
      description: "No harmful chemicals, parabens, or synthetic fragrances - just pure, natural goodness."
    }
  ];

  const team = [
    {
      name: "Marina Rodriguez",
      role: "Founder & CEO",
      description: "Marine biologist turned skincare expert with 15 years of experience in organic cosmetics."
    },
    {
      name: "Dr. Sarah Chen",
      role: "Head of Research",
      description: "PhD in Biochemistry specializing in natural active ingredients and sustainable formulations."
    },
    {
      name: "Alex Thompson",
      role: "Sustainability Director",
      description: "Environmental scientist ensuring every product meets our zero-waste and eco-friendly standards."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beach">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-gotham font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Born from a love of the ocean and a passion for natural beauty, GLOWIS brings you skincare that works in harmony with nature and your skin.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-gotham font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that effective skincare doesn't have to come at the cost of our planet. Our mission is to create luxurious, results-driven products using only the finest organic ingredients sourced from the sea and earth.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Every formula is carefully crafted to nourish your skin while respecting the environment that provides these precious ingredients.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Our Products
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-ocean rounded-2xl shadow-ocean"></div>
              <div className="absolute inset-4 bg-accent rounded-xl opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-gotham font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from ingredient sourcing to packaging design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center border-border/50 hover:shadow-soft transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-gotham font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-gotham font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate experts behind GLOWIS, dedicated to bringing you the finest in organic skincare.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-soft transition-shadow">
                <CardContent className="p-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-ocean rounded-full flex items-center justify-center mb-6">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-gotham font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-ocean">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="w-16 h-16 mx-auto text-white mb-6" />
            <h2 className="text-3xl font-gotham font-bold text-white mb-6">
              Ready to Transform Your Skincare Routine?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of customers who have discovered the power of organic, ocean-inspired skincare.
            </p>
            <Button 
              className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-3"
              size="lg"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;