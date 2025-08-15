import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Minus, 
  Plus, 
  ChevronLeft,
  Leaf,
  Droplets,
  Shield,
  Sun
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock product data
const products = {
  "1": {
    id: "1",
    name: "Glowis 88 Body Scrub",
    price: 45,
    originalPrice: 55,
    image: "/lovable-uploads/9edba7c5-5e47-4fd8-9989-b374ce64d021.png",
    category: "Body Care",
    rating: 5,
    reviewCount: 127,
    description: "Transform your skin with our luxurious Glowis 88 body scrub infused with natural sea salt and organic coconut oil. This gentle yet effective exfoliant removes dead skin cells while nourishing your skin with essential moisture.",
    keyIngredients: ["Sea Salt", "Organic Coconut Oil", "Argan Oil", "Vitamin E"],
    benefits: ["Exfoliates dead skin", "Deeply moisturizes", "Improves circulation", "Leaves skin silky smooth"],
    howToUse: "Apply to damp skin in circular motions. Rinse thoroughly with warm water. Use 2-3 times per week for best results.",
    skinType: "All skin types",
    size: "250ml / 8.5fl oz",
    isOrganic: true,
    isNew: true
  },
  "2": {
    id: "2", 
    name: "Glowis 88 Refreshing Face Water",
    price: 32,
    originalPrice: undefined,
    image: "/lovable-uploads/e0fe0740-a41d-4718-817d-1f2c72dbaeec.png",
    category: "Cleansers",
    rating: 4,
    reviewCount: 89,
    description: "A gentle, alcohol-free toner that refreshes and hydrates your skin while removing traces of makeup and impurities. The Glowis 88 face water is infused with rose water and aloe vera for a soothing experience.",
    keyIngredients: ["Rose Water", "Aloe Vera", "Cucumber Extract", "Hyaluronic Acid"],
    benefits: ["Balances skin pH", "Hydrates and refreshes", "Prepares skin for serums", "Soothes irritation"],
    howToUse: "Apply to cotton pad and gently sweep across face and neck, or spray directly onto clean skin.",
    skinType: "All skin types, especially sensitive",
    size: "150ml / 5.1fl oz",
    isOrganic: true,
    isNew: false
  },
  "3": {
    id: "3",
    name: "Glowis 88 Lip Oil",
    price: 28,
    originalPrice: undefined,
    image: "/lovable-uploads/e35324d8-d5b7-4408-bd9e-308467fbad4f.png",
    category: "Lip Care",
    rating: 5,
    reviewCount: 156,
    description: "A lightweight, non-sticky Glowis 88 lip oil that provides long-lasting moisture and a subtle natural shine. Enriched with jojoba oil and vitamin E for ultimate lip care.",
    keyIngredients: ["Jojoba Oil", "Vitamin E", "Sweet Almond Oil", "Vanilla Extract"],
    benefits: ["Deeply moisturizes lips", "Provides natural shine", "Non-sticky formula", "Long-lasting hydration"],
    howToUse: "Apply directly to lips as needed throughout the day. Can be used alone or over lipstick.",
    skinType: "All skin types",
    size: "10ml / 0.34fl oz",
    isOrganic: true,
    isNew: false
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link to="/shop">
          <Button variant="ghost" className="mb-6 hover:bg-primary/10">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden border border-border/50">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              {product.isNew && (
                <Badge className="bg-organic-green text-organic-green-foreground">
                  New
                </Badge>
              )}
              {product.isOrganic && (
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  Organic
                </Badge>
              )}
            </div>

            {/* Title and Rating */}
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < product.rating ? 'fill-primary text-primary' : 'text-muted'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-foreground">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Leaf className="w-4 h-4 text-organic-green" />
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Droplets className="w-4 h-4 text-primary" />
                <span>Deeply Hydrating</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-secondary" />
                <span>Dermatologist Tested</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Sun className="w-4 h-4 text-accent-foreground" />
                <span>Natural Ingredients</span>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={decrementQuantity}
                    className="h-10 w-10 p-0"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={incrementQuantity}
                    className="h-10 w-10 p-0"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Size: {product.size}
                </p>
              </div>

              <div className="flex gap-3">
                <Button 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-ocean"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 hover:bg-primary/10"
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="usage">How to Use</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Product Info</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Skin Type:</span>
                          <span>{product.skinType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Size:</span>
                          <span>{product.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Category:</span>
                          <span>{product.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ingredients">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Key Ingredients</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.keyIngredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-accent/20 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-organic-green"></div>
                        <span className="font-medium">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="usage">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">How to Use</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.howToUse}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <h4 className="font-semibold mb-2">Customer Reviews</h4>
                    <p className="text-muted-foreground mb-4">
                      {product.reviewCount} reviews with an average rating of {product.rating}/5 stars
                    </p>
                    <Button variant="outline">Write a Review</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;