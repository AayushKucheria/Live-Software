"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import TitleSlideTemplate from "@/components/title_slide";
import IntroductionSlideTemplate from "@/components/concept_slide";
import MethodologySlideTemplate from "@/components/demo_slide";
import SummarySlideTemplate from "@/components/summary_slide";
import ConclusionSlideTemplate from "@/components/conclusion_slide";
import ImplementationSlideTemplate from "@/components/live_software_slide";

// Define the structure of our presentation with sections and subsections
const presentationStructure = {
  title: { subsections: ['main'] },
  concept: { subsections: ['informal_formal', 'extracting_insights', 'modifying_formalisms'] },
  live_software: { subsections: ['how_it_works'] },
  demo: { subsections: ['demo'] },
  summary: { subsections: ['key_points'] },
  conclusion: { subsections: ['immediate', 'longterm'] }
};

// Type for our slide sections
type SlideSection = keyof typeof presentationStructure;

export default function Home() {
  // Track both the current section and subsection
  const [activeSlide, setActiveSlide] = useState<SlideSection>('title');
  const [activeSubsection, setActiveSubsection] = useState<string>('main');
  
  // Define the slide order for navigation (main sections)
  const slideOrder = useMemo<SlideSection[]>(() => 
    ['title', 'live_software', 'concept', 'demo', 'summary', 'conclusion']
  , []);
  
  // Function to navigate to the next slide or subsection
  const goToNextSlide = useCallback(() => {
    const currentSectionIndex = slideOrder.indexOf(activeSlide);
    const currentSection = presentationStructure[activeSlide];
    const currentSubsectionIndex = currentSection.subsections.indexOf(activeSubsection);
    
    // If there are more subsections in the current section, go to the next subsection
    if (currentSubsectionIndex < currentSection.subsections.length - 1) {
      setActiveSubsection(currentSection.subsections[currentSubsectionIndex + 1]);
    } 
    // Otherwise, go to the next section (if available)
    else if (currentSectionIndex < slideOrder.length - 1) {
      const nextSection = slideOrder[currentSectionIndex + 1];
      setActiveSlide(nextSection);
      setActiveSubsection(presentationStructure[nextSection].subsections[0]);
    }
  }, [activeSlide, activeSubsection, slideOrder]);
  
  // Function to navigate to the previous slide or subsection
  const goToPreviousSlide = useCallback(() => {
    const currentSectionIndex = slideOrder.indexOf(activeSlide);
    const currentSection = presentationStructure[activeSlide];
    const currentSubsectionIndex = currentSection.subsections.indexOf(activeSubsection);
    
    // If there are previous subsections in the current section, go to the previous subsection
    if (currentSubsectionIndex > 0) {
      setActiveSubsection(currentSection.subsections[currentSubsectionIndex - 1]);
    } 
    // Otherwise, go to the previous section (if available)
    else if (currentSectionIndex > 0) {
      const prevSection = slideOrder[currentSectionIndex - 1];
      setActiveSlide(prevSection);
      // Go to the last subsection of the previous section
      const prevSubsections = presentationStructure[prevSection].subsections;
      setActiveSubsection(prevSubsections[prevSubsections.length - 1]);
    }
  }, [activeSlide, activeSubsection, slideOrder]);
  
  // Function to directly navigate to a specific section
  const goToSection = (section: SlideSection) => {
    setActiveSlide(section);
    setActiveSubsection(presentationStructure[section].subsections[0]);
  };
  
  // Function to update just the subsection
  const updateSubsection = (subsection: string) => {
    // Only update if it's a valid subsection for the current section
    if (presentationStructure[activeSlide].subsections.includes(subsection)) {
      setActiveSubsection(subsection);
    }
  };
  
  // Calculate total slides and current slide number for progress indicator
  const getTotalSlideCount = () => {
    return Object.values(presentationStructure).reduce(
      (total, section) => total + section.subsections.length, 0
    );
  };
  
  const getCurrentSlideNumber = () => {
    let count = 0;
    for (let i = 0; i < slideOrder.indexOf(activeSlide); i++) {
      count += presentationStructure[slideOrder[i]].subsections.length;
    }
    count += presentationStructure[activeSlide].subsections.indexOf(activeSubsection) + 1;
    return count;
  };
  
  // Add keyboard event listeners for navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space' || event.code === 'ArrowRight') {
        event.preventDefault();
        goToNextSlide();
      } else if (event.code === 'ArrowLeft') {
        event.preventDefault();
        goToPreviousSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSlide, activeSubsection, goToNextSlide, goToPreviousSlide]); // Include all required dependencies
  
  // Check if we're at the first slide overall
  const isFirstSlide = activeSlide === slideOrder[0] && 
                       activeSubsection === presentationStructure[slideOrder[0]].subsections[0];
  
  // Check if we're at the last slide overall
  const isLastSlide = activeSlide === slideOrder[slideOrder.length - 1] && 
                      activeSubsection === presentationStructure[slideOrder[slideOrder.length - 1]].subsections[
                        presentationStructure[slideOrder[slideOrder.length - 1]].subsections.length - 1
                      ];
  
  // Get background color for slide buttons based on section
  const getSectionColor = (section: SlideSection) => {
    const colors = {
      title: 'bg-gray-800',
      concept: 'bg-blue-600',
      live_software: 'bg-indigo-600',
      demo: 'bg-green-600',
      summary: 'bg-teal-600',
      conclusion: 'bg-amber-600'
    };
    return colors[section] || 'bg-gray-600';
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          Live Software
        </h1>
        <p className="text-gray-600 mb-4">Growing Interfaces</p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {slideOrder.map((section) => (
            <button 
              key={section}
              onClick={() => goToSection(section)} 
              className={`px-4 py-2 rounded-md transition-colors ${
                activeSlide === section 
                  ? getSectionColor(section) + ' text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {section === 'live_software' ? 'Live Software' : 
               section === 'demo' ? 'Demo' :
               section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </header>
      
      <div className="container mx-auto">
        {activeSlide === 'title' ? (
          <TitleSlideTemplate />
        ) : activeSlide === 'concept' ? (
          <IntroductionSlideTemplate 
            currentSubsection={activeSubsection}
            updateCurrentSubsection={updateSubsection}
          />
        ) : activeSlide === 'live_software' ? (
          <ImplementationSlideTemplate />
        ) : activeSlide === 'demo' ? (
          <MethodologySlideTemplate />
        ) : activeSlide === 'summary' ? (
          <SummarySlideTemplate 
            currentSubsection={activeSubsection}
            updateCurrentSubsection={updateSubsection}
          />
        ) : (
          <ConclusionSlideTemplate 
            currentSubsection={activeSubsection}
            updateCurrentSubsection={updateSubsection}
          />
        )}
      </div>
      
      {/* Navigation controls with subsection information */}
      <div className="flex justify-between mt-8 max-w-4xl mx-auto px-4">
        <button 
          onClick={goToPreviousSlide}
          disabled={isFirstSlide}
          className={`px-4 py-2 rounded-md ${
            isFirstSlide
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          ← Previous
        </button>
        
        <div className="text-sm text-gray-500 self-center flex flex-col items-center">
          <div className="mb-1">
            {getCurrentSlideNumber()} / {getTotalSlideCount()}
          </div>
          <div className="text-xs text-gray-400">
            {activeSlide} • {activeSubsection}
          </div>
        </div>
        
        <button 
          onClick={goToNextSlide}
          disabled={isLastSlide}
          className={`px-4 py-2 rounded-md ${
            isLastSlide
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
