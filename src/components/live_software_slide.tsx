"use client";

const ImplementationSlideTemplate = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Live Software: Implementing the Live Interface Pattern</h2>
          
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-2xl h-80 relative overflow-hidden hand-drawn-container">
              {/* Left section: Multiple Creators with puzzle pieces */}
              <div className="absolute left-0 top-0 w-1/3 h-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-center space-y-3">
                  <div className="hand-drawn-circle w-16 h-16 flex items-center justify-center bg-blue-100">
                    <span className="text-xl">🧩</span>
                  </div>
                  <div className="hand-drawn-circle w-16 h-16 flex items-center justify-center bg-green-100">
                    <span className="text-xl">🧩</span>
                  </div>
                  <div className="hand-drawn-circle w-16 h-16 flex items-center justify-center bg-amber-100">
                    <span className="text-xl">🧩</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="hand-drawn-text font-semibold text-center">Modelers</div>
                  <div className="hand-drawn-text text-center text-sm">
                    Tool Prompts
                  </div>
                </div>
              </div>
              
              {/* SVG Arrows instead of rotated divs */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                {/* Single arrow from Multiple Creators to middle box */}
                <line x1="26%" y1="50%" x2="40%" y2="50%" stroke="#4B5563" strokeWidth="2" />
                <polygon points="40%,50% 38%,49% 38%,51%" fill="#4B5563" />
                
                {/* Single arrow from user to middle box */}
                <line x1="74%" y1="50%" x2="60%" y2="50%" stroke="#4B5563" strokeWidth="2" />
                <polygon points="60%,50% 58%,49% 58%,51%" fill="#4B5563" />
              </svg>
              
              {/* Middle section: Composability */}
              <div className="absolute left-1/3 top-1/2 w-1/3 h-auto flex justify-center transform -translate-y-1/2">
                <div className="hand-drawn-box w-40 py-4 px-3 flex items-center justify-center bg-blue-50">
                  <span className="hand-drawn-text text-center">AI Structures Prompts into<br/>Contextualized Models</span>
                </div>
              </div>
              
              {/* Right section: User */}
              <div className="absolute right-0 top-0 w-1/3 h-full flex flex-col items-center justify-center">
                <div className="hand-drawn-circle w-20 h-20 flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <div className="mt-3">
                  <div className="hand-drawn-text font-semibold text-center">User</div>
                  <div className="hand-drawn-text text-center text-sm">
                    Unique Context & Needs
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="hand-drawn-box p-4 bg-blue-50 flex flex-col items-center">
              <span className="text-2xl mb-2">🔄</span>
              <h3 className="text-lg font-semibold hand-drawn-text mb-1 text-center">Composable</h3>
              <p className="hand-drawn-text text-center text-sm">
                Compose prompts and structure them with AI agents
              </p>
            </div>
            
            <div className="hand-drawn-box p-4 bg-green-50 flex flex-col items-center">
              <span className="text-2xl mb-2">🌱</span>
              <h3 className="text-lg font-semibold hand-drawn-text mb-1 text-center">Adaptive</h3>
              <p className="hand-drawn-text text-center text-sm">
                Models tailored to user preferences, modified on the fly
              </p>
            </div>
            
            <div className="hand-drawn-box p-4 bg-amber-50 flex flex-col items-center">
              <span className="text-2xl mb-2">👤</span>
              <h3 className="text-lg font-semibold hand-drawn-text mb-1 text-center">Contextual</h3>
              <p className="hand-drawn-text text-center text-sm">
                Subscribe to modelers whose prompts you find aesthetic
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSlideTemplate;