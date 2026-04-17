import NavBar from '@/components/NavBar';

export default function BibliotecaPage() {
  return (
    <>
      <NavBar />
      <iframe
        src={`${import.meta.env.BASE_URL}biblioteca.html`}
        style={{ display: 'block', width: '100%', height: 'calc(100vh - 64px)', border: 'none' }}
        title="Biblioteca Panel"
        allow="fullscreen"
      />
    </>
  );
}
