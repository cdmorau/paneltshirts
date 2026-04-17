import NavBar from '@/components/NavBar';

export default function DesignerPage() {
  return (
    <>
      <NavBar />
      <iframe
        src={`${import.meta.env.BASE_URL}frames/designer.html`}
        style={{ display: 'block', width: '100%', height: 'calc(100vh - 64px)', border: 'none' }}
        title="Panel Designer"
        allow="fullscreen"
      />
    </>
  );
}
