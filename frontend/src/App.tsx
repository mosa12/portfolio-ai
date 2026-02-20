// src/App.tsx

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f4f8',
      color: '#1a365d',
      fontFamily: 'system-ui, sans-serif',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Hello Mosaraf!
      </h1>
      
      <p style={{ fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
        If you see this text → React is working correctly.<br />
        The blank page problem is solved — now we can build the real portfolio.
      </p>

      <button 
        style={{
          padding: '12px 28px',
          fontSize: '1.1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        onClick={() => alert("Frontend is alive!")}
      >
        Click me to test
      </button>
    </div>
  );
}