import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}
const HeroSection = ({
  scrollToSection
}: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = ['/lovable-uploads/f8f4ebc7-577a-4261-840b-20a866629516.png', '/lovable-uploads/fafdb3ad-f058-4c32-9065-7d540d362cd7.png', '/lovable-uploads/0b3fd9e6-e4f5-4482-9171-5515f1985ac2.png', '/lovable-uploads/78398105-9a05-4e07-883b-b8b742deb89f.png', '/lovable-uploads/21352692-5e60-425a-9355-ba3fc13af268.png'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
            <img src={image} alt={`Dance performance ${index + 1}`} className="w-full h-full object-cover" />
          </div>)}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 animate-fade-up flex flex-col items-center">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 text-center">
          Where Dreams
          <span className="text-secondary block text-center">Take Flight</span>
        </h1>
        <p className="font-inter text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed md:text-xl text-center">Singapore’s premium ballet and dance academy, nurturing artistic excellence and inspiring confidence through the transformative power of dance.</p>
        <div className="flex justify-center items-center">
          <Button onClick={() => scrollToSection('trials')} size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
            Start Your Journey
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer flex justify-center items-center" onClick={() => scrollToSection('trials')}>
        <ArrowDown className="w-6 h-6 text-white" />
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 justify-center items-center">
        {heroImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`} />)}
      </div>
    </section>;
};
export default HeroSection;