import { Users, Heart, Award, Target } from "lucide-react";
const AboutUsSection = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold text-primary mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              At The Academy of Dance (TAD), we merge passion with precision. Our tagline, "Our insatiable passion for dance," 
              truly encapsulates the spirit of TAD. Dance is not just an art form for us; it is our passion. At TAD, we believe that dance transcends mere movements and steps. It is a profound expression of 
              the soul and a vital journey of self-discovery and improvement. Established in 2019, TAD has since 
              emerged as one of the most renowned dance schools in Singapore.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What distinguishes us is our devoted team of teachers who not only have extensive experience in their respective genres but 
              also possess a profound passion for sharing the love of dance and providing a comprehensive education for dancers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At TAD, our teachers foster an encouraging environment for everyone, from beginners taking their first steps to seasoned 
              dancers gracing the stage. We prioritize our students' progress to ensure every dancer achieves their fullest potential. Whether your aim is to pursue a 
              professional dance career, maintain fitness, or simply enjoy moving to the rhythm, we are here to support you in reaching 
              your goals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-playfair text-xl font-bold text-primary mb-2">Expert Faculty</h4>
              <p className="text-gray-600 text-sm">Internationally trained instructors with decades of experience</p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-6 text-center">
              <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h4 className="font-playfair text-xl font-bold text-primary mb-2">Passion Driven</h4>
              <p className="text-gray-600 text-sm">Every class is taught with love, dedication, and enthusiasm</p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-playfair text-xl font-bold text-primary mb-2">Award Winning</h4>
              <p className="text-gray-600 text-sm">Over 1000 awards and recognitions in competitions</p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-6 text-center">
              <Target className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h4 className="font-playfair text-xl font-bold text-primary mb-2">Goal Oriented</h4>
              <p className="text-gray-600 text-sm">Structured curriculum designed for measurable progress</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        
      </div>
    </section>;
};
export default AboutUsSection;