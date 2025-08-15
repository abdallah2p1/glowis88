import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Miami, FL",
    rating: 5,
    text: "The Revitalizing Body Scrub has transformed my skin! It feels so soft and glowing after every use. I love that it's organic and smells like a tropical paradise.",
    product: "Revitalizing Body Scrub"
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    location: "San Diego, CA", 
    rating: 5,
    text: "I've been using the Brightening Serum for 3 months now and the results are incredible. My skin looks more radiant and even-toned than ever before.",
    product: "Brightening Serum"
  },
  {
    id: 3,
    name: "Jessica Chen",
    location: "Honolulu, HI",
    rating: 5,
    text: "Finally found a natural sunscreen that doesn't leave white residue! The SPF 50 protects my skin perfectly while keeping it moisturized all day.",
    product: "Natural Sunscreen SPF 50"
  },
  {
    id: 4,
    name: "Maria Santos",
    location: "Key West, FL",
    rating: 5,
    text: "The Refreshing Face Water is my new holy grail! It's so gentle yet effective at cleansing my skin. Perfect for my sensitive skin type.",
    product: "Refreshing Face Water"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-16 bg-gradient-beach relative overflow-hidden">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 right-0 h-16 wave-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who've experienced the natural glow 
            that comes from our organic skincare products.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="border-border/50 shadow-ocean">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center space-y-6">
                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Customer Info */}
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Verified purchase: {testimonials[currentIndex].product}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              className="w-10 h-10 p-0 border-primary/30 hover:bg-primary/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              className="w-10 h-10 p-0 border-primary/30 hover:bg-primary/10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 rounded-full bg-primary/20 animate-gentle-bounce"></div>
        <div className="absolute bottom-32 right-16 w-8 h-8 rounded-full bg-accent/30 animate-float"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;