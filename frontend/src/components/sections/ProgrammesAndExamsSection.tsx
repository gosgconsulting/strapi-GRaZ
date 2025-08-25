import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const ProgrammesAndExamsSection = () => {
  const [radImageIndex, setRadImageIndex] = useState(0);
  const [cstdImageIndex, setCstdImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState('');

  const radImages = [
    "/lovable-uploads/5c8d3ad4-fac2-4255-8c25-231c28b272da.png",
    "/lovable-uploads/f07ceee7-3742-4ddb-829b-9abae14d5a11.png",
    "/lovable-uploads/11b84a73-9ab2-490c-b020-9540e34bdd6a.png"
  ];

  const cstdImages = [
    "/lovable-uploads/7d91482b-17c3-45fc-9917-f502af760568.png",
    "/lovable-uploads/7e239828-13dd-4df8-8124-cd525e80369c.png",
    "/lovable-uploads/4ac15b36-88be-402a-b290-d345ee972ebb.png"
  ];

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
    setModalImageIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  const goToRadImage = (index: number) => {
    setRadImageIndex(index);
  };

  const goToCstdImage = (index: number) => {
    setCstdImageIndex(index);
  };

  const programmes = [
    {
      id: "ballet",
      title: "Ballet",
      image: "/lovable-uploads/da5c9831-e15c-4c80-bf8c-169e3bb472fc.png",
      description: "At TAD, ballet is taught with a strong foundation in classical technique, combined with a deep respect for each dancer's unique journey. Our approach emphasizes both discipline and encouragement, creating an environment where students feel supported as they grow in strength, grace, and confidence.\n\nWe follow a structured syllabus that builds progressively from beginner to advanced levels, ensuring that students develop proper alignment, musicality, coordination, and artistry at every stage. Classes are tailored to age and ability, with clear goals and consistent feedback to help each dancer reach their personal best.\n\nOur experienced instructors bring passion and professionalism to every class, fostering a love for ballet while also instilling valuable life skills like perseverance, focus, and self-expression. Whether a student dreams of a professional career or simply wants to experience the beauty of ballet, we aim to nurture both the dancer and the individual."
    },
    {
      id: "baby-gems",
      title: "Baby Gems",
      image: "/lovable-uploads/61794c77-dac5-451f-b02e-054573c38b7c.png",
      description: "A program like no other, our Baby Gems program is created for our youngest dancers, aged 3 to 4 years old, to develop musicality, coordination and basic dance fundamentals using nursery rhymes and timeless Disney classics. Promoting the use of their imagination, it takes the child to a land of make believe, something critical to their dance training. TAD prides herself in her very own Baby Gems program, which was carefully written and curated by our Principal Ms June Lee. It is a one-year dance program comprising a series of exercises that are both enjoyable and technically beneficial to children aged 3-4 years old."
    },
    {
      id: "adult-fitness",
      title: "Adult fitness/Ballet Classes",
      image: "/lovable-uploads/f883c8a8-3f19-4bce-871e-2f48e153c2f9.png",
      description: "Our Adult Keep Fit Ballet classes at The Academy of Dance are the perfect blend of elegance, fitness, and fun—no previous dance experience required!\nThese classes are designed to improve posture, flexibility, core strength, and overall body tone, all while enjoying the grace and discipline of classical ballet. Set to beautiful music, each session offers a gentle yet effective workout that leaves you feeling energized, uplifted, and more connected to your body.\nWhether you're returning to dance or trying ballet for the first time, our welcoming and supportive environment ensures everyone feels comfortable. It's a wonderful way to stay active, reduce stress, and enjoy a bit of \"me time\" in the midst of a busy week.\nCome move, stretch, and smile with us—ballet has no age limit!"
    },
    {
      id: "jazz",
      title: "Jazz",
      image: "/lovable-uploads/3f806d09-71f1-4c34-8591-8c2dd21fe346.png",
      description: "Dynamic and energetic, our jazz classes focus on sharp movements, isolations, and performance quality. Students develop rhythm, coordination, and stage presence while learning classic jazz techniques and contemporary commercial styles."
    },
    {
      id: "lyrical",
      title: "Lyrical",
      image: "/lovable-uploads/a31c7571-fdc6-46c2-9f33-cfbf3bfb239f.png",
      description: "A beautiful fusion of ballet technique with emotional storytelling. Lyrical dance emphasizes the connection between music and movement, allowing dancers to express deep emotions through flowing, graceful choreography that tells a story."
    },
    {
      id: "contemporary",
      title: "Contemporary",
      image: "/lovable-uploads/cc1b8cc0-3767-4760-9f8a-3015d9e2a2f6.png",
      description: "Modern movement that breaks traditional dance boundaries. Contemporary dance incorporates elements from various dance styles, focusing on versatility, creativity, and personal expression through innovative choreography and technique."
    },
    {
      id: "hip-hop",
      title: "Hip Hop",
      image: "/lovable-uploads/3e19f9a6-1e4b-40f4-9c80-638142fb2bf5.png",
      description: "Street-style dance that emphasizes personal expression and creativity. Our hip hop classes teach foundational moves, freestyle techniques, and urban choreography while building confidence, rhythm, and individual style."
    },
    {
      id: "tap",
      title: "Tap",
      image: "/lovable-uploads/026cddda-e890-486d-be1e-8052ff34515e.png",
      description: "Create music with your feet! Our tap programme develops rhythm, coordination, and musicality through traditional tap techniques. Students learn basic steps, combinations, and improvisation while building strong rhythmic foundations."
    },
    {
      id: "tumbling",
      title: "Tumbling",
      image: "/lovable-uploads/96dbee1c-cdd5-4735-a8ab-21e83d6f99c2.png",
      description: "Our newest programme! Build strength, flexibility, and acrobatic skills in a safe, progressive environment. Students learn rolls, cartwheels, handstands, and more advanced tumbling skills that enhance their overall dance performance."
    },
    {
      id: "dsa",
      title: "Direct School Admission (DSA)",
      image: "/lovable-uploads/7a4ccb94-8ec9-4b6d-b752-7c91c6c547c4.png",
      description: "We take pride in preparing students for the Direct School Admission (DSA) scheme, offering a unique pathway for young talents to gain direct entry into esteemed Secondary Schools and Junior Colleges.\nThrough specialized training, mentorship, guiding them for interviews and their portfolios, we equip our dancers with the skills and confidence needed to excel in auditions and interviews.\n95% of our students have successfully gained admission to their desired secondary schools. This accomplishment serves as evidence of our dedication to excellence and our proficiency in nurturing talent."
    }
  ];

  return (
    <>
      <section id="programmes" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Programmes & Examinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover our comprehensive dance programmes and internationally recognized examination courses designed to nurture artistry and technical excellence.
            </p>
          </div>

          <Tabs defaultValue="programmes" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-50 p-1 rounded-xl h-14 max-w-md mx-auto">
              <TabsTrigger 
                value="programmes" 
                className="text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700 data-[state=inactive]:hover:bg-white/50"
              >
                Programmes
              </TabsTrigger>
              <TabsTrigger 
                value="examinations" 
                className="text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700 data-[state=inactive]:hover:bg-white/50"
              >
                Examinations
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="programmes" className="space-y-8">
              {/* Desktop grid layout */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programmes.map((programme) => (
                  <Card key={programme.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={programme.image} 
                        alt={programme.title} 
                        className="w-full h-64 object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                        {programme.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {programme.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Mobile carousel layout */}
              <div className="md:hidden">
                <Carousel className="w-full max-w-sm mx-auto">
                  <CarouselContent>
                    {programmes.map((programme) => (
                      <CarouselItem key={programme.id}>
                        <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                          <div className="relative">
                            <img 
                              src={programme.image} 
                              alt={programme.title} 
                              className="w-full h-48 object-cover" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                              {programme.title}
                            </h3>
                            <p className="text-gray-700 text-xs leading-relaxed line-clamp-4">
                              {programme.description}
                            </p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </TabsContent>
            
            <TabsContent value="examinations" className="space-y-8">
              {/* Desktop grid layout */}
              <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* RAD Ballet */}
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <div className="relative h-64 overflow-hidden">
                      {radImages.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`RAD Ballet Examination - Image ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 cursor-pointer ${
                            index === radImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                          onClick={() => openModal(radImages, index, 'RAD Ballet Examination')}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                    </div>
                    
                    {/* Pagination dots */}
                    {radImages.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {radImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToRadImage(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === radImageIndex 
                                ? 'bg-white' 
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-8">
                    <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                      Royal Academy of Dance (RAD) Ballet Examinations
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6 text-base">
                      We're proud to offer the world-renowned RAD syllabus - one of
                      the world's most influential dance education organizations
                      from the UK. Our passionate teachers guide dancers through
                      each grade with a comprehensive, progressive approach that
                      builds strong technique, artistic expression, and a deep love
                      for classical ballet.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ World-leading classical ballet education standards</p>
                      <p>✓ Comprehensive progression for all ages and levels</p>
                      <p>✓ Focus on technical foundation & artistic expression</p>
                      <p>✓ Internationally recognized UK-based certification</p>
                    </div>
                  </CardContent>
                </Card>

                {/* CSTD Tap and Jazz */}
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <div className="relative h-64 overflow-hidden">
                      {cstdImages.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`CSTD Jazz and Tap Examination - Image ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 cursor-pointer ${
                            index === cstdImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                          onClick={() => openModal(cstdImages, index, 'CSTD Jazz and Tap Examination')}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                    </div>
                    
                    {/* Pagination dots */}
                    {cstdImages.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {cstdImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToCstdImage(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === cstdImageIndex 
                                ? 'bg-white' 
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-8">
                    <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                      Commonwealth Society of Teachers of Dancing (CSTD)
                      Examinations
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We proudly offer CSTD syllabus from Australia - a world leader
                      in holistic dance education! Our Jazz and Tap programs
                      combine rhythm, expression, and technique with pop and street
                      music influences, empowering dancers to reach their fullest
                      potential as technically strong, versatile performers.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ World-leading Australian dance education system</p>
                      <p>✓ Jazz & Tap syllabus with modern music influences</p>
                      <p>✓ Holistic development focusing on versatility</p>
                      <p>✓ Strong technique, performance skills & artistry</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Mobile carousel layout */}
              <div className="md:hidden">
                <Carousel className="w-full max-w-sm mx-auto">
                  <CarouselContent>
                    {/* RAD Ballet Card */}
                    <CarouselItem>
                      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="relative">
                          <div className="relative h-48 overflow-hidden">
                            {radImages.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`RAD Ballet Examination - Image ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 cursor-pointer ${
                                  index === radImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                                onClick={() => openModal(radImages, index, 'RAD Ballet Examination')}
                              />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                          </div>
                          
                          {/* Pagination dots */}
                          {radImages.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                              {radImages.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => goToRadImage(index)}
                                  className={`w-2 h-2 rounded-full transition-colors ${
                                    index === radImageIndex 
                                      ? 'bg-white' 
                                      : 'bg-white/50 hover:bg-white/70'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-playfair text-lg font-bold text-primary mb-3">
                            RAD Ballet Examinations
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-4 text-xs line-clamp-3">
                            We're proud to offer the world-renowned RAD syllabus - one of
                            the world's most influential dance education organizations
                            from the UK.
                          </p>
                          <div className="space-y-1 text-xs text-gray-600">
                            <p>✓ World-leading classical ballet standards</p>
                            <p>✓ UK-based certification</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    {/* CSTD Card */}
                    <CarouselItem>
                      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="relative">
                          <div className="relative h-48 overflow-hidden">
                            {cstdImages.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`CSTD Jazz and Tap Examination - Image ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 cursor-pointer ${
                                  index === cstdImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                                onClick={() => openModal(cstdImages, index, 'CSTD Jazz and Tap Examination')}
                              />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                          </div>
                          
                          {/* Pagination dots */}
                          {cstdImages.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                              {cstdImages.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => goToCstdImage(index)}
                                  className={`w-2 h-2 rounded-full transition-colors ${
                                    index === cstdImageIndex 
                                      ? 'bg-white' 
                                      : 'bg-white/50 hover:bg-white/70'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-playfair text-lg font-bold text-primary mb-3">
                            CSTD Examinations
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-4 text-xs line-clamp-3">
                            We proudly offer CSTD syllabus from Australia - a world leader
                            in holistic dance education with Jazz and Tap programs.
                          </p>
                          <div className="space-y-1 text-xs text-gray-600">
                            <p>✓ Australian dance education system</p>
                            <p>✓ Jazz & Tap with modern influences</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </TabsContent>
          </Tabs>
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
              <img
                src={modalImages[modalImageIndex]}
                alt={`${modalTitle} - Image ${modalImageIndex + 1}`}
                className="max-w-[80%] max-h-[80%] object-contain"
              />

              {/* Navigation arrows - positioned relative to the image container */}
              {modalImages.length > 1 && (
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
              {modalImageIndex + 1} / {modalImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProgrammesAndExamsSection;