import { useState, useEffect } from 'react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="relative"
      style={{ 
        backgroundColor: '#1e3a8a',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0
      }}
    >
      {/* Mouse light effect */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          left: mousePosition.x - 75,
          top: mousePosition.y - 75,
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.03) 70%, transparent 100%)',
          zIndex: 1,
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform',
        }}
      />
      
      {/* Left Div */}
      <div 
        className="absolute flex items-center justify-center z-10"
        style={{
          left: 0,
          top: 0,
          width: '50%',
          height: '100vh'
        }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-white">Soufyan Rachdi</div>
        </div>
      </div>
      
      {/* Right Div */}
      <div 
        className="absolute flex items-center justify-center z-10"
        style={{
          right: 0,
          top: 0,
          width: '50%',
          height: '100vh'
        }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-white">Science Info</div>
        </div>
      </div>
    </div>
  );
}
