import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Trophy, Award, Medal, Star, Calendar, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const AchievementsSection = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [showAllCompetitions, setShowAllCompetitions] = useState(false);
  
  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const competitions = [
    {
      icon: Trophy,
      title: "Get The Beat (GTB) 2025",
      results: [
        { name: "Grace Khaw", placement: "4th", category: "My First Solo Classical (Ballet + Demi) Pre Junior (9-10)" },
        { name: "Vanessa Yew", placement: "4th", category: "Intermediate Jazz Solo (14&U)" },
        { name: "Sasha Lai", placement: "3rd", category: "My First Solo Slow Modern (Lyrical + Contemporary) Teen (13-14)" },
        { name: "Abigail Lim", placement: "5th", category: "My First Solo Slow Modern (Lyrical + Contemporary) Teen (13-14)" },
        { name: "Clarabelle Lim", placement: "5th", category: "My First Solo Slow Modern (Lyrical + Contemporary) Senior (15-19)" },
        { name: "Julia Ong", placement: "Honorable Mention", category: "My First Solo Slow Modern (Lyrical + Contemporary) Senior (15-19)" },
        { name: "Wai Ting", placement: "5th", category: "My First Solo Commercial (Jazz + Hip-Hop) Petite (7-8)" },
        { name: "Edna Chew", placement: "4th", category: "My First Solo Commercial (Jazz + Hip-Hop) Mini (0-6)" },
        { name: "Xin En", placement: "1st", category: "My First Solo Commercial (Jazz + Hip-Hop) Teen (13-14)" },
        { name: "Leocadie Pochat", placement: "5th", category: "Beginner Slow Modern (Lyrical + Contemporary) Solo Pre Junior (9-10)" },
        { name: "Tessa Lam", placement: "5th", category: "Beginner Slow Modern (Lyrical + Contemporary) Solo Teen (13-14)" },
        { name: "Gretchen Lee", placement: "5th", category: "Beginner Slow Modern (Lyrical + Contemporary) Solo Junior (11-12)" },
        { name: "Ashleigh Zhan", placement: "2nd", category: "Intermediate Open Solo (14&U)" },
        { name: "Elysia Low", placement: "1st", category: "Intermediate Any Style of Tap Solo (14&U)" },
        { name: "Leocadie Pochat", placement: "1st", category: "Beginner Theatrical (Musical Theatre, Tap, Song&Dance, Broadway Jazz, Acro) Solo Pre Junior (9-10)" },
        { name: "Sasha Lai", placement: "2nd", category: "Beginner Theatrical (Musical Theatre, Tap, Song&Dance, Broadway Jazz, Acro) Solo Teen (13-14)" },
        { name: "Juliet Yap", placement: "1st", category: "Intermediate Demi Character Solo (10&U)" },
        { name: "Kayla Soo", placement: "1st", category: "Intermediate Demi Character Solo (15&U)" },
        { name: "Ally Patt", placement: "2nd", category: "Intermediate Demi Character Solo (15&U)" },
        { name: "Lyra Goh", placement: "1st", category: "Intermediate Demi Character Solo (13&U)" },
        { name: "Caley Toh", placement: "1st", category: "Intermediate Demi Character Solo (16-20)" },
        { name: "Julia Ong", placement: "3rd", category: "Beginner Classical (Ballet + Demi) Solo Senior (15-19)" },
        { name: "Sophia Choudhury", placement: "5th", category: "Beginner Classical (Ballet + Demi) Solo Teen (13-14)" },
        { name: "Abigail Lim", placement: "2nd", category: "Beginner Classical (Ballet + Demi) Solo Teen (13-14)" },
        { name: "Shanice Tan", placement: "3rd", category: "Beginner Classical (Ballet + Demi) Solo Teen (13-14)" },
        { name: "Gretchen Lee", placement: "5th", category: "Beginner Classical (Ballet + Demi) Solo Junior (11-12)" },
        { name: "Eliana Goh", placement: "1st", category: "Intermediate Ballet Solo (15&U)" },
        { name: "Dora Lam", placement: "5th", category: "Intermediate Ballet Solo (16-20)" },
        { name: "Ella Toh", placement: "5th", category: "Intermediate Ballet Solo (12&U)" },
        { name: "Precia Kum", placement: "4th", category: "Intermediate Ballet Solo (11&U)" },
        { name: "Shermaine Lee + Cheyanne Lim", placement: "3rd", category: "Duo/Trio Any Other Styles Senior (15-19)" },
        { name: "Summer Palace", placement: "1st", category: "Group 12&U Any Other Style Large" },
        { name: "Salute", placement: "1st", category: "Group 12&U Tap Large" },
        { name: "Minions", placement: "3rd", category: "Group 6&U Jazz Small" },
        { name: "Jessie", placement: "4th", category: "Group 6&U Jazz Small" },
        { name: "Mini Mouse", placement: "2nd & Gala", category: "Group 6&U Jazz Large" },
        { name: "Sweets", placement: "3rd", category: "Group 6&U Jazz Large" },
        { name: "Spoonful of Sugar", placement: "2nd", category: "Group 8&U Any Other Style Large" },
        { name: "Beauty and the Beast", placement: "2nd", category: "Group 8&U Classical Large" },
        { name: "Love the Memory", placement: "3rd", category: "Group 10&U Lyrical Large" },
        { name: "Dolls", placement: "1st & Gala", category: "Group 10&U Classical Large" },
        { name: "Chinese Tea", placement: "1st", category: "Group 15&U Tap Large" },
        { name: "Found Tonight", placement: "3rd", category: "Group 15&U Lyrical Small" },
        { name: "Arabian", placement: "1st & Gala", category: "Group 15&U Any Other Style Large" },
        { name: "Mai Pen Rai", placement: "2nd", category: "Group 15&U Any Other Style Large" },
        { name: "Learning to Fly", placement: "3rd", category: "Group Open Age Lyrical Small" },
        { name: "Snowflakes", placement: "1st", category: "Group Open Age Classical Large" },
        { name: "Waltz of the Flowers", placement: "2nd", category: "Group Open Age Classical Large" },
        { name: "Hot Chocolate", placement: "3rd", category: "Group Open Age Classical Large" },
        { name: "Bastion", placement: "3rd", category: "Group Open Age Any Other Style Large" },
        { name: "Candyman", placement: "3rd", category: "Group Open Age Jazz Large" },
        { name: "Nakshathra Sandilya", placement: <>Outstanding Group<br/>Dancer Award</>, category: "Special Recognition" }
      ]
    },
    {
      icon: Medal,
      title: "Get The Beat (GTB) 2024",
      results: [
        { name: "Gretchen Lee", placement: "4th", category: "My First Solo Junior (11-12)" },
        { name: "Group Any Other Style (6&U)", placement: "1st", category: "Group Competition" },
        { name: "Melanie Ng", placement: "1st", category: "Intermediate Open Solo (15&U)" },
        { name: "Claire Lee", placement: "5th", category: "Beginner Theatrical (Musical Theatre/Tap/Song&Dance/Broadway Jazz/Acro) Jun 11-12" },
        { name: "Dora Lam", placement: "5th", category: "Intermediate Open Solo (16-20)" },
        { name: "Group Any Other Style 8&U", placement: "2nd", category: "Group Competition" },
        { name: "Group Any Other Style 12&U", placement: "Judges Choice Award", category: "Special Award" },
        { name: "Group Any Other Style 12&U", placement: "Gala Finalist", category: "Special Award" },
        { name: "Group Any Other Style 12&U", placement: <>Judges Award<br/>for Choreography</>, category: "Special Award" },
        { name: "Melanie Ng", placement: "4th", category: "Intermediate Ballet Solo 15&U" },
        { name: "Elysia Low", placement: "1st", category: "Intermediate Tap Solo 13&U" },
        { name: "Juliet Lee", placement: "2nd", category: "Intermediate Tap Solo 15&U" },
        { name: "Group Classical Big Group Open", placement: "1st", category: "Group Competition" },
        { name: "Group Any Other Style Open", placement: "5th", category: "Group Competition" }
      ]
    },
    {
      icon: Award,
      title: "Asia Pacific Dance Competition (APDC) Bangkok 2024",
      results: [
        { name: "Group 6&U", placement: "2nd", category: "Group Competition" },
        { name: "Group Open Contemporary", placement: "Honorable Mention", category: "Group Competition" },
        { name: "Group 8&U Jazz", placement: "2nd", category: "Group Competition" },
        { name: "Group 8&U Jazz", placement: "Honorable Mention", category: "Group Competition" },
        { name: "Group Open Lyrical/Ballet", placement: "2nd", category: "Group Competition" }
      ]
    },
    {
      icon: Star,
      title: "Singapore Regional Competitions (SRC) CSTD 2024",
      results: [
        { name: "Group Any Other Style 13&U", placement: "1st", category: "Group Competition" },
        { name: "Group Acrobatics, Tap, Musical Theatre Open", placement: "1st", category: "Group Competition" },
        { name: "Group 6&U Jazz", placement: "3rd", category: "Group Competition" },
        { name: "Group Classical/Lyrical Open", placement: "2nd", category: "Group Competition" },
        { name: "Group 13&U Jazz", placement: "Honorable Mention", category: "Group Competition" },
        { name: "Juliet Yap", placement: "Honorable Mention", category: "Jazz Novice Solo 10&U" },
        { name: "Elysia Low", placement: "3rd", category: "Tap Novice Solo 14&U" },
        { name: "Kayla Soo", placement: "3rd", category: "Demi Character Novice Solo 15&U" }
      ]
    },
    {
      icon: Calendar,
      title: "Get The Beat (GTB) 2023",
      results: [
        { name: "Group (Open Age Classical)", placement: "1st", category: "Group Competition" },
        { name: "Group (Open Age Classical)", placement: "2nd", category: "Group Competition" },
        { name: "Groups (Open Age Lyrical)", placement: "2nd", category: "Group Competition" },
        { name: "Groups (8&U Jazz)", placement: "3rd", category: "Group Competition" },
        { name: "Groups (7&U Jazz)", placement: "4th", category: "Group Competition" },
        { name: "Groups (15&U Jazz)", placement: "3rd", category: "Group Competition" },
        { name: "Shann Cheng", placement: "3rd", category: "Open Age Open Solo" },
        { name: "Juliet Yap", placement: "3rd", category: "Solo (9&U Jazz)" }
      ]
    },
    {
      icon: Users,
      title: "Singapore Regional Competitions (SRC) CSTD 2023",
      results: [
        { name: "Groups 13&U Jazz", placement: "1st", category: "Group Competition" },
        { name: "Groups Open Age Lyrical and Classical", placement: "2nd", category: "Group Competition" },
        { name: "Ashleigh Zhan", placement: "2nd", category: "National Solo 11&U" },
        { name: "Alexandria", placement: "1st", category: "Lyrical Solo Novice 15&U" },
        { name: "Eliana Goh", placement: "2nd", category: "Lyrical Solo Novice 15&U" },
        { name: "Groups 7&U Jazz", placement: "3rd", category: "Group Competition" },
        { name: "Groups 7&U Jazz", placement: "4th", category: "Group Competition" }
      ]
    },
    {
      icon: Trophy,
      title: "Get The Beat (GTB) 2022",
      results: [
        { name: "Ashley Tan", placement: "5th", category: "My First Solo Teen (13-14)" },
        { name: "Angela Yang", placement: "2nd", category: "My First Solo (20+ yrs Open)" },
        { name: "Shann Cheng", placement: "3rd", category: "Solo (14&U Open)" },
        { name: "Chloe and Jade", placement: "3rd", category: "Duo/Trio Open Age Lyrical/Contemporary" },
        { name: "Ashleigh Zhan", placement: "5th", category: "Solo (11&U Open)" },
        { name: "Group 8&U Any Other Style", placement: "3rd", category: "Group Competition" },
        { name: "Eliana Goh", placement: "4th", category: "Solo (12&U Lyrical)" },
        { name: "Group 12&U Any Other Style", placement: "3rd", category: "Group Competition" },
        { name: "Group (12&U Jazz)", placement: "1st", category: "Group Competition" },
        { name: "Group (15&U Lyrical)", placement: "3rd", category: "Group Competition" },
        { name: "Group (Open Any Other Style)", placement: "1st", category: "Group Competition" },
        { name: "Special Award", placement: "Judges Choice Award", category: "Recognition" },
        { name: "Special Award", placement: "Gala Finalist", category: "Recognition" },
        { name: "Special Award", placement: <>Judges Award for<br/>Musicality and Performance</>, category: "Recognition" },
        { name: "Group (Open Lyrical)", placement: "3rd", category: "Group Competition" }
      ]
    },
    {
      icon: Award,
      title: "Singapore Cup Challenge 2022",
      results: [
        { name: "Group Open Age Lyrical", placement: "1st", category: "Group Competition" }
      ]
    },
    {
      icon: Star,
      title: "Chingay Parade Performances",
      results: [
        { name: "2020 Performance", placement: "Most Lively Contingent Award", category: "Special Recognition" },
        { name: "2021 Performance", placement: "Performed", category: "Cultural Showcase" },
        { name: "2022 Performance", placement: "Performed", category: "Cultural Showcase" },
        { name: "2023 Performance", placement: "Performed", category: "Cultural Showcase" },
        { name: "2024 Performance", placement: "Performed", category: "Cultural Showcase" },
        { name: "2025 Performance", placement: "Performed", category: "Cultural Showcase" }
      ]
    },
    {
      icon: Medal,
      title: "National Day Parade (NDP)",
      results: [
        { name: "2025 National Day Parade", placement: "Performing", category: "National Celebration" }
      ]
    }
  ];

  // Function to sort results by placement order
  const sortResultsByPlacement = (results: any[]) => {
    return [...results].sort((a, b) => {
      const getPlacementValue = (placement: any) => {
        if (typeof placement === 'string') {
          const match = placement.match(/(\d+)/);
          if (match) {
            return parseInt(match[1]);
          }
          // Handle special cases
          if (placement.includes('Honorable Mention')) return 1000;
          if (placement.includes('Gala')) return 1001;
          if (placement.includes('Judges')) return 1002;
          if (placement.includes('Outstanding')) return 1003;
          if (placement.includes('Performed') || placement.includes('Performing')) return 1004;
          return 1005;
        }
        return 1006; // JSX elements go last
      };
      
      return getPlacementValue(a.placement) - getPlacementValue(b.placement);
    });
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Dance Competition Achievements
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto text-lg">
            Celebrating our students' excellence and remarkable success in prestigious dance competitions across Asia.
          </p>
        </div>

        {/* Desktop: Grid Layout with View All/Show Less buttons */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {(showAllCompetitions ? competitions : competitions.slice(0, 6)).map((comp, index) => {
              const IconComponent = comp.icon;
              const isExpanded = expandedCards.includes(index);
              const initialDisplayCount = 2;
              const sortedResults = sortResultsByPlacement(comp.results);
              const displayedResults = isExpanded 
                ? sortedResults 
                : sortedResults.slice(0, initialDisplayCount);
              const hasMoreResults = sortedResults.length > initialDisplayCount;

              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-primary mb-4 text-center">
                      {comp.title}
                    </h3>
                    
                     <div className={`space-y-2 ${isExpanded ? 'max-h-96 overflow-y-auto pr-2' : ''}`}>
                       {displayedResults.map((result, idx) => (
                         <div key={idx} className="text-sm border-b border-gray-100 pb-2 last:border-b-0">
                           <div className="flex justify-between items-start gap-2">
                             <span className="font-medium text-primary shrink-0 text-xs">
                               {typeof result.placement === 'string' && result.placement === 'Honorable Mention' ? (
                                 'Hon. Mention'
                               ) : (
                                 result.placement
                               )}
                             </span>
                             <span className="text-gray-600 flex-1 text-xs leading-relaxed">{result.name}</span>
                           </div>
                           {result.category && (
                             <div className="text-xs text-gray-500 mt-1 line-clamp-2">{result.category}</div>
                           )}
                         </div>
                       ))}
                       {isExpanded && sortedResults.length > 8 && (
                         <div className="text-xs text-gray-400 text-center pt-2 border-t border-gray-100">
                           Showing {sortedResults.length} total results
                         </div>
                       )}
                     </div>

                    {hasMoreResults && (
                      <div className="mt-4 flex justify-center">
                        <button
                          onClick={() => toggleCard(index)}
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 hover:bg-primary/5 rounded-lg transition-colors duration-200"
                        >
                          {isExpanded ? (
                            <>
                              Show Less
                              <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              Show More
                              <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {competitions.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllCompetitions(!showAllCompetitions)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                {showAllCompetitions ? (
                  <>
                    Show Less Achievements
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    View All Achievements
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Mobile: Horizontal Carousel with all achievements */}
        <div className="block md:hidden">
          <Carousel className="w-full max-w-sm sm:max-w-lg mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {competitions.map((comp, index) => {
                const IconComponent = comp.icon;
                const isExpanded = expandedCards.includes(index);
                const sortedResults = sortResultsByPlacement(comp.results);
                const initialDisplayCount = 3;
                const displayedResults = isExpanded 
                  ? sortedResults 
                  : sortedResults.slice(0, initialDisplayCount);
                const hasMoreResults = sortedResults.length > initialDisplayCount;

                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                    <Card className="border-gray-200">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-playfair text-xl font-bold text-primary mb-4 text-center">
                          {comp.title}
                        </h3>
                        
                        <div className={`space-y-2 ${isExpanded ? 'max-h-96 overflow-y-auto pr-2' : ''}`}>
                          {displayedResults.map((result, idx) => (
                            <div key={idx} className="text-sm border-b border-gray-100 pb-2 last:border-b-0">
                              <div className="flex justify-between items-start gap-2">
                                <span className="font-medium text-primary shrink-0 text-xs">
                                  {typeof result.placement === 'string' && result.placement === 'Honorable Mention' ? (
                                    'Hon. Mention'
                                  ) : (
                                    result.placement
                                  )}
                                </span>
                                <span className="text-gray-600 flex-1 text-xs leading-relaxed">{result.name}</span>
                              </div>
                              {result.category && (
                                <div className="text-xs text-gray-500 mt-1 line-clamp-2">{result.category}</div>
                              )}
                            </div>
                          ))}
                          {isExpanded && sortedResults.length > 8 && (
                            <div className="text-xs text-gray-400 text-center pt-2 border-t border-gray-100">
                              Showing {sortedResults.length} total results
                            </div>
                          )}
                        </div>

                        {hasMoreResults && (
                          <div className="mt-4 flex justify-center">
                            <button
                              onClick={() => toggleCard(index)}
                              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 hover:bg-primary/5 rounded-lg transition-colors duration-200"
                            >
                              {isExpanded ? (
                                <>
                                  Show Less
                                  <ChevronUp className="w-4 h-4" />
                                </>
                              ) : (
                                <>
                                  Show More
                                  <ChevronDown className="w-4 h-4" />
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default AchievementsSection;