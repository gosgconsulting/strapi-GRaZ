
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TeachersSection = () => {

  const teachers = [
    {
      name: "Ms June Lee",
      specialty: "Founder",
      credentials: "41 years of experience",
      experience:
        "Ms. June Lee is a veteran dance educator and choreographer whose 41-year career has inspired students, earned international awards, and featured in prestigious global events.",
      image:
        "/lovable-uploads/07de0001-b755-433d-8b27-b1d01335b772.png",
      isFounder: true,
    },
    {
      name: "Ms Tan Jia Jia",
      specialty: "Yishun Head",
      credentials: "International exposure & competitive track record",
      experience:
        "Ms. Tan Jia Jia is an experienced, versatile dance educator with international exposure and a strong competitive track record.",
      image:
        "/lovable-uploads/996fb449-b3aa-4ec3-acca-2dad9c8a5ac4.png",
    },
    {
      name: "Ms Jasmine Koh",
      specialty: "Classical Ballet Expert",
      credentials: "25 years experience, RAD & CSTD certified",
      experience:
        "Ms. Jasmine Koh is a passionate dancer and educator with 25 years of experience, trained in ballet, jazz, and tap, and certified under RAD and CSTD.",
      image:
        "/lovable-uploads/444d487e-9e10-4a56-9e2a-409250051960.png",
    },
    {
      name: "Ms Annabelle Ong",
      specialty: "Inspirational Educator",
      credentials: "Started at 17, full-time design career",
      experience:
        "Ms. Annabelle Ong is a dedicated dancer and teacher who, despite starting at 17, has performed widely and now inspires young dancers while balancing a full-time design career.",
      image:
        "/lovable-uploads/8850b256-158e-4e7c-852c-d736bb723229.png",
    },
    {
      name: "Ms Jacqueline Macpherson",
      specialty: "Award-Winning Performer",
      credentials: "International performance experience",
      experience:
        "Ms. Jacqueline Macpherson is an award-winning dancer with international performance experience who now aims to share her passion for dance through teaching.",
      image:
        "/lovable-uploads/58297713-194b-4e3b-bea0-554b437b8af0.png",
    },
  ];

  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Teachers Section */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Instructors
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto text-lg">
            Learn from internationally trained professionals who bring decades
            of experience and genuine passion for dance education.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {teachers.map((teacher, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className={`w-full h-72 object-cover ${
                          teacher.isFounder
                            ? "object-[center_30%]"
                            : "object-[center_20%]"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                        {teacher.name}
                      </h3>
                      <p className="text-secondary font-semibold mb-2">
                        {teacher.specialty}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        {teacher.credentials}
                      </p>
                      <p className="text-gray-500 text-sm flex-1">
                        {teacher.experience}
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

      </div>
    </section>
  );
};

export default TeachersSection;
