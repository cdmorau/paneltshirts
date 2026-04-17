import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NewsletterSectionProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function NewsletterSection({ email, setEmail, onSubmit }: NewsletterSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="container max-w-2xl">
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Mantente Conectado
          </h2>
          <p className="text-lg opacity-90">
            Suscríbete a nuestro boletín para recibir actualizaciones sobre nuevas colecciones y ofertas exclusivas.
          </p>
          <form onSubmit={onSubmit} className="flex gap-3 mt-8">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background text-foreground border-background placeholder:text-muted-foreground rounded-sm h-12"
            />
            <Button
              type="submit"
              className="bg-background text-foreground hover:bg-secondary font-bold uppercase tracking-wider px-8 h-12 rounded-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Suscribir
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
