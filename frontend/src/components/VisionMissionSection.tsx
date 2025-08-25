
import { Card, CardContent } from "@/components/ui/card";

const VisionMissionSection = () => {
  return (
    <section id="vision-mission" className="pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:scale-105 shadow-[0_0_20px_rgba(139,69,193,0.3)] hover:shadow-[0_0_30px_rgba(139,69,193,0.5)]">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  To nurture dancers with passion and compassion
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-base font-normal">
                  To create a conducive, wholesome, enriching and loving environment to inspire and groom passionate dancers to be the best that they can be and to challenge themselves to be better people
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:scale-105 shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:shadow-[0_0_30px_rgba(251,146,60,0.5)]">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-4">Tagline</h3>
                <p className="text-gray-700 leading-relaxed text-base font-normal">
                  Our insatiable passion for dance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
