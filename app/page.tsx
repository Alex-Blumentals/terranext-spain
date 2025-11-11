"use client";

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Slide Components
import Slide1Cover from '@/components/slides/Slide1Cover';
import Slide2Journey from '@/components/slides/Slide2Journey';
import Slide3Roadmap from '@/components/slides/Slide3Roadmap';
import Slide4Focus from '@/components/slides/Slide4Focus';
import Slide5Challenge from '@/components/slides/Slide5Challenge';
import Slide6Step1 from '@/components/slides/Slide6Step1';
import Slide7Milestone from '@/components/slides/Slide7Milestone';
import Slide8Step2 from '@/components/slides/Slide8Step2';
import Slide9Models from '@/components/slides/Slide9Models';
import Slide10Deliverables from '@/components/slides/Slide10Deliverables';
import Slide11Investment from '@/components/slides/Slide11Investment';
import Slide12Payment from '@/components/slides/Slide12Payment';
import Slide13Timeline from '@/components/slides/Slide13Timeline';
import Slide14GoNoGo from '@/components/slides/Slide14GoNoGo';
import Slide15Advantage from '@/components/slides/Slide15Advantage';
import Slide17NextSteps from '@/components/slides/Slide17NextSteps';

const slides = [
  Slide1Cover,
  Slide2Journey,
  Slide3Roadmap,
  Slide4Focus,
  Slide5Challenge,
  Slide6Step1,
  Slide7Milestone,
  Slide8Step2,
  Slide9Models,
  Slide10Deliverables,
  Slide11Investment,
  Slide12Payment,
  Slide13Timeline,
  Slide14GoNoGo,
  Slide15Advantage,
  Slide17NextSteps,
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-terra-bright-green transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-12 lg:p-16 pb-32 md:pb-36">
        <div className="w-full max-w-7xl">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-0 right-0 flex items-center justify-center gap-8 z-40">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-terra-navy text-white p-4 rounded-full hover:bg-terra-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <span className="bg-white px-6 py-3 rounded-full shadow-lg text-terra-navy font-semibold">
          {currentSlide + 1} / {slides.length}
        </span>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-terra-navy text-white p-4 rounded-full hover:bg-terra-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg"
          aria-label="Siguiente slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="fixed bottom-24 right-8 text-sm text-terra-neutral opacity-50 hidden md:block">
        Use ← → o Espacio para navegar
      </div>
    </div>
  );
}
