import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export function DesignerCTA() {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              DISEÑA TU PANEL
            </h2>
            <div className="w-16 h-1 bg-background opacity-60" />
            <p className="text-lg opacity-80 leading-relaxed max-w-md">
              Crea composiciones únicas con nuestro diseñador de paneles.
              Combina imágenes, ajusta proporciones y previsualiza el
              resultado en tiempo real sobre la camiseta en 3D.
            </p>
            <Link href="/designer">
              <Button
                className="bg-background text-foreground hover:bg-secondary font-bold uppercase tracking-wider px-10 h-12 rounded-sm mt-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Abrir Diseñador →
              </Button>
            </Link>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-3 opacity-90">
            {[1, 2, 3, 4].map((n) => (
              <img
                key={n}
                src={`${import.meta.env.BASE_URL}images/Panel Web-0${n}.svg`}
                alt={`Ejemplo de panel ${n}`}
                className="w-full h-auto rounded-sm invert opacity-90 transition-transform duration-300 hover:-translate-y-2 hover:opacity-100 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
