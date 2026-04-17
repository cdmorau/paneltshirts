import { useState } from 'react';
import type { CartItem } from '@/components/ShoppingCart';
import type { Product } from '@/lib/products';
import { products } from '@/lib/products';
import { toast } from 'sonner';

export function useCartLogic() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [email, setEmail] = useState('');

  const featuredProducts = products.filter((p) => p.featured);

  const handleAddToCart = (product: Product, color: string, size: string) => {
    const cartItemId = `${product.id}-${color}-${size}`;
    const existingItem = cartItems.find((item) => item.id === cartItemId);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: cartItemId,
          productName: product.name,
          color,
          size,
          price: product.price,
          quantity: 1,
        },
      ]);
    }
    toast.success('Producto agregado al carrito');
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
    } else {
      setCartItems(
        cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.success('Producto removido del carrito');
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('¡Gracias por suscribirte!');
      setEmail('');
    }
  };

  return {
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
  };
}
