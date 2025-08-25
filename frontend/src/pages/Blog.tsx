import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Clock, Tag, Folder, Loader2 } from "lucide-react";
import { blogService, formatBlogPostForDisplay } from "@/services/blogService";
import type { BlogPost, Category, Author, Tag as BlogTag } from "@/services/blogService";

interface BlogData {
  posts: BlogPost[];
  categories: Category[];
  authors: Author[];
  tags: BlogTag[];
}

interface LoadingState {
  posts: boolean;
  categories: boolean;
  authors: boolean;
  tags: boolean;
}

interface ErrorState {
  posts: string | null;
  categories: string | null;
  authors: string | null;
  tags: string | null;
}
export default function Blog() {
  const [blogData, setBlogData] = useState<BlogData>({
    posts: [],
    categories: [],
    authors: [],
    tags: []
  });
  
  const [loading, setLoading] = useState<LoadingState>({
    posts: true,
    categories: true,
    authors: true,
    tags: true
  });
  
  const [errors, setErrors] = useState<ErrorState>({
    posts: null,
    categories: null,
    authors: null,
    tags: null
  });

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Fetch all blog data in parallel
        const [postsData, categoriesData, authorsData, tagsData] = await Promise.allSettled([
          blogService.getAllPosts({ pageSize: 10 }),
          blogService.getCategories(),
          blogService.getAuthors(),
          blogService.getTags()
        ]);

        // Handle posts
        if (postsData.status === 'fulfilled') {
          setBlogData(prev => ({ ...prev, posts: postsData.value }));
          setErrors(prev => ({ ...prev, posts: null }));
        } else {
          setErrors(prev => ({ ...prev, posts: 'Failed to load blog posts' }));
        }
        setLoading(prev => ({ ...prev, posts: false }));

        // Handle categories
        if (categoriesData.status === 'fulfilled') {
          setBlogData(prev => ({ ...prev, categories: categoriesData.value }));
          setErrors(prev => ({ ...prev, categories: null }));
        } else {
          setErrors(prev => ({ ...prev, categories: 'Failed to load categories' }));
        }
        setLoading(prev => ({ ...prev, categories: false }));

        // Handle authors
        if (authorsData.status === 'fulfilled') {
          setBlogData(prev => ({ ...prev, authors: authorsData.value }));
          setErrors(prev => ({ ...prev, authors: null }));
        } else {
          setErrors(prev => ({ ...prev, authors: 'Failed to load authors' }));
        }
        setLoading(prev => ({ ...prev, authors: false }));

        // Handle tags
        if (tagsData.status === 'fulfilled') {
          setBlogData(prev => ({ ...prev, tags: tagsData.value }));
          setErrors(prev => ({ ...prev, tags: null }));
        } else {
          setErrors(prev => ({ ...prev, tags: 'Failed to load tags' }));
        }
        setLoading(prev => ({ ...prev, tags: false }));

      } catch (error) {
        console.error('Error fetching blog data:', error);
        setLoading({
          posts: false,
          categories: false,
          authors: false,
          tags: false
        });
      }
    };

    fetchBlogData();
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  );

  const ErrorMessage = ({ message }: { message: string }) => (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
      {message}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={handleScrollToSection} />
      
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-12">
        <div className="container mx-auto px-4 text-center text-foreground">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 mx-[4px] my-0 text-dance-bronze">Our Blogs</h1>
          <p className="text-lg md:text-xl mb-0 max-w-2xl mx-auto font-inter text-gray-600">
            Insights, Tips, and Stories from the World of Dance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[5px]">
        <div className="container mx-auto px-4 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Blog Posts - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              {loading.posts ? (
                <LoadingSpinner />
              ) : errors.posts ? (
                <ErrorMessage message={errors.posts} />
              ) : blogData.posts.length === 0 ? (
                <div className="text-center p-8 text-gray-500">
                  No blog posts found. Please add some content in Strapi.
                </div>
              ) : (
                blogData.posts.map(post => {
                  const displayPost = formatBlogPostForDisplay(post);
                  return (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <Link to={`/blog/${post.slug}`}>
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={displayPost.image || '/placeholder.svg'} 
                            alt={post.title} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                          />
                        </div>
                      </Link>
                      
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Link to={`/blog/category/${post.category.slug}`}>
                            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                              {post.category.name}
                            </Badge>
                          </Link>
                          {post.tags.map(tag => (
                            <Link key={tag.id} to={`/blog/tag/${tag.slug}`}>
                              <Badge variant="outline" className="text-xs cursor-pointer hover:bg-muted">
                                {tag.name}
                              </Badge>
                            </Link>
                          ))}
                        </div>
                        
                        <Link to={`/blog/${post.slug}`}>
                          <CardTitle className="text-2xl font-playfair hover:text-primary transition-colors cursor-pointer text-dance-bronze">
                            {post.title}
                          </CardTitle>
                        </Link>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author.name}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="mb-4 font-inter text-gray-600">{post.excerpt}</p>
                        <Link to={`/blog/${post.slug}`} className="text-primary hover:text-primary/80 font-medium transition-colors font-inter">
                          Read More →
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>

            {/* Sidebar - Right Side */}
            <div className="space-y-6">
              
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-playfair text-dance-bronze">
                    <Folder className="w-5 h-5" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {loading.categories ? (
                    <LoadingSpinner />
                  ) : errors.categories ? (
                    <ErrorMessage message={errors.categories} />
                  ) : blogData.categories.length === 0 ? (
                    <p className="text-gray-500 text-sm">No categories found.</p>
                  ) : (
                    blogData.categories.map(category => (
                      <Link 
                        key={category.id} 
                        to={`/blog/category/${category.slug}`} 
                        className="flex justify-between items-center hover:text-primary cursor-pointer transition-colors text-gray-600"
                      >
                        <span>{category.name}</span>
                        <Badge variant="secondary">
                          {category.blog_posts?.length || 0}
                        </Badge>
                      </Link>
                    ))
                  )}
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-playfair text-dance-bronze">
                    <Tag className="w-5 h-5" />
                    Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {loading.tags ? (
                    <LoadingSpinner />
                  ) : errors.tags ? (
                    <ErrorMessage message={errors.tags} />
                  ) : blogData.tags.length === 0 ? (
                    <p className="text-gray-500 text-sm">No tags found.</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {blogData.tags.map(tag => (
                        <Link key={tag.id} to={`/blog/tag/${tag.slug}`}>
                          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                            {tag.name}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Authors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-playfair text-dance-bronze">
                    <User className="w-5 h-5" />
                    Authors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {loading.authors ? (
                    <LoadingSpinner />
                  ) : errors.authors ? (
                    <ErrorMessage message={errors.authors} />
                  ) : blogData.authors.length === 0 ? (
                    <p className="text-gray-500 text-sm">No authors found.</p>
                  ) : (
                    blogData.authors.map(author => (
                      <Link 
                        key={author.id} 
                        to={`/blog/author/${author.slug}`} 
                        className="flex justify-between items-center hover:text-primary cursor-pointer transition-colors text-gray-600"
                      >
                        <span>{author.name}</span>
                        <Badge variant="secondary">
                          {author.blog_posts?.length || 0}
                        </Badge>
                      </Link>
                    ))
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}