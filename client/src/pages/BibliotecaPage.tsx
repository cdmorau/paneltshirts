import NavBar from '@/components/NavBar';

export default function BibliotecaPage() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <NavBar />
      <iframe
        src={`${import.meta.env.BASE_URL}biblioteca.html`}
        style={{ flex: 1, border: 'none', display: 'block', minHeight: 0 }}
        title="Biblioteca Panel"
        allow="fullscreen"
      />
    </div>
  );
}
