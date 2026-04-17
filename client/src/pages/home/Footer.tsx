export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>PANEL!</h3>
            <p className="text-sm text-muted-foreground">
              Camisetas urbanas con diseño minimalista contemporáneo.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Tienda</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Catálogo</a></li>
              <li><a href="#featured" className="hover:text-foreground transition-colors">Destacados</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Información</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">Acerca de</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 PANEL! Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
