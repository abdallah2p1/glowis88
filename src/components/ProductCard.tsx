import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isOrganic?: boolean;
  isNew?: boolean;
  rating?: number;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  isOrganic = true, 
  isNew = false,
  rating = 0 
}: ProductCardProps) => {
  const { addItem } = useCart();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image
    });
  };
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-ocean">
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-organic-green text-organic-green-foreground">
              New
            </Badge>
          )}
          {isOrganic && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              Organic
            </Badge>
          )}
        </div>

        {/* Heart Icon */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 right-3 w-8 h-8 p-0 bg-background/80 hover:bg-background text-muted-foreground hover:text-primary"
        >
          <Heart className="w-4 h-4" />
        </Button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            className={`bg-background text-primary hover:bg-background/90 shadow-soft ${isRTL ? 'font-plex-arabic' : ''}`}
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('addToCart')}
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            {category}
          </p>
          
          <Link to={`/product/${id}`}>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
          </Link>

          {/* Rating */}
          {rating > 0 && (
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i < rating ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">
                ({rating}/5)
              </span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">
                ${price}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
            <Button 
              size="sm" 
              variant="outline"
              onClick={handleAddToCart}
              className="ml-2"
            >
              <ShoppingCart className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;