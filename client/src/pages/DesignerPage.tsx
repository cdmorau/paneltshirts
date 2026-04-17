import NavBar from '@/components/NavBar';

export default function DesignerPage() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <NavBar />
      <iframe
        src="/designer.html"
        style={{ flex: 1, border: 'none', display: 'block', minHeight: 0 }}
        title="Panel Designer"
        allow="fullscreen"
      />
    </div>
  );
}
