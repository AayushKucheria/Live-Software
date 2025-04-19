"use client";

import { useState, useEffect, useMemo } from 'react';

// Define the props interface for the component
interface ConclusionSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const ConclusionSlideTemplate = ({ currentSubsection = 'immediate', updateCurrentSubsection }: ConclusionSlideProps = {}) => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'immediate': 0,
    'longterm': 1
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'immediate',
    1: 'longterm'
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
    // Immediate hopes slide
    {
      title: "Immediate Hopes",
      content: (
        <div>
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Our Future Hopes:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="hand-drawn-box p-4 bg-amber-50 flex flex-col items-center">
              <span className="text-2xl mb-2">🧩</span>
              <h3 className="text-lg font-semibold hand-drawn-text mb-1 text-center">Richer Composition</h3>
              <p className="hand-drawn-text text-center text-sm">
                Widening the scope of creation through diverse composition possibilities
              </p>
            </div>
            
            <div className="hand-drawn-box p-4 bg-blue-50 flex flex-col items-center">
              <span className="text-2xl mb-2">🏆</span>
              <h3 className="text-lg font-semibold hand-drawn-text mb-1 text-center">Credit Assignment</h3>
              <p className="hand-drawn-text text-center text-sm">
                Building robust methods for tracking and assigning contributions
              </p>
            </div>
            
            <div className="hand-drawn-box p-4 bg-green-50 flex flex-col items-center">
              <span className="text-2xl mb-2">🔍</span>
              <h3 className="text-lg font-semibold hand-drawn-text mb-1 text-center">Process Nuance</h3>
              <p className="hand-drawn-text text-center text-sm">
                Adding depth to the user-creator design and development process
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <div className="hand-drawn-box p-5 bg-amber-50 max-w-2xl">
              <p className="hand-drawn-text text-center">
                These immediate steps will help establish the foundation for our collaborative platform
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Long-term aspirations slide
    {
      title: "Long-term Aspirations",
      content: (
        <div>
          <h2 className="text-2xl font-bold hand-drawn-text mb-8">Long-term Vision:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="hand-drawn-box p-5 bg-blue-50">
              <h3 className="text-lg font-semibold hand-drawn-text mb-3 text-center">Ecosystem Growth</h3>
              <ul className="space-y-3">
                <li className="hand-drawn-text flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Self-sustaining creator community</span>
                </li>
                <li className="hand-drawn-text flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Cross-domain model integration</span>
                </li>
                <li className="hand-drawn-text flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>New paradigms for collaborative design</span>
                </li>
              </ul>
            </div>
            
            <div className="hand-drawn-box p-5 bg-green-50">
              <h3 className="text-lg font-semibold hand-drawn-text mb-3 text-center">Broader Impact</h3>
              <ul className="space-y-3">
                <li className="hand-drawn-text flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Transforming knowledge representation</span>
                </li>
                <li className="hand-drawn-text flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Centering human connection in digital spaces</span>
                </li>
                <li className="hand-drawn-text flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Evolving beyond rigid formal structures</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="hand-drawn-box p-5 bg-purple-50 max-w-2xl">
              <p className="hand-drawn-text text-center">
                "Live Systems Models will fundamentally change how we collaborate
                on complex ideas and share meaning across contexts"
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
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
                    ? 'bg-amber-600 text-white' 
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
              : 'bg-amber-600 text-white hover:bg-amber-700'
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
                currentSlide === index ? 'bg-amber-600' : 'bg-gray-300'
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
              : 'bg-amber-600 text-white hover:bg-amber-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ConclusionSlideTemplate;