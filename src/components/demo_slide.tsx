"use client";

interface MethodologySlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const MethodologySlideTemplate = ({ currentSubsection = 'demo', updateCurrentSubsection }: MethodologySlideProps = {}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 flex flex-col items-center justify-center min-h-[24rem]">
          <h2 className="text-5xl font-bold hand-drawn-text mb-12">Demo</h2>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-8">
              <div className="text-4xl transform hover:scale-110 transition-transform">
                🌱
              </div>
              <div className="text-5xl transform hover:scale-110 transition-transform">
                🌿
              </div>
            </div>
            
            <p className="text-2xl hand-drawn-text text-center mt-4 text-emerald-700">
              Let's try interacting with a model
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologySlideTemplate;