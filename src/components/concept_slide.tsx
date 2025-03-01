"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface IntroductionSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const IntroductionSlideTemplate = ({ currentSubsection = 'overview', updateCurrentSubsection }: IntroductionSlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'overview': 0,
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'overview',
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
    // Sync with parent component if the updateCurrentSubsection function is provided
    if (updateCurrentSubsection) {
      updateCurrentSubsection(indexToSubsectionMap[index as keyof typeof indexToSubsectionMap]);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-2">The Live Interface Pattern</h2>
          <p className="hand-drawn-text text-center text-sm italic mb-6">
            "When attentivity is cheap, fast, and accurate, it becomes possible to scale that which doesn't scale."
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-2xl relative overflow-hidden hand-drawn-container">
              <Image
                src={`${process.env.NODE_ENV === 'production' ? '/Live-Software' : ''}/images/live-interface-pattern.png`}
                alt="Live Interface Pattern showing person-to-person connection through interfaces"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="hand-drawn-box p-4 flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold hand-drawn-text mb-2">Traditional Interfaces</h3>
              <p className="hand-drawn-text">
                Fixed structure, preformed protocols, context-independence that scales through exclusion
              </p>
            </div>
            
            <div className="hand-drawn-box p-4 flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold hand-drawn-text mb-2">Live Interfaces</h3>
              <p className="hand-drawn-text">
                <span className="font-bold">Person-to-person</span>, heterogeneous context, scaling what doesn't scale
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <div className="hand-drawn-box p-3 bg-blue-50 max-w-lg">
              <p className="hand-drawn-text text-center">
                "Context-independence is subtly tyrannical: centralized, preformed, numb."
              </p>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="hand-drawn-box p-4 bg-purple-50 flex flex-col items-center">
              <span className="text-2xl mb-2">🔄</span>
              <h3 className="text-lg font-semibold hand-drawn-text mb-1 text-center">Postformal</h3>
              <p className="hand-drawn-text text-center text-sm">
                Beyond fixed formalisms and structures
              </p>
            </div>
            
            <div className="hand-drawn-box p-4 bg-indigo-50 flex flex-col items-center">
              <span className="text-2xl mb-2">👁️</span>
              <h3 className="text-lg font-semibold hand-drawn-text mb-1 text-center">Attentive</h3>
              <p className="hand-drawn-text text-center text-sm">
                Actively listens and responds to unique contexts
              </p>
            </div>
            
            <div className="hand-drawn-box p-4 bg-blue-50 flex flex-col items-center">
              <span className="text-2xl mb-2">🔍</span>
              <h3 className="text-lg font-semibold hand-drawn-text mb-1 text-center">Adaptive</h3>
              <p className="hand-drawn-text text-center text-sm">
                Dynamically evolves its structure to match changing needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlideTemplate;