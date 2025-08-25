import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, FileText } from "lucide-react";

const ClassSchedulesSection = () => {
  const locations = [
    {
      location: "Tampines",
      address: "Tampines Mall #04-32",
    },
    {
      location: "Yishun",
      address: "Yishun Mall #03-15",
    }
  ];

  return (
    <section id="schedules" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Class Schedules
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto text-lg">
            Find the perfect class time for your child at either of our convenient locations.
            All classes are designed to nurture creativity and build confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <CardHeader className="bg-white text-center border-b">
                <CardTitle className="flex items-center justify-center gap-3 font-playfair text-2xl" style={{ color: '#A8733E' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#A8733E' }} />
                  {location.location}
                </CardTitle>
                <p className="font-inter" style={{ color: '#A8733E' }}>
                  {location.address}
                </p>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600 mb-6 font-inter">
                  View our detailed class schedule for {location.location}
                </p>
                <Button 
                  variant="default" 
                  size="lg"
                  className="w-full"
                  onClick={() => window.open('#', '_blank')}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View {location.location} Schedule PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassSchedulesSection;