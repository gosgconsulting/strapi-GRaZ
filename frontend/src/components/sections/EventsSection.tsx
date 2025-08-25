
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EventCard from "@/components/EventCard";

const EventsSection = () => {
  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-secondary/10 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Events
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto text-lg">
            Join us for exciting performances, competitions, and workshops
            throughout the year.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <Tabs defaultValue="past" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-50 p-1 rounded-xl h-14 max-w-md mx-auto">
                <TabsTrigger 
                  value="past"
                  className="text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700 data-[state=inactive]:hover:bg-white/50"
                >
                  Past Events
                </TabsTrigger>
                <TabsTrigger 
                  value="upcoming"
                  className="text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700 data-[state=inactive]:hover:bg-white/50"
                >
                  Upcoming Events
                </TabsTrigger>
              </TabsList>

              <TabsContent value="past" className="mt-6">
                <Carousel
                  className="w-full"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <EventCard
                        title="Melbourne Dance Exchange"
                        subtitle="International Competition"
                        description="Our students participated in the prestigious Melbourne Dance Exchange, showcasing their talent on an international stage."
                        images={[
                          "/lovable-uploads/08117ced-f7b0-4045-9bd4-3e5bd0309238.png",
                          "/lovable-uploads/11b84a73-9ab2-490c-b020-9540e34bdd6a.png",
                          "/lovable-uploads/7e239828-13dd-4df8-8124-cd525e80369c.png",
                        ]}
                      />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <EventCard
                        title="Annual Recital"
                        subtitle="December 2024"
                        description="Our biggest event of the year where all our students showcase their progress and talent in a professional theater setting."
                        images={[
                          "/lovable-uploads/11b84a73-9ab2-490c-b020-9540e34bdd6a.png",
                          "/lovable-uploads/f07ceee7-3742-4ddb-829b-9abae14d5a11.png",
                          "/lovable-uploads/61794c77-dac5-451f-b02e-054573c38b7c.png",
                        ]}
                      />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <EventCard
                        title="Summer Dance Intensive"
                        subtitle="June - July 2024"
                        description="Intensive summer program for serious dancers looking to elevate their skills with masterclasses and guest instructors."
                        images={[
                          "/lovable-uploads/7e239828-13dd-4df8-8124-cd525e80369c.png",
                          "/lovable-uploads/4ac15b36-88be-402a-b290-d345ee972ebb.png",
                          "/lovable-uploads/da5c9831-e15c-4c80-bf8c-169e3bb472fc.png",
                        ]}
                      />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <EventCard
                        title="International Dance Festival"
                        subtitle="March 2024"
                        description="Participation in international dance festivals, giving our students exposure to global dance communities."
                        images={[
                          "/lovable-uploads/4ac15b36-88be-402a-b290-d345ee972ebb.png",
                          "/lovable-uploads/08117ced-f7b0-4045-9bd4-3e5bd0309238.png",
                          "/lovable-uploads/a31c7571-fdc6-46c2-9f33-cfbf3bfb239f.png",
                        ]}
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </TabsContent>

              <TabsContent value="upcoming" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                        Singapore Youth Festival
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">April 2025</p>
                      <p className="text-gray-500 text-sm mb-4">
                        Our competitive teams will be participating in SYF Arts
                        Presentation, showcasing contemporary and jazz pieces.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                        Mid-Year Showcase
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">June 2025</p>
                      <p className="text-gray-500 text-sm mb-4">
                        A special mid-year performance featuring our recreational
                        and competitive students in various dance styles.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                        International Guest Teacher Workshop
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">August 2025</p>
                      <p className="text-gray-500 text-sm mb-4">
                        Special masterclasses with renowned international dance
                        instructors covering ballet, contemporary, and jazz
                        techniques.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                        Annual Recital 2025
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">December 2025</p>
                      <p className="text-gray-500 text-sm mb-4">
                        Our grand finale of the year featuring all students in a
                        spectacular theatrical production.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
