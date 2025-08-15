import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: "1",
    name: "Glowis 88 Body Scrub",
    price: 45,
    originalPrice: 55,
    image: "/lovable-uploads/9edba7c5-5e47-4fd8-9989-b374ce64d021.png",
    category: "Body Care",
    isOrganic: true,
    isNew: true,
    rating: 5
  },
  {
    id: "2", 
    name: "Glowis 88 Refreshing Face Water",
    price: 32,
    image: "/lovable-uploads/e0fe0740-a41d-4718-817d-1f2c72dbaeec.png",
    category: "Cleansers",
    isOrganic: true,
    rating: 4
  },
  {
    id: "3",
    name: "Glowis 88 Lip Oil",
    price: 28,
    image: "/lovable-uploads/e35324d8-d5b7-4408-bd9e-308467fbad4f.png",
    category: "Lip Care",
    isOrganic: true,
    rating: 5
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover our bestselling organic skincare products, carefully crafted 
              with natural ingredients from the sea and earth.
            </p>
          </div>
          
          <Link to="/shop">
            <Button 
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="sand-texture h-24 opacity-20 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-background px-8 py-2 rounded-full shadow-soft">
              <p className="text-sm text-muted-foreground italic">
                "Nature's finest ingredients for your skin"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;