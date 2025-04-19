"use client";

import { useState, useEffect, useMemo } from 'react';

// Define the props interface for the component
interface PhilosophySlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const PhilosophySlideTemplate = ({ currentSubsection = 'philosophy', updateCurrentSubsection }: PhilosophySlideProps = {}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Main Ideas</h2>
          
          <ul className="space-y-6">
            <li className="hand-drawn-text text-lg">
              - overall focus on the post-formal ways of doing design.
              <ul className="pl-8 mt-2">
                <li className="hand-drawn-text">- meaning... the fluid/informal interaction with formal structures.</li>
              </ul>
            </li>
            
            <li className="hand-drawn-text text-lg">
              - what rigid structures in interacting with formalisms can we break down
              to facilitate meaning-making?
            </li>
            
            <li className="hand-drawn-text text-lg">
              - dealing w the otherwise-inflexible combinations of formal structure for
              the sake of interoperability, provability, and more!
            </li>
            
            <li className="hand-drawn-text text-lg">
              - how does Live Theory differ from other approaches?
              <ul className="pl-8 mt-2">
                <li className="hand-drawn-text">- focus on the p2p nature of connection between living beings</li>
                <li className="hand-drawn-text">- meaningful interactions in whatever manner they occur, structured automatically</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySlideTemplate;