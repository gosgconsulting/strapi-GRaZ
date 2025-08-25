import { useState } from "react";
import { Calendar, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
const TrialsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    danceStyle: "",
    location: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `*Trial Class Booking Request*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Age:* ${formData.age}
*Preferred Location:* ${formData.location}
*Dance Style:* ${formData.danceStyle || "Not specified"}
*Message:* ${formData.message || "No additional message"}

Please contact me to schedule my trial class. Thank you!`;

    // Send to WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/6598372670?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Your trial class request is being sent via WhatsApp."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      danceStyle: "",
      location: "",
      message: ""
    });
  };
  return <section id="trials" className="py-20 bg-gradient-to-br from-secondary/10 to-white">
      <div className="container mx-auto px-6">
        {/* Statistics Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-violet-500 drop-shadow-lg mb-4">
                  10,000+
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  Students Trained
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-emerald-500 drop-shadow-lg mb-4">
                  40
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  Years Experience
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 drop-shadow-lg mb-4">
                  95%
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  Success Rate
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-rose-500 drop-shadow-lg mb-4">
                  2000+
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  Awards Won
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Begin Your Dance Journey
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto text-xl">Jump into dance with a $20 trial class! Experience top-tier instruction and find your perfect style.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">Join Our Trial Classes</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Ballet, Jazz, Lyrical & Contemporary, Hip Hop, Tap
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Tumbling classes are also available as our new course
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  You can join our trial classes for just $20!
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Professional instructors with international experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Small class sizes for personalized attention
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Ages 3 to adult - everyone welcome
                </li>
              </ul>
            </div>

            <div className="bg-white text-primary rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="font-playfair text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Ms June Lee</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <a href="tel:+6598372670" className="hover:text-secondary transition-colors">
                    (65) 9837 2670
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-primary" />
                  <div>
                    <p className="font-semibold">Tampines</p>
                    <p>510 Tampines Central 1, #02-250</p>
                    <p>Singapore 520510</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-6">Book Your Trial Class</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Full Name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required />
                <Input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} required />
                <Input placeholder="Age" value={formData.age} onChange={e => setFormData({
                ...formData,
                age: e.target.value
              })} required />
              </div>
              <Select value={formData.location} onValueChange={value => setFormData({
              ...formData,
              location: value
            })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Centre Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tampines">Tampines</SelectItem>
                  <SelectItem value="yishun">Yishun</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Preferred Dance Style (Ballet, Jazz, Lyrical, Contemporary, Hip Hop, Tap, Tumbling)" value={formData.danceStyle} onChange={e => setFormData({
              ...formData,
              danceStyle: e.target.value
            })} />
              <Textarea placeholder="Tell us about your dance experience or any questions..." value={formData.message} onChange={e => setFormData({
              ...formData,
              message: e.target.value
            })} rows={4} />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
                <Calendar className="w-5 h-5 mr-2" />
                Book Now!
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default TrialsSection;