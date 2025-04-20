"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface ConceptSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const ConceptSlideTemplate = ({ currentSubsection = 'informal_formal', updateCurrentSubsection }: ConceptSlideProps = {}) => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'informal_formal': 0,
    'composition': 1
    // Temporarily hiding these slides
    // 'extracting_insights': 1,
    // 'modifying_formalisms': 2
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'informal_formal',
    1: 'composition'
    // Temporarily hiding these slides
    // 1: 'extracting_insights',
    // 2: 'modifying_formalisms'
  }), []);
  
  // Set the current slide based on the subsection prop
  const [currentSlide, setCurrentSlide] = useState(subsectionMap[currentSubsection as keyof typeof subsectionMap] || 0);
  
  // Update the current slide when the subsection prop changes
  useEffect(() => {
    const slideIndex = subsectionMap[currentSubsection as keyof typeof subsectionMap];
    if (slideIndex !== undefined) {
      setCurrentSlide(slideIndex);
    }
  }, [currentSubsection, subsectionMap]);
  
  // Function to handle slide changes
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    if (updateCurrentSubsection) {
      updateCurrentSubsection(indexToSubsectionMap[index as keyof typeof indexToSubsectionMap]);
    }
  };
  
  const slides = [
    // Informal/Formal Interaction slide
    {
      title: "Informal/Formal Interaction",
      content: (
        <div>
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Bridging Informal and Formal</h2>
          
          <p className="text-lg hand-drawn-text mb-6">
            Live interfaces enable fluid movement between informal understanding 
            and formal models, preserving richness while gaining precision.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-2xl relative hand-drawn-container p-5">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="hand-drawn-circle w-16 h-16 flex items-center justify-center bg-blue-50">
                    <span className="text-xl">👤</span>
                  </div>
                  <p className="hand-drawn-text text-center mt-2">Intuition</p>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <div className="hand-drawn-box p-3 bg-green-50 w-full">
                    <p className="hand-drawn-text text-center">Live Interface</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="hand-drawn-box w-16 h-16 flex items-center justify-center bg-amber-50">
                    <span className="text-xl">📊</span>
                  </div>
                  <p className="hand-drawn-text text-center mt-2">Formalism</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="hand-drawn-box p-4 bg-blue-50">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl mr-2">💭</span>
                <h3 className="text-lg font-semibold hand-drawn-text text-center">Informal</h3>
              </div>
              <ul className="space-y-1">
                <li className="hand-drawn-text text-sm">• Tacit understanding</li>
                <li className="hand-drawn-text text-sm">• Context-dependent</li>
                <li className="hand-drawn-text text-sm">• Evolving dialogue</li>
              </ul>
            </div>
            
            <div className="hand-drawn-box p-4 bg-amber-50">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl mr-2">⚙️</span>
                <h3 className="text-lg font-semibold hand-drawn-text text-center">Formal</h3>
              </div>
              <ul className="space-y-1">
                <li className="hand-drawn-text text-sm">• Explicit relationships</li>
                <li className="hand-drawn-text text-sm">• Unambiguous logic</li>
                <li className="hand-drawn-text text-sm">• Computationally tractable</li>
              </ul>
            </div>
          </div>
          
          {/* Comparison - Traditional vs Live Software */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="hand-drawn-box p-4 flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold hand-drawn-text mb-2">Traditional Tool Platforms</h3>
              <p className="hand-drawn-text">
                Standardized packages, fixed interfaces, limited customizability
              </p>
            </div>
            
            <div className="hand-drawn-box p-4 flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold hand-drawn-text mb-2">Live Software Platform</h3>
              <p className="hand-drawn-text">
                <span className="font-bold">Heterogeneous recipes</span>, tailored reproduction, on-the-fly modification
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Composition slide
    {
      title: "Affordances Of Live Theory (Composition)",
      content: (
        <div>
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Affordances Of Live Theory (Composition)</h2>
          
          <p className="text-lg hand-drawn-text mb-6">
            Live theory enables fluid composition across multiple levels, 
            from modeller-to-modeller collaboration to integrating models into applications.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-1 gap-8">
                {/* Modeller to modeller section */}
                <div className="hand-drawn-box p-5 bg-blue-50">
                  <h3 className="text-xl font-semibold hand-drawn-text mb-4 text-center">Modeller to modeller</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="hand-drawn-container p-4 bg-white">
                      <div className="flex items-center mb-3">
                        <div className="hand-drawn-circle w-10 h-10 flex items-center justify-center mr-3 bg-purple-50">
                          <span className="text-sm">👤A</span>
                        </div>
                        <div className="hand-drawn-box p-2 flex-1 bg-purple-50">
                          <p className="hand-drawn-text text-sm">Domain Expertise</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="hand-drawn-circle w-10 h-10 flex items-center justify-center mr-3 bg-green-50">
                          <span className="text-sm">👤B</span>
                        </div>
                        <div className="hand-drawn-box p-2 flex-1 bg-green-50">
                          <p className="hand-drawn-text text-sm">Method Expertise</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <div className="hand-drawn-box p-3 bg-white mb-4">
                        <p className="hand-drawn-text text-sm text-center">Shared live interface</p>
                      </div>
                      
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          <p className="hand-drawn-text text-sm">Real-time collaboration</p>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          <p className="hand-drawn-text text-sm">Transparent modification</p>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          <p className="hand-drawn-text text-sm">Skill complementarity</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Model(s) to Application section */}
                <div className="hand-drawn-box p-5 bg-amber-50">
                  <h3 className="text-xl font-semibold hand-drawn-text mb-4 text-center">Model(s) to Application</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="hand-drawn-container p-4 bg-white">
                      <div className="flex flex-col space-y-3">
                        <div className="hand-drawn-box p-2 bg-blue-50">
                          <p className="hand-drawn-text text-sm text-center">Model A</p>
                        </div>
                        <div className="hand-drawn-box p-2 bg-green-50">
                          <p className="hand-drawn-text text-sm text-center">Model B</p>
                        </div>
                        <div className="hand-drawn-box p-2 bg-purple-50">
                          <p className="hand-drawn-text text-sm text-center">Model C</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <div className="hand-drawn-box p-3 bg-white mb-4">
                        <p className="hand-drawn-text text-sm text-center">Application context</p>
                      </div>
                      
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          <p className="hand-drawn-text text-sm">Heterogeneous integration</p>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          <p className="hand-drawn-text text-sm">Context-sensitive binding</p>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          <p className="hand-drawn-text text-sm">Tailored reproduction</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hand-drawn-box p-4 bg-blue-50 max-w-2xl mx-auto">
            <p className="hand-drawn-text text-center">
              "Live theory prioritizes composition over standardization,
              enabling flexible integration across diverse contexts"
            </p>
          </div>
        </div>
      )
    },
    // Extracting Insights slide (temporarily hidden but kept in code)
    {
      title: "Extracting Contextual Insights",
      content: (
        <div>
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Extracting Formalizable Insights</h2>
          
          <p className="text-lg hand-drawn-text mb-6">
            Live interfaces follow contextual flow in conversations, 
            identifying and extracting key relationships that can be formalized.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="hand-drawn-box p-5 bg-blue-50 w-full max-w-4xl">
              <div className="flex flex-col md:flex-row lg:flex-row items-center gap-6">
                <div className="w-full md:w-1/2 lg:w-1/2">
                  <div className="mb-4">
                    <div className="flex items-start mb-2">
                      <div className="hand-drawn-circle w-8 h-8 flex items-center justify-center mr-2 flex-shrink-0 bg-white">
                        <span className="text-sm">A</span>
                      </div>
                      <p className="hand-drawn-text text-sm">I think when we increase public funding, innovation tends to rise.</p>
                    </div>
                    
                    <div className="flex items-start mb-2">
                      <div className="hand-drawn-circle w-8 h-8 flex items-center justify-center mr-2 flex-shrink-0 bg-white">
                        <span className="text-sm">B</span>
                      </div>
                      <p className="hand-drawn-text text-sm">But that depends on how it's allocated, right?</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="hand-drawn-circle w-8 h-8 flex items-center justify-center mr-2 flex-shrink-0 bg-white">
                        <span className="text-sm">A</span>
                      </div>
                      <p className="hand-drawn-text text-sm">Good point. Targeted grants to promising areas might work better.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center md:justify-start">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="hand-drawn-box p-3 bg-white">
                    <h3 className="text-md font-semibold hand-drawn-text mb-2 text-center">Extracted Model</h3>
                    <div className="hand-drawn-container p-2">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center mb-3">
                          <div className="hand-drawn-box p-1 px-2 bg-amber-50">
                            <span className="hand-drawn-text text-sm">Public Funding</span>
                          </div>
                          <svg className="w-10 h-6 mx-1" viewBox="0 0 24 6" fill="none">
                            <path d="M0 3H22M22 3L19 1M22 3L19 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                          </svg>
                          <div className="hand-drawn-box p-1 px-2 bg-amber-50">
                            <span className="hand-drawn-text text-sm">Innovation</span>
                          </div>
                        </div>
                        <div className="hand-drawn-box p-1 px-2 bg-green-50 mb-1">
                          <span className="hand-drawn-text text-sm">Allocation Method</span>
                        </div>
                        <svg className="w-6 h-10" viewBox="0 0 6 24" fill="none">
                          <path d="M3 0V22M3 22L1 19M3 22L5 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Modifying Formalisms slide (temporarily hidden but kept in code)
    {
      title: "Modifying Formalisms",
      content: (
        <div>
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Fluid Modification of Formalisms</h2>
          
          <p className="text-lg hand-drawn-text mb-6">
            Live interfaces enable real-time modification of formal structures,
            allowing models to evolve and adapt to new contexts.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="hand-drawn-box p-4 bg-purple-50 flex flex-col">
                  <h3 className="text-lg font-semibold hand-drawn-text mb-3 text-center">Static Formalism</h3>
                  
                  <div className="flex-1 flex justify-center items-center mb-4">
                    <div className="hand-drawn-container p-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="hand-drawn-box p-2 bg-white">
                          <p className="hand-drawn-text text-sm text-center">Variable A</p>
                        </div>
                        <div className="hand-drawn-box p-2 bg-white">
                          <p className="hand-drawn-text text-sm text-center">Variable B</p>
                        </div>
                        <div className="hand-drawn-box p-2 bg-white">
                          <p className="hand-drawn-text text-sm text-center">Variable C</p>
                        </div>
                        <div className="hand-drawn-box p-2 bg-white">
                          <p className="hand-drawn-text text-sm text-center">Variable D</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="hand-drawn-box inline-block px-3 py-1 mb-2 bg-red-50">
                      <p className="hand-drawn-text text-sm">Fixed structure</p>
                    </div>
                    <p className="hand-drawn-text text-sm">Requires complete redesign to change</p>
                  </div>
                </div>
                
                <div className="hand-drawn-box p-4 bg-green-50 flex flex-col">
                  <h3 className="text-lg font-semibold hand-drawn-text mb-3 text-center">Live Formalism</h3>
                  
                  <div className="flex-1 flex justify-center items-center mb-4">
                    <div className="hand-drawn-container p-3 relative">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="hand-drawn-box p-2 bg-white">
                          <p className="hand-drawn-text text-sm text-center">Variable A</p>
                        </div>
                        <div className="hand-drawn-box p-2 bg-white">
                          <p className="hand-drawn-text text-sm text-center">Variable B'</p>
                        </div>
                        <div className="hand-drawn-box p-2 bg-white">
                          <p className="hand-drawn-text text-sm text-center">New Var X</p>
                        </div>
                        <div className="hand-drawn-box p-2 bg-white opacity-50">
                          <p className="hand-drawn-text text-sm text-center line-through">Variable D</p>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center hand-drawn-circle bg-green-200">
                        <span className="text-xs">✏️</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="hand-drawn-box inline-block px-3 py-1 mb-2 bg-green-100">
                      <p className="hand-drawn-text text-sm">Fluid adaptation</p>
                    </div>
                    <p className="hand-drawn-text text-sm">Real-time modifications with preserved context</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hand-drawn-box p-4 bg-blue-50 max-w-2xl mx-auto">
            <p className="hand-drawn-text text-center">
              "Live interfaces allow formalisms to be constructed, modified, and grown
              through continuous engagement with human context"
            </p>
          </div>
        </div>
      )
    }
  ];
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-500">
            {slides[currentSlide].title}
          </div>
          <div className="flex space-x-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`text-sm px-3 py-1 rounded-md ${
                  currentSlide === index 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-3">
        <button 
          onClick={() => currentSlide > 0 && handleSlideChange(currentSlide - 1)} 
          disabled={currentSlide === 0}
          className={`text-sm px-3 py-1 rounded-md ${
            currentSlide === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Previous
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={() => currentSlide < slides.length - 1 && handleSlideChange(currentSlide + 1)}
          disabled={currentSlide === slides.length - 1}
          className={`text-sm px-3 py-1 rounded-md ${
            currentSlide === slides.length - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ConceptSlideTemplate;