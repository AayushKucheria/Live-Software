"use client";
import { motion } from 'framer-motion';

interface TitleSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const TitleSlideTemplate = ({ currentSubsection = 'title', updateCurrentSubsection }: TitleSlideProps = {}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 flex flex-col items-center justify-center min-h-[24rem]">
          <h1 className="text-4xl font-bold hand-drawn-text mb-10 text-center">
            Live Systems Models
          </h1>
          
          {/* Animated Earth Graphic */}
          <motion.div
            className="w-20 h-20 bg-blue-500 rounded-full overflow-hidden relative shadow-lg mb-10"
            animate={{
              rotate: 360,
            }}
            transition={{
              loop: Infinity,
              ease: "linear",
              duration: 15 // Adjust duration for speed
            }}
          >
            {/* Simple representation of continents */}
            <div className="absolute w-10 h-8 bg-green-500 rounded-md top-3 left-2 transform -rotate-12 opacity-80"></div>
            <div className="absolute w-8 h-6 bg-green-400 rounded-md bottom-2 right-1 transform rotate-10 opacity-70"></div>
            <div className="absolute w-4 h-4 bg-green-600 rounded-full top-8 right-4 opacity-75"></div>
          </motion.div>

          <div className="flex flex-col items-center space-y-12">
            <h2 className="text-2xl hand-drawn-text text-center">
              A Platform for Fluidly Composing, Sharing, <br/> and Enriching Causal Models of World Systems
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlideTemplate;