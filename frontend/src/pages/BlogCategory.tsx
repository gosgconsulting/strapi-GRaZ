import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

// Demo blog data (same as in Blog.tsx - in a real app this would come from an API)
const blogPosts = [
  {
    id: 1,
    slug: "mastering-ballet-fundamentals",
    title: "Mastering Ballet Fundamentals: A Beginner's Journey",
    excerpt: "Discover the essential techniques and positions that form the foundation of classical ballet. From plié to grand jeté, learn how to build strength and grace.",
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
    author: "Dr. Amy Thompson",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Health",
    tags: ["Nutrition", "Performance", "Wellness"],
    image: "/lovable-uploads/9b23aa52-1bb4-4e41-b2c0-f26892b6aa20.png"
  }
];

export default function BlogCategory() {
  const { category } = useParams();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filteredPosts = blogPosts.filter(post => 
    post.category.toLowerCase() === category?.toLowerCase()
  );

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
        <div className="container mx-auto px-4 text-center text-white">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Blogs
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {category} Dance Blog Posts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-inter">
            Explore all our {category?.toLowerCase()} dance content
          </p>
          <Badge variant="secondary" className="bg-white/20 text-white">
            {filteredPosts.length} posts found
          </Badge>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">No posts found</h2>
              <p className="text-muted-foreground mb-8 font-inter">
                There are no blog posts in the "{category}" category yet.
              </p>
              <Link 
                to="/blog"
                className="text-primary hover:text-primary/80 font-medium font-inter"
              >
                ← Back to all posts
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Link to={`/blog/${post.slug}`}>
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </Link>
                  
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      {post.tags.map(tag => (
                        <Link key={tag} to={`/blog/tag/${tag.toLowerCase()}`}>
                          <Badge variant="outline" className="text-xs cursor-pointer hover:bg-muted">
                            {tag}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                    </Link>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-inter">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 font-inter">{post.excerpt}</p>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary/80 font-medium transition-colors font-inter"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}