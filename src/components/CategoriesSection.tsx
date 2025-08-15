import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, Sun, Leaf, Flower } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "body-care",
    name: "Body Care",
    description: "Nourishing treatments for your body",
    icon: Flower,
    color: "text-primary"
  },
  {
    id: "face-care",
    name: "Face Care",
    description: "Gentle care for your face",
    icon: Sparkles,
    color: "text-secondary"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-gradient-beach">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-gotham font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collection of organic skincare products, 
            each category designed to enhance your natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="group hover:shadow-ocean transition-all duration-300 border-border/50 hover:border-primary/30 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-ocean rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-8 h-8 text-white`} />
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.description}
                      </p>
                    </div>

                    <Link to={`/category/${category.id}`}>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full hover:bg-primary/10 hover:text-primary"
                      >
                        Explore
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;