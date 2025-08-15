import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, getTotalItems } = useCart();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative h-10 w-10 group-hover:w-48 transition-all duration-700 ease-out overflow-hidden">
              <img 
                src="/lovable-uploads/4e3df127-931d-4b40-9770-c0807242c185.png" 
                alt="Glowis Logo" 
                className="h-10 w-10 object-contain absolute top-0 left-0 transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-75"
              />
              <img 
                src="/lovable-uploads/52f8e398-85e7-41cc-b48f-236c86547dfb.png" 
                alt="Glowis Full Logo" 
                className="h-10 w-auto object-contain absolute top-0 left-0 transition-all duration-700 ease-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'} ${isRTL ? 'font-plex-arabic' : ''}`}>
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              {t('home')}
            </Link>
            <Link to="/shop" className="text-foreground hover:text-primary transition-colors">
              {t('shop')}
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              {t('about')}
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <LanguageSwitch />
            <Link to="/login">
              <Button variant="ghost" size="sm" className={`text-foreground hover:text-primary ${isRTL ? 'font-plex-arabic' : ''}`}>
                <User className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('login')}
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              className={`text-foreground hover:text-primary border-primary/20 ${isRTL ? 'font-plex-arabic' : ''}`}
              onClick={toggleCart}
            >
              <ShoppingCart className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('cart')} ({getTotalItems()})
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className={`flex flex-col space-y-4 ${isRTL ? 'font-plex-arabic' : ''}`}>
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                to="/shop"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('shop')}
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <LanguageSwitch />
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="justify-start w-full">
                    <User className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('login')}
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="justify-start"
                  onClick={() => {
                    toggleCart();
                    setIsMenuOpen(false);
                  }}
                >
                  <ShoppingCart className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('cart')} ({getTotalItems()})
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;