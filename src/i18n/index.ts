import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      home: "HOME",
      shop: "SHOP", 
      about: "ABOUT",
      login: "LOGIN",
      cart: "CART",
      
      // Hero Section
      heroTitle: "Pure Organic Skincare",
      heroSubtitle: "Discover the power of nature with our premium organic skincare collection",
      shopNow: "Shop Now",
      
      // Product Card
      addToCart: "Add to Cart",
      
      // Cart
      cartTitle: "Shopping Cart",
      removeFromCart: "Remove",
      emptyCart: "Your cart is empty",
      continueShopping: "Continue Shopping",
      
      // Messages
      addedToCart: "Added to cart successfully!",
      removedFromCart: "Removed from cart",
      
      // Common
      price: "Price",
      total: "Total",
      quantity: "Quantity"
    }
  },
  ar: {
    translation: {
      // Navigation
      home: "الرئيسية",
      shop: "المتجر",
      about: "معلومات عنا", 
      login: "تسجيل الدخول",
      cart: "السلة",
      
      // Hero Section
      heroTitle: "منتجات عناية طبيعية خالصة",
      heroSubtitle: "اكتشف قوة الطبيعة مع مجموعتنا المتميزة من منتجات العناية الطبيعية",
      shopNow: "تسوق الآن",
      
      // Product Card
      addToCart: "إضافة للسلة",
      
      // Cart
      cartTitle: "سلة التسوق",
      removeFromCart: "إزالة",
      emptyCart: "سلتك فارغة",
      continueShopping: "متابعة التسوق",
      
      // Messages
      addedToCart: "تم إضافة المنتج للسلة بنجاح!",
      removedFromCart: "تم إزالة المنتج من السلة",
      
      // Common
      price: "السعر",
      total: "المجموع",
      quantity: "الكمية"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;