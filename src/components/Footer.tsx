import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Facebook, Leaf, Droplets, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-beach relative overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 wave-pattern opacity-10"></div>
      
      {/* Product Characteristics Section */}
      <div className="relative border-b border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Glowis Organic product
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our Glowis 88 products are crafted with the finest organic ingredients 
              sourced from nature's most nourishing elements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Coconut Oil */}
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <span className="text-amber-700 font-bold text-2xl">🥥</span>
                </div>
              </div>
              <h4 className="font-semibold text-foreground">Coconut Oil</h4>
              <p className="text-sm text-muted-foreground">
                Deep moisturizing and natural antimicrobial properties
              </p>
            </div>

            {/* Argan Oil */}
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto bg-organic-green/20 rounded-full flex items-center justify-center group-hover:bg-organic-green/30 transition-colors">
                <Leaf className="w-8 h-8 text-organic-green" />
              </div>
              <h4 className="font-semibold text-foreground">Argan Oil</h4>
              <p className="text-sm text-muted-foreground">
                Rich in vitamin E and essential fatty acids for skin repair
              </p>
            </div>

            {/* Sea Salt */}
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Sea Salt</h4>
              <p className="text-sm text-muted-foreground">
                Natural exfoliation and mineral-rich skin purification
              </p>
            </div>

            {/* Natural Extracts */}
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground">Plant Extracts</h4>
              <p className="text-sm text-muted-foreground">
                Botanical essences for natural glow and skin vitality
              </p>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="w-6 h-6 text-organic-green mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Dermatologist Tested</p>
            </div>
            <div className="text-center">
              <Leaf className="w-6 h-6 text-organic-green mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">100% Organic Certified</p>
            </div>
            <div className="text-center">
              <Droplets className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Cruelty-Free Formula</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/9420985e-2ec8-4056-afa7-4b213c5c90b9.png" 
                  alt="Glowis 88 Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0 hover:bg-primary/10">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0 hover:bg-primary/10">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0 hover:bg-primary/10">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Shop Section */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Categories</h4>
              <div className="space-y-3">
                <Link to="/shop?category=body-care" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Body Care
                </Link>
                <Link to="/shop?category=face-care" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Face Care
                </Link>
              </div>
            </div>

            {/* Help Section */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Help Desk</h4>
              <div className="space-y-3">
                <Link to="/chat" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Chat
                </Link>
                <Link to="/faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
                <Link to="/shipping" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shipping & Returns
                </Link>
                <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
                <Link to="/policies" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Policies
                </Link>
                <Link to="/accessibility" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Accessibility
                </Link>
                <Link to="/account" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  My Account
                </Link>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact</h4>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  Email: hello@glowis88.com
                </div>
                <div className="text-sm text-muted-foreground">
                  Phone: +1 (555) 123-4567
                </div>
                <div className="text-sm text-muted-foreground">
                  Customer Service: 24/7
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="border-border/30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 GLOWIS88. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-20 w-4 h-4 rounded-full bg-primary/20 animate-gentle-bounce"></div>
      <div className="absolute bottom-20 left-16 w-6 h-6 rounded-full bg-accent/30 animate-float"></div>
    </footer>
  );
};

export default Footer;