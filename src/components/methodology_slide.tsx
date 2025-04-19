"use client";

interface MethodologySlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const MethodologySlideTemplate = ({ currentSubsection = 'methodology', updateCurrentSubsection }: MethodologySlideProps = {}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">General dynamic</h2>
          
          <div className="space-y-6">
            <p className="text-xl hand-drawn-text">
              A substack like platform that takes in prayers from users w varied experience
            </p>
            
            <p className="text-xl hand-drawn-text">
              Then on the user side, system attunes to compose/grow arbitrary systems
              models inspired both by broad prayers and specific choices in real time.
            </p>
            
            <p className="text-xl hand-drawn-text">
              this happens for each user; to themselves in the future, or to
              another model-builder
            </p>
          </div>
          
          <div className="mt-10 flex justify-center">
            <div className="hand-drawn-box p-6 bg-green-50 w-full max-w-2xl">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold hand-drawn-text mb-2">Input</h3>
                  <p className="hand-drawn-text">User prayers & requests</p>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-16 h-8" viewBox="0 0 24 8" fill="none">
                    <path d="M0 4H22M22 4L18 1M22 4L18 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                
                <div className="text-center md:text-right">
                  <h3 className="text-lg font-semibold hand-drawn-text mb-2">Output</h3>
                  <p className="hand-drawn-text">Growing causal models</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologySlideTemplate;