import type { Product } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

interface FeaturedSectionProps {
  products: Product[];
  onAddToCart: (product: Product, color: string, size: string) => void;
}

export function FeaturedSection({ products, onAddToCart }: FeaturedSectionProps) {
  return (
    <section id="featured" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Destacados
          </h2>
          <div className="w-16 h-1 bg-foreground"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
