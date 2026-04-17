import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavBarProps {
  cartCount?: number;
  onCartOpen?: () => void;
}

export default function NavBar({ cartCount = 0, onCartOpen }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 bg-background border-b border-border flex-shrink-0">
      <div className="w-full flex items-center justify-between h-16 pl-3 pr-4 md:pl-4 md:pr-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/images/logoPanel.svg" alt="PANEL!" className="h-11 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#featured" className="text-sm font-semibold hover:text-muted-foreground transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Destacados
          </a>
          <a href="/#catalog" className="text-sm font-semibold hover:text-muted-foreground transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Catálogo
          </a>
          <a href="/#about" className="text-sm font-semibold hover:text-muted-foreground transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Acerca de
          </a>
          <a href="/designer" className="text-sm font-semibold hover:text-muted-foreground transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Diseñar
          </a>
          <a href="/biblioteca" className="text-sm font-semibold hover:text-muted-foreground transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Biblioteca
          </a>
        </div>

        {/* Cart & Hamburger */}
        <div className="flex items-center gap-4">
          {onCartOpen && (
            <button
              onClick={onCartOpen}
              className="relative p-2 hover:bg-secondary rounded-sm transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-foreground text-background text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-sm transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border p-4 space-y-3">
          <a href="/#featured" className="block text-sm font-semibold hover:text-muted-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Destacados
          </a>
          <a href="/#catalog" className="block text-sm font-semibold hover:text-muted-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Catálogo
          </a>
          <a href="/#about" className="block text-sm font-semibold hover:text-muted-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Acerca de
          </a>
          <a href="/designer" className="block text-sm font-semibold hover:text-muted-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Diseñar
          </a>
          <a href="/biblioteca" className="block text-sm font-semibold hover:text-muted-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Biblioteca
          </a>
        </div>
      )}
    </nav>
  );
}
