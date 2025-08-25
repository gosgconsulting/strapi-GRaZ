
import { useState, useEffect } from "react";
import { Star, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { homepageService, formatTestimonialForDisplay } from "@/services/homepageService";
import type { Testimonial } from "@/services/homepageService";

const ReviewsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await homepageService.getFeaturedTestimonials();
        setTestimonials(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load testimonials');
        // Fallback to static data if Strapi fails
        setTestimonials([
          {
            id: 1,
            name: "Sarah Chen",
            role: "Parent of Emma, Age 8",
            content: "The Academy of Dance has transformed my shy daughter into a confident performer. The teachers are exceptional and truly care about each child's progress.",
            rating: 5,
            featured: true,
            order: 1
          },
          {
            id: 2,
            name: "Michael Tan", 
            role: "Parent of Lucas, Age 12",
            content: "Outstanding instruction and facilities. My son has developed incredible discipline and artistry. The recitals are professionally produced and showcase real talent.",
            rating: 5,
            featured: true,
            order: 2
          },
          {
            id: 3,
            name: "Priya Patel",
            role: "Parent of Aria, Age 6", 
            content: "We've tried several dance schools, but none compare to the quality and care here. The trial class sold us immediately - it's worth every dollar.",
            rating: 5,
            featured: true,
            order: 3
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-br from-secondary/10 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            What Parents Say
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto text-lg">
            Discover why families trust us with their children's dance
            education and artistic development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : error && testimonials.length === 0 ? (
            <div className="text-center p-8 text-gray-500">
              {error}
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center p-8 text-gray-500">
              No testimonials available. Please add some in Strapi.
            </div>
          ) : (
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => {
                  const displayTestimonial = formatTestimonialForDisplay(testimonial);
                  return (
                    <CarouselItem key={testimonial.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                        <CardContent className="space-y-4 p-0 flex flex-col h-full">
                          <div className="flex space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-secondary text-secondary"
                              />
                            ))}
                          </div>
                          <p className="text-gray-700 italic flex-1">
                            "{testimonial.content}"
                          </p>
                          <div className="flex items-center gap-3">
                            {displayTestimonial.avatar && (
                              <img 
                                src={displayTestimonial.avatar} 
                                alt={testimonial.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                            )}
                            <div>
                              <p className="font-semibold text-primary">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
