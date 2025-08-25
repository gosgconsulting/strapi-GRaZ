import strapiApi, { formatStrapiCollection, formatStrapiSingle, getStrapiMediaUrl, StrapiMedia } from '@/lib/strapi';

// Blog Post Types
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  readTime: string;
  publishDate: string;
  featuredImage: StrapiMedia;
  category: Category;
  author: Author;
  tags: Tag[];
  seo?: SEO;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color: string;
  blog_posts?: BlogPost[];
}

export interface Author {
  id: number;
  name: string;
  slug: string;
  bio?: string;
  avatar?: StrapiMedia;
  email?: string;
  socialLinks?: Record<string, string>;
  blog_posts?: BlogPost[];
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  color: string;
}

export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: StrapiMedia;
}

// Blog Service Functions
export const blogService = {
  // Get all blog posts
  async getAllPosts(params?: {
    page?: number;
    pageSize?: number;
    category?: string;
    author?: string;
    tag?: string;
    featured?: boolean;
  }) {
    const queryParams = new URLSearchParams();
    
    // Populate relations
    queryParams.append('populate[featuredImage]', '*');
    queryParams.append('populate[category]', '*');
    queryParams.append('populate[author][populate][avatar]', '*');
    queryParams.append('populate[tags]', '*');
    queryParams.append('populate[seo][populate][ogImage]', '*');
    
    // Pagination
    if (params?.page) queryParams.append('pagination[page]', params.page.toString());
    if (params?.pageSize) queryParams.append('pagination[pageSize]', params.pageSize.toString());
    
    // Filters
    if (params?.category) {
      queryParams.append('filters[category][slug][$eq]', params.category);
    }
    if (params?.author) {
      queryParams.append('filters[author][slug][$eq]', params.author);
    }
    if (params?.tag) {
      queryParams.append('filters[tags][slug][$eq]', params.tag);
    }
    if (params?.featured !== undefined) {
      queryParams.append('filters[featured][$eq]', params.featured.toString());
    }
    
    // Sort by publish date (newest first)
    queryParams.append('sort[0]', 'publishDate:desc');
    
    const response = await strapiApi.get(`/blog-posts?${queryParams.toString()}`);
    return formatStrapiCollection<BlogPost>(response.data);
  },

  // Get single blog post by slug
  async getPostBySlug(slug: string) {
    const queryParams = new URLSearchParams();
    queryParams.append('filters[slug][$eq]', slug);
    queryParams.append('populate[featuredImage]', '*');
    queryParams.append('populate[category]', '*');
    queryParams.append('populate[author][populate][avatar]', '*');
    queryParams.append('populate[tags]', '*');
    queryParams.append('populate[seo][populate][ogImage]', '*');
    
    const response = await strapiApi.get(`/blog-posts?${queryParams.toString()}`);
    const posts = formatStrapiCollection<BlogPost>(response.data);
    return posts.length > 0 ? posts[0] : null;
  },

  // Get all categories
  async getCategories() {
    const queryParams = new URLSearchParams();
    queryParams.append('populate[blog_posts]', 'count');
    queryParams.append('sort[0]', 'name:asc');
    
    const response = await strapiApi.get(`/categories?${queryParams.toString()}`);
    return formatStrapiCollection<Category>(response.data);
  },

  // Get all authors
  async getAuthors() {
    const queryParams = new URLSearchParams();
    queryParams.append('populate[avatar]', '*');
    queryParams.append('populate[blog_posts]', 'count');
    queryParams.append('sort[0]', 'name:asc');
    
    const response = await strapiApi.get(`/authors?${queryParams.toString()}`);
    return formatStrapiCollection<Author>(response.data);
  },

  // Get all tags
  async getTags() {
    const queryParams = new URLSearchParams();
    queryParams.append('populate[blog_posts]', 'count');
    queryParams.append('sort[0]', 'name:asc');
    
    const response = await strapiApi.get(`/tags?${queryParams.toString()}`);
    return formatStrapiCollection<Tag>(response.data);
  },

  // Get posts by category
  async getPostsByCategory(categorySlug: string, params?: { page?: number; pageSize?: number }) {
    return this.getAllPosts({ ...params, category: categorySlug });
  },

  // Get posts by author
  async getPostsByAuthor(authorSlug: string, params?: { page?: number; pageSize?: number }) {
    return this.getAllPosts({ ...params, author: authorSlug });
  },

  // Get posts by tag
  async getPostsByTag(tagSlug: string, params?: { page?: number; pageSize?: number }) {
    return this.getAllPosts({ ...params, tag: tagSlug });
  },

  // Get related posts (by category, excluding current post)
  async getRelatedPosts(postId: number, categorySlug: string, limit = 3) {
    const queryParams = new URLSearchParams();
    queryParams.append('filters[category][slug][$eq]', categorySlug);
    queryParams.append('filters[id][$ne]', postId.toString());
    queryParams.append('pagination[pageSize]', limit.toString());
    queryParams.append('populate[featuredImage]', '*');
    queryParams.append('populate[category]', '*');
    queryParams.append('populate[author]', '*');
    queryParams.append('sort[0]', 'publishDate:desc');
    
    const response = await strapiApi.get(`/blog-posts?${queryParams.toString()}`);
    return formatStrapiCollection<BlogPost>(response.data);
  }
};

// Helper function to format blog post for display
export const formatBlogPostForDisplay = (post: BlogPost) => ({
  id: post.id,
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  content: post.content,
  author: post.author.name,
  date: post.publishDate,
  readTime: post.readTime,
  category: post.category.name,
  tags: post.tags.map(tag => tag.name),
  image: getStrapiMediaUrl(post.featuredImage)
});

export default blogService;
