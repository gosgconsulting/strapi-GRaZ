import { useState } from 'react';
import { Trophy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
const CompetitionExcellenceSection = () => {
  const [soloImageIndex, setSoloImageIndex] = useState(0);
  const [groupImageIndex, setGroupImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const soloImages = ["/lovable-uploads/a31c7571-fdc6-46c2-9f33-cfbf3bfb239f.png", "/lovable-uploads/f07ceee7-3742-4ddb-829b-9abae14d5a11.png", "/lovable-uploads/7e239828-13dd-4df8-8124-cd525e80369c.png"];
  const groupImages = ["/lovable-uploads/11b84a73-9ab2-490c-b020-9540e34bdd6a.png", "/lovable-uploads/08117ced-f7b0-4045-9bd4-3e5bd0309238.png", "/lovable-uploads/4ac15b36-88be-402a-b290-d345ee972ebb.png"];
  const openModal = (images: string[], imageIndex: number, title: string) => {
    setModalImages(images);
    setModalImageIndex(imageIndex);
    setModalTitle(title);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const nextModalImage = () => {
    setModalImageIndex(prev => (prev + 1) % modalImages.length);
  };
  const prevModalImage = () => {
    setModalImageIndex(prev => (prev - 1 + modalImages.length) % modalImages.length);
  };
  const goToSoloImage = (index: number) => {
    setSoloImageIndex(index);
  };
  const goToGroupImage = (index: number) => {
    setGroupImageIndex(index);
  };
  return <>
      <section id="competitions" className="py-20 bg-gradient-to-br from-primary/10 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">Our Competition Classes</h2>
            <p className="font-inter text-gray-600 max-w-3xl mx-auto mb-8 text-lg">Our elite competition team classes are designed to prepare dancers for high-level performance opportunities at regional and national competitions. We offer both solo and group competition classes, tailored to suit individual goals and team development.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <Tabs defaultValue="solo" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-50 p-1 rounded-xl h-14 max-w-md mx-auto">
                  <TabsTrigger 
                    value="solo"
                    className="text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700 data-[state=inactive]:hover:bg-white/50"
                  >
                    Solo Program
                  </TabsTrigger>
                  <TabsTrigger 
                    value="groups"
                    className="text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700 data-[state=inactive]:hover:bg-white/50"
                  >
                    Dance Groups
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="solo" className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div className="relative">
                      <div className="relative h-64 overflow-hidden rounded-xl">
                        {soloImages.map((image, index) => <img key={index} src={image} alt={`Solo Performance - Image ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 cursor-pointer ${index === soloImageIndex ? 'opacity-100' : 'opacity-0'}`} onClick={() => openModal(soloImages, index, 'Solo Performance')} />)}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                      </div>
                      
                      {/* Pagination dots */}
                      {soloImages.length > 1 && <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                          {soloImages.map((_, index) => <button key={index} onClick={() => goToSoloImage(index)} className={`w-2 h-2 rounded-full transition-colors ${index === soloImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'}`} />)}
                        </div>}
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-playfair text-primary text-2xl font-semibold">
                        Solo Program
                      </h4>
                      <p className="text-gray-700 text-base font-normal">
                        Perfect for dancers who want to shine in the spotlight!
                        Our solo program develops individual artistry, technical
                        precision, and stage presence that judges absolutely
                        love.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="groups" className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div className="relative">
                      <div className="relative h-64 overflow-hidden rounded-xl">
                        {groupImages.map((image, index) => <img key={index} src={image} alt={`Dance Group Performance - Image ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 cursor-pointer ${index === groupImageIndex ? 'opacity-100' : 'opacity-0'}`} onClick={() => openModal(groupImages, index, 'Dance Group Performance')} />)}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                      </div>
                      
                      {/* Pagination dots */}
                      {groupImages.length > 1 && <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                          {groupImages.map((_, index) => <button key={index} onClick={() => goToGroupImage(index)} className={`w-2 h-2 rounded-full transition-colors ${index === groupImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'}`} />)}
                        </div>}
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-playfair text-primary text-2xl font-semibold">
                        Dance Groups
                      </h4>
                      <p className="text-gray-700 mb-3 text-base">
                        Our competitive troupes are where magic happens! These
                        elite groups train together, compete together, and WIN
                        together. The bond they form is as strong as their
                        performances are spectacular.
                      </p>
                      <p className="text-secondary font-semibold italic">
                        (These are our competitive troupes - the cream of the
                        crop!)
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Full-screen image modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-screen max-h-screen w-screen h-screen p-0 bg-black/60 border-none flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button onClick={closeModal} className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Main image container - centered with proper aspect ratio */}
            <div className="relative flex items-center justify-center w-full h-full px-16">
              {/* Main image - 80% of screen size with proper centering */}
              <img src={modalImages[modalImageIndex]} alt={`${modalTitle} - Image ${modalImageIndex + 1}`} className="max-w-[80%] max-h-[80%] object-contain" />

              {/* Navigation arrows - positioned relative to the image container */}
              {modalImages.length > 1 && <>
                  <button onClick={prevModalImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors z-40">
                    <ArrowLeft className="w-6 h-6 text-white" />
                  </button>
                  <button onClick={nextModalImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors z-40">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </button>
                </>}
            </div>

            {/* Image counter - positioned at bottom center */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {modalImageIndex + 1} / {modalImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>;
};
export default CompetitionExcellenceSection;