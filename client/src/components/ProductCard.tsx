/**
 * ProductCard Component
 * Design: Minimalist Urban Contemporary - Floating cards with subtle shadows
 * Displays product image, name, price, and color options
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, color: string, size: string) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product, selectedColor, selectedSize);
    setTimeout(() => setIsAdding(false), 300);
  };

  const currentColor = product.colors.find((c) => c.name === selectedColor);

  return (
    <div className="product-card bg-card text-card-foreground rounded-sm border border-border overflow-hidden hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={currentColor?.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {product.featured && (
          <div className="absolute top-4 right-4 bg-foreground text-background px-3 py-1 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Destacado
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Name and Price */}
        <div>
          <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
          <div className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ${product.price.toFixed(2)}
          </div>
        </div>

        {/* Color Selection */}
        {product.colors.length > 1 && (
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Color
            </label>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-sm border-2 transition-all ${
                    selectedColor === color.name
                      ? 'border-foreground scale-110'
                      : 'border-border hover:border-foreground'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* Size Selection */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Talla
          </label>
          <div className="grid grid-cols-3 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2 px-3 text-sm font-semibold border rounded-sm transition-all ${
                  selectedSize === size
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-background text-foreground border-border hover:border-foreground'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold uppercase tracking-wider h-12 rounded-sm"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {isAdding ? 'Agregando...' : 'Agregar al carrito'}
        </Button>
      </div>
    </div>
  );
}
