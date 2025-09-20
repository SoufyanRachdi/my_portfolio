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
        className="fixed z-10"
        style={{
          left: 0,
          top: 0,
          width: '50%',
          height: '100vh'
        }}
      >
          <div className="w-full h-full bg-red-500 flex items-center justify-center">
           <div className="text-[5rem] bg-red-500 font-black text-black leading-none">Soufyan Rachdi</div>
          </div>
      </div>
      
      {/* Right Div */}
      <div 
        className="fixed overflow-y-auto z-10"
        style={{
          right: 0,
          top: 0,
          width: '50%',
          height: '100vh'
        }}
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold text-white">Science Info</div>
          </div>
          
          {/* Scrollable content */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">About Science</h3>
              <p className="text-white/90 leading-relaxed">
                Science is a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the universe. The earliest roots of science can be traced to Ancient Egypt and Mesopotamia in around 3000 to 1200 BCE.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Scientific Method</h3>
              <p className="text-white/90 leading-relaxed">
                The scientific method is an empirical method of acquiring knowledge that has characterized the development of science since at least the 17th century. It involves careful observation, applying rigorous skepticism about what is observed, given that cognitive assumptions can distort how one interprets the observation.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Branches of Science</h3>
              <p className="text-white/90 leading-relaxed">
                Science is typically divided into three major branches: natural sciences, social sciences, and formal sciences. Natural sciences study the physical world, social sciences study human behavior and society, and formal sciences study abstract concepts like mathematics and logic.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Importance of Science</h3>
              <p className="text-white/90 leading-relaxed">
                Science has transformed our understanding of the world and has led to countless technological advances that have improved human life. From medical breakthroughs to space exploration, science continues to push the boundaries of what we know and what we can achieve.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Future of Science</h3>
              <p className="text-white/90 leading-relaxed">
                The future of science holds exciting possibilities, from quantum computing and artificial intelligence to renewable energy and space colonization. As our understanding deepens, science will continue to shape the future of humanity and our planet.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Scientific Discoveries</h3>
              <p className="text-white/90 leading-relaxed">
                Throughout history, scientific discoveries have revolutionized our world. From the discovery of DNA to the theory of relativity, these breakthroughs have not only expanded our knowledge but also led to practical applications that benefit society.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Research and Innovation</h3>
              <p className="text-white/90 leading-relaxed">
                Scientific research drives innovation and technological progress. Through rigorous experimentation and peer review, scientists work to uncover new knowledge and develop solutions to complex problems facing humanity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
