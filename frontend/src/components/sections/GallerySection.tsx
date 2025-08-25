
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X, Loader2 } from "lucide-react";
import { homepageService, formatGalleryItemForDisplay } from "@/services/homepageService";
import type { GalleryItem } from "@/services/homepageService";

const GallerySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const data = await homepageService.getFeaturedGalleryItems();
        setGalleryItems(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching gallery items:', err);
        setError('Failed to load gallery');
        // Fallback to static data if Strapi fails
        setGalleryItems([
          {
            id: 1,
            title: "Melbourne Dance Exchange 2023",
            image: { 
              id: 1, 
              attributes: { 
                url: "/lovable-uploads/08117ced-f7b0-4045-9bd4-3e5bd0309238.png",
                name: "dance1.png",
                width: 800,
                height: 600,
                hash: "hash1",
                ext: ".png",
                mime: "image/png",
                size: 100,
                provider: "local",
                createdAt: "2024-01-01",
                updatedAt: "2024-01-01"
              }
            },
            category: "performance",
            featured: true,
            order: 1
          },
          {
            id: 2,
            title: "Ballet Class Excellence",
            image: { 
              id: 2, 
              attributes: { 
                url: "/lovable-uploads/f07ceee7-3742-4ddb-829b-9abae14d5a11.png",
                name: "dance2.png",
                width: 800,
                height: 600,
                hash: "hash2",
                ext: ".png",
                mime: "image/png",
                size: 100,
                provider: "local",
                createdAt: "2024-01-01",
                updatedAt: "2024-01-01"
              }
            },
            category: "class",
            featured: true,
            order: 2
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  const openModal = (imageIndex: number) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Our Students Shine
            </h2>
            <p className="font-inter text-gray-300 max-w-2xl mx-auto text-lg">
              Witness the artistry, passion, and technical excellence of our
              dancers across all disciplines.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="w-8 h-8 animate-spin text-white" />
            </div>
          ) : error && galleryItems.length === 0 ? (
            <div className="text-center p-8 text-gray-300">
              {error}
            </div>
          ) : galleryItems.length === 0 ? (
            <div className="text-center p-8 text-gray-300">
              No gallery items available. Please add some in Strapi.
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => {
                const displayItem = formatGalleryItemForDisplay(item);
                return (
                  <div
                    key={item.id}
                    className="relative group overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <img
                      src={displayItem.image || '/placeholder.svg'}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white font-playfair text-lg font-semibold">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

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
              {galleryItems[modalImageIndex] && (
                <img
                  src={formatGalleryItemForDisplay(galleryItems[modalImageIndex]).image || '/placeholder.svg'}
                  alt={galleryItems[modalImageIndex].title}
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              )}

              {/* Navigation arrows - positioned relative to the image container */}
              {galleryItems.length > 1 && (
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
              {modalImageIndex + 1} / {galleryItems.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GallerySection;
