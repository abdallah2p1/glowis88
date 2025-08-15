import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/42b2d72e-f6e9-435c-810e-e0aab88278fe.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-8 h-8 rounded-full bg-primary/20 animate-float"></div>
      <div className="absolute bottom-32 right-32 w-6 h-6 rounded-full bg-accent/40 animate-gentle-bounce"></div>
      <div className="absolute top-40 left-20 w-4 h-4 rounded-full bg-organic-green/30 animate-float"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight ${isRTL ? 'font-alexandria' : 'font-gotham'}`}>
              <span className="block">{t('heroTitle').split(' ')[0]}</span>
              <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                {t('heroTitle').split(' ').slice(1).join(' ')}
              </span>
            </h1>
            
            <p className={`text-xl sm:text-2xl text-muted-foreground font-light ${isRTL ? 'font-plex-arabic' : ''}`}>
              {t('heroSubtitle')}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button 
                size="lg" 
                className={`bg-primary hover:bg-primary/90 text-primary-foreground shadow-ocean group ${isRTL ? 'font-plex-arabic' : ''}`}
              >
                {t('shopNow')}
                <ChevronRight className={`w-5 h-5 ${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} transition-transform`} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Pattern at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 wave-pattern opacity-30"></div>
    </section>
  );
};

export default HeroSection;