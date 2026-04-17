/**
 * ShoppingCart Component
 * Design: Minimalist Urban Contemporary - Sidebar cart with clean typography
 * Displays cart items, quantities, and checkout functionality
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

export interface CartItem {
  id: string;
  productName: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
}

interface ShoppingCartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function ShoppingCart({
  items,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}: ShoppingCartProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    toast.success('¡Gracias por tu compra! Próximamente disponible.');
    setTimeout(() => {
      setIsCheckingOut(false);
      onClose();
    }, 2000);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-background border-l border-border shadow-2xl z-50 transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Tu Carrito</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
              <p className="text-muted-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Tu carrito está vacío
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="border border-border rounded-sm p-4 space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {item.productName}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.color} - Talla {item.size}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1 hover:bg-secondary rounded-sm transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 border border-border rounded-sm">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="p-2 hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="p-2 hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ${item.price.toFixed(2)} c/u
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal:</span>
                <span className="font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Impuesto (10%):</span>
                <span className="font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  ${tax.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold border-t border-border pt-2 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold uppercase tracking-wider h-12 rounded-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {isCheckingOut ? 'Procesando...' : 'Proceder al Pago'}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
