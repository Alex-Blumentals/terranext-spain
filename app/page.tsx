"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Download, Menu, X, Eye } from 'lucide-react';
import Image from 'next/image';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
  const [viewMode, setViewMode] = useState<'presentation' | 'scroll'>('presentation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const slideContainerRef = useRef<HTMLDivElement>(null);

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

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    setIsMenuOpen(false);

    try {
      const pdf = new jsPDF('l', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < slides.length; i++) {
        // Temporarily switch to the slide
        setCurrentSlide(i);
        await new Promise(resolve => setTimeout(resolve, 300)); // Wait for render

        const slideElement = slideContainerRef.current;
        if (slideElement) {
          const canvas = await html2canvas(slideElement, {
            scale: 2,
            useCORS: true,
            logging: false,
          });

          const imgData = canvas.toDataURL('image/png');
          const imgWidth = pageWidth;
          const imgHeight = (canvas.height * pageWidth) / canvas.width;

          if (i > 0) pdf.addPage();

          // Center the image if it's smaller than page height
          const yOffset = imgHeight < pageHeight ? (pageHeight - imgHeight) / 2 : 0;
          pdf.addImage(imgData, 'PNG', 0, yOffset, imgWidth, imgHeight);
        }
      }

      pdf.save('TerraNext-Pizarroso-I-Propuesta.pdf');
      setCurrentSlide(0); // Return to first slide
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generando PDF. Por favor, intente de nuevo.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      onTouchStart={viewMode === 'presentation' ? handleTouchStart : undefined}
      onTouchMove={viewMode === 'presentation' ? handleTouchMove : undefined}
      onTouchEnd={viewMode === 'presentation' ? handleTouchEnd : undefined}
    >
      {/* Progress Bar */}
      {viewMode === 'presentation' && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
          <div
            className="h-full bg-terra-bright-green transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      )}

      {/* Top Menu Bar */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-terra-navy text-white p-3 rounded-full hover:bg-terra-blue transition-all shadow-lg"
          aria-label="Menú"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-20 right-4 z-50 bg-white rounded-xl shadow-2xl border-2 border-terra-navy p-4 space-y-3 min-w-[200px]">
          <button
            onClick={generatePDF}
            disabled={isGeneratingPDF}
            className="w-full flex items-center gap-3 px-4 py-3 bg-terra-bright-green text-white rounded-lg hover:bg-green-600 transition-all disabled:opacity-50"
          >
            <Download size={20} />
            <span>{isGeneratingPDF ? 'Generando...' : 'Descargar PDF'}</span>
          </button>

          <button
            onClick={() => {
              setViewMode(viewMode === 'presentation' ? 'scroll' : 'presentation');
              setIsMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 bg-terra-blue text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            <Eye size={20} />
            <span>Modo {viewMode === 'presentation' ? 'Scroll' : 'Presentación'}</span>
          </button>

          <div className="text-xs text-terra-neutral px-2 pt-2 border-t">
            {viewMode === 'presentation' ? 'Vista presentación' : 'Vista scroll móvil'}
          </div>
        </div>
      )}

      {/* Slide Content - Presentation Mode */}
      {viewMode === 'presentation' ? (
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 pb-32 md:pb-36" ref={slideContainerRef}>
          <div className="w-full max-w-7xl">
            <CurrentSlideComponent />
          </div>
        </div>
      ) : (
        /* Scroll Mode - All Slides */
        <div className="pt-16 pb-8 px-4 sm:px-8 space-y-12 max-w-7xl mx-auto">
          {slides.map((SlideComponent, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-100">
              <div className="text-sm text-terra-neutral mb-4">Slide {index + 1} / {slides.length}</div>
              <SlideComponent />
            </div>
          ))}
        </div>
      )}

      {/* Navigation - Only in Presentation Mode */}
      {viewMode === 'presentation' && (
        <>
          <div className="fixed bottom-8 left-0 right-0 flex items-center justify-center gap-4 sm:gap-8 z-40">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="bg-terra-navy text-white p-3 sm:p-4 rounded-full hover:bg-terra-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>

            <span className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg text-terra-navy font-semibold text-sm sm:text-base">
              {currentSlide + 1} / {slides.length}
            </span>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="bg-terra-navy text-white p-3 sm:p-4 rounded-full hover:bg-terra-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg"
              aria-label="Siguiente slide"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Keyboard Hint */}
          <div className="fixed bottom-24 right-8 text-sm text-terra-neutral opacity-50 hidden lg:block">
            Use ← → o Espacio para navegar
          </div>
        </>
      )}
    </div>
  );
}
