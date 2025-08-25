
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LocationsSection = () => {
  return (
    <section
      id="locations"
      className="py-20 bg-gradient-to-br from-secondary/10 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Locations
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto text-lg">
            Visit us at our convenient locations across Singapore for
            world-class dance education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tampines Location */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img
                src="/lovable-uploads/c30a6afd-4e61-4b4a-aa55-2a97f577433b.png"
                alt="Tampines Location - Reception Area"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                Tampines
              </h3>
              <div className="space-y-4 text-gray-700 mb-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <p>510 Tampines Central 1</p>
                    <p>#02-250</p>
                    <p>Singapore 520510</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <a
                    href="tel:+6598372670"
                    className="hover:text-secondary transition-colors"
                  >
                    (65) 9837 2670
                  </a>
                </div>
              </div>
              <Button
                onClick={() =>
                  window.open(
                    "https://maps.google.com/maps?q=510+Tampines+Central+1+%2302-250+Singapore+520510",
                    "_blank"
                  )
                }
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Visit Us
              </Button>
            </CardContent>
          </Card>

          {/* Yishun Location */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img
                src="/lovable-uploads/b035362d-9d9c-496a-b0b6-dcab5c996d55.png"
                alt="Yishun Location - Dance Studio"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                Yishun
              </h3>
              <div className="space-y-4 text-gray-700 mb-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <p>Wisteria Mall, 598 Yishun Ring Road</p>
                    <p></p>
                    <p>#01-35/36</p>
                    <p>Singapore 768698</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <a
                    href="tel:+6593378605"
                    className="hover:text-secondary transition-colors"
                  >
                    (65) 9337 8605
                  </a>
                </div>
              </div>
              <Button
                onClick={() =>
                  window.open(
                    "https://maps.google.com/maps?q=Wisteria+Mall+598+Yishun+Ring+Road+%2301-35%2F36+Singapore+768698",
                    "_blank"
                  )
                }
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Visit Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
