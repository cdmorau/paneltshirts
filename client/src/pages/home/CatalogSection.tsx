import type { Product } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

interface CatalogSectionProps {
  products: Product[];
  onAddToCart: (product: Product, color: string, size: string) => void;
}

export function CatalogSection({ products, onAddToCart }: CatalogSectionProps) {
  return (
    <section id="catalog" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Catálogo Completo
          </h2>
          <div className="w-16 h-1 bg-foreground"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
