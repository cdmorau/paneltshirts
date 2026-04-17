import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onViewCatalog: () => void;
}

export function HeroSection({ onViewCatalog }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                PANEL!
              </h2>
              <p className="text-xl text-muted-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Camisetas urbanas con diseño contemporáneo
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Descubre nuestra colección de camisetas premium con el icónico logo PANEL!. Diseño minimalista, calidad superior y estilo urbano en cada prenda.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                onClick={onViewCatalog}
                className="bg-foreground text-background hover:bg-foreground/90 font-bold uppercase tracking-wider px-8 h-12 rounded-sm"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Ver Catálogo
              </Button>
              <a href="/designer">
                <Button
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-secondary font-bold uppercase tracking-wider px-8 h-12 rounded-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Diseñar
                </Button>
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663536276606/2gA9N3SUTCNiMQ2nCN28kq/tshirt-collection-hero-Ua7NQtwwV2R5jewfCZV6WN.webp"
              alt="PANEL! Collection"
              className="w-full h-auto rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
