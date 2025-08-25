
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface EventCardProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

const EventCard = ({ title, subtitle, description, images }: EventCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openModal = (imageIndex: number) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative">
          <div className="relative h-64 overflow-hidden">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 cursor-pointer ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={() => openModal(index)}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Pagination dots */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="font-playfair text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">{subtitle}</p>
          <p className="text-gray-500 text-sm mb-4 flex-1">{description}</p>
          <Button onClick={() => window.open('https://wa.me/6598372670', '_blank')} className="bg-primary hover:bg-primary/90 text-white w-full">
            Learn More
          </Button>
        </CardContent>
      </Card>

      {/* Full-screen image modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-screen max-h-screen w-screen h-screen p-0 bg-black/60 border-none flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Main image container - centered with proper aspect ratio */}
            <div className="relative flex items-center justify-center w-full h-full px-16">
              {/* Main image - 80% of screen size with proper centering */}
              <img
                src={images[modalImageIndex]}
                alt={`${title} - Image ${modalImageIndex + 1}`}
                className="max-w-[80%] max-h-[80%] object-contain"
              />

              {/* Navigation arrows - positioned relative to the image container */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevModalImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors z-40"
                  >
                    <ArrowLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextModalImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors z-40"
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}
            </div>

            {/* Image counter - positioned at bottom center */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {modalImageIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventCard;
