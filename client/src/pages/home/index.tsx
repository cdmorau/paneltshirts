import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import ShoppingCart from '@/components/ShoppingCart';
import { products } from '@/lib/products';
import { useCartLogic } from './useCartLogic';
import { HeroSection } from './HeroSection';
import { FeaturedSection } from './FeaturedSection';
import { DesignerCTA } from './DesignerCTA';
import { CatalogSection } from './CatalogSection';
import { AboutSection } from './AboutSection';
import { NewsletterSection } from './NewsletterSection';
import { Footer } from './Footer';

export default function Home() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    email,
    setEmail,
    featuredProducts,
    handleAddToCart,
    handleUpdateQuantity,
    handleRemoveItem,
    handleNewsletterSignup,
  } = useCartLogic();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const handleViewCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar cartCount={cartItems.length} onCartOpen={() => setIsCartOpen(true)} />
      <HeroSection onViewCatalog={handleViewCatalog} />
      <FeaturedSection products={featuredProducts} onAddToCart={handleAddToCart} />
      <DesignerCTA />
      <CatalogSection products={products} onAddToCart={handleAddToCart} />
      <AboutSection />
      <NewsletterSection email={email} setEmail={setEmail} onSubmit={handleNewsletterSignup} />
      <Footer />
      <ShoppingCart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
