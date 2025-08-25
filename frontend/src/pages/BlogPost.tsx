import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Clock, ArrowLeft, Tag } from "lucide-react";

// Demo blog data (same as in Blog.tsx - in a real app this would come from an API)
const blogPosts = [
  {
    id: 1,
    slug: "mastering-ballet-fundamentals",
    title: "Mastering Ballet Fundamentals: A Beginner's Journey",
    excerpt: "Discover the essential techniques and positions that form the foundation of classical ballet. From plié to grand jeté, learn how to build strength and grace.",
    content: `
      <p>Ballet is the foundation of all dance forms, requiring discipline, grace, and years of dedicated practice. In this comprehensive guide, we'll explore the fundamental positions and movements that every aspiring dancer must master.</p>
      
      <h2>The Five Basic Positions</h2>
      <p>Every ballet dancer must first master the five basic positions of the feet. These positions form the foundation for all ballet movements and help develop the proper alignment and muscle memory essential for more advanced techniques.</p>
      
      <h3>First Position</h3>
      <p>In first position, the heels are together and the toes are turned out as far as comfortable. This position helps develop turnout and balance.</p>
      
      <h3>Second Position</h3>
      <p>Second position is similar to first, but with the feet separated by about one foot's length. This position teaches weight distribution and stability.</p>
      
      <h2>Building Strength and Flexibility</h2>
      <p>Ballet requires incredible strength, particularly in the core and legs. Daily practice of pliés, tendus, and dégagés will help build the foundation needed for more advanced movements.</p>
      
      <p>Remember, progress in ballet takes time. Be patient with yourself and focus on proper technique rather than speed. With consistent practice and dedication, you'll see improvement in your strength, flexibility, and overall dance ability.</p>
    `,
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Ballet",
    tags: ["Beginner", "Technique", "Classical"],
    image: "/lovable-uploads/f883c8a8-3f19-4bce-871e-2f48e153c2f9.png"
  },
  {
    id: 2,
    slug: "hip-hop-evolution",
    title: "Hip-Hop Evolution: From Streets to Studio",
    excerpt: "Explore the rich history of hip-hop dance and how it has evolved from urban street culture to mainstream dance studios worldwide.",
    content: `
      <p>Hip-hop dance emerged from the streets of New York City in the 1970s, becoming a powerful form of cultural expression. Today, it continues to evolve and inspire dancers around the globe.</p>
      
      <h2>The Origins</h2>
      <p>Hip-hop dance originated in the Bronx during block parties where DJs would extend the percussion breaks of funk, soul, and disco songs. Dancers would perform during these breaks, giving birth to what we now know as breakdancing or b-boying.</p>
      
      <h2>Key Styles</h2>
      <h3>Breaking</h3>
      <p>The original style of hip-hop dance, characterized by dynamic moves including toprock, downrock, power moves, and freezes.</p>
      
      <h3>Popping</h3>
      <p>A style that involves quickly contracting and relaxing muscles to create a jerking effect in the dancer's body.</p>
      
      <h3>Locking</h3>
      <p>Known for its distinctive "locks" - sudden pauses in energetic movements.</p>
      
      <p>Today, hip-hop dance has become a global phenomenon, influencing countless other dance styles and remaining a vital form of artistic expression.</p>
    `,
    author: "Marcus Williams",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Hip-Hop",
    tags: ["History", "Urban", "Culture"],
    image: "/lovable-uploads/cc1b8cc0-3767-4760-9f8a-3015d9e2a2f6.png"
  },
  {
    id: 3,
    slug: "contemporary-dance-expression",
    title: "Contemporary Dance: Expressing Emotion Through Movement",
    excerpt: "Learn how contemporary dance combines elements from various genres to create powerful emotional storytelling through fluid, expressive movements.",
    content: `
      <p>Contemporary dance is a genre that emerged in the mid-20th century, blending elements of classical ballet, modern dance, and jazz. It emphasizes emotional expression and storytelling through movement.</p>
      
      <h2>Characteristics of Contemporary Dance</h2>
      <p>Contemporary dance is known for its versatility and emotional depth. Unlike classical ballet with its strict techniques, contemporary dance encourages personal expression and interpretation.</p>
      
      <h3>Fluidity and Flow</h3>
      <p>Movements in contemporary dance often flow seamlessly from one to another, creating a sense of continuity and grace.</p>
      
      <h3>Floor Work</h3>
      <p>Contemporary dance extensively uses the floor as a partner, with dancers moving fluidly between standing and floor-based movements.</p>
      
      <h2>Emotional Expression</h2>
      <p>The heart of contemporary dance lies in its ability to convey deep emotions and tell stories without words. Dancers learn to channel their personal experiences into their movement.</p>
      
      <p>Whether you're a beginner or experienced dancer, contemporary dance offers a beautiful way to explore movement and express your inner world.</p>
    `,
    author: "Elena Rodriguez",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Contemporary",
    tags: ["Expression", "Modern", "Emotion"],
    image: "/lovable-uploads/80e4bd9a-27a2-46c2-879c-2384503deb4a.png"
  },
  {
    id: 4,
    slug: "competition-preparation",
    title: "Competition Preparation: Mental and Physical Training",
    excerpt: "Discover the secrets to successful dance competition preparation, from physical conditioning to mental resilience and performance confidence.",
    content: `
      <p>Preparing for dance competitions requires more than just perfecting choreography. Mental preparation, physical conditioning, and developing stage presence are equally important components of success.</p>
      
      <h2>Physical Preparation</h2>
      <p>Your body is your instrument, and like any instrument, it needs to be properly maintained and conditioned.</p>
      
      <h3>Strength Training</h3>
      <p>Focus on building core strength, leg power, and overall endurance. Pilates and yoga are excellent complementary practices.</p>
      
      <h3>Flexibility</h3>
      <p>Regular stretching routines help prevent injury and improve your range of motion.</p>
      
      <h2>Mental Preparation</h2>
      <p>The mental aspect of competition is often overlooked but crucial for success.</p>
      
      <h3>Visualization</h3>
      <p>Spend time mentally rehearsing your routine, imagining yourself performing flawlessly.</p>
      
      <h3>Managing Nerves</h3>
      <p>Learn breathing techniques and develop pre-performance rituals to calm your nerves.</p>
      
      <h2>Performance Day</h2>
      <p>On competition day, trust your preparation. Focus on enjoying the performance rather than the outcome.</p>
    `,
    author: "David Kim",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Competition",
    tags: ["Training", "Performance", "Mindset"],
    image: "/lovable-uploads/787ef26d-968d-4441-a7e6-d177b26e1dc1.png"
  },
  {
    id: 5,
    slug: "dance-nutrition",
    title: "Dance Nutrition: Fueling Your Performance",
    excerpt: "Understanding proper nutrition for dancers is crucial for maintaining energy, preventing injuries, and optimizing performance throughout training and competitions.",
    content: `
      <p>Dancers are athletes who require proper nutrition to fuel their demanding training schedules and performances. Understanding what to eat and when can make a significant difference in your energy levels, recovery, and overall performance.</p>
      
      <h2>Pre-Training Nutrition</h2>
      <p>What you eat before training can significantly impact your energy levels and performance quality.</p>
      
      <h3>Timing</h3>
      <p>Eat a balanced meal 2-3 hours before training, or a light snack 30-60 minutes before if needed.</p>
      
      <h3>Composition</h3>
      <p>Focus on complex carbohydrates for sustained energy, moderate protein, and minimal fat to avoid digestive issues.</p>
      
      <h2>During Training</h2>
      <p>For sessions longer than an hour, consider light snacks like bananas or energy bars to maintain energy levels.</p>
      
      <h2>Post-Training Recovery</h2>
      <p>The post-training meal is crucial for recovery and adaptation.</p>
      
      <h3>The Recovery Window</h3>
      <p>Aim to eat within 30-60 minutes after training for optimal recovery.</p>
      
      <h3>Protein and Carbs</h3>
      <p>Include both protein for muscle repair and carbohydrates to replenish energy stores.</p>
      
      <h2>Hydration</h2>
      <p>Proper hydration is essential for performance and recovery. Monitor your fluid intake throughout the day, not just during training.</p>
    `,
    author: "Dr. Amy Thompson",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Health",
    tags: ["Nutrition", "Performance", "Wellness"],
    image: "/lovable-uploads/9b23aa52-1bb4-4e41-b2c0-f26892b6aa20.png"
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation scrollToSection={() => {}} />
        <div className="container mx-auto px-4 pt-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-primary hover:text-primary/80">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={handleScrollToSection} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <button 
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-white border-white/20">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-white/90 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <Card>
            <CardContent className="p-8">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}