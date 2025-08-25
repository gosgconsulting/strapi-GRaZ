import strapiApi, { formatStrapiCollection, formatStrapiSingle, getStrapiMediaUrl, StrapiMedia } from '@/lib/strapi';

// Homepage Content Types
export interface HeroSection {
  id: number;
  title: string;
  subtitle?: string;
  backgroundImage?: StrapiMedia;
  backgroundVideo?: StrapiMedia;
  primaryButton?: Button;
  secondaryButton?: Button;
  features?: string[];
}

export interface Button {
  text: string;
  url?: string;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  openInNewTab: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: StrapiMedia;
  featured: boolean;
  order: number;
}

export interface Event {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  startDate: string;
  endDate?: string;
  location?: string;
  featuredImage?: StrapiMedia;
  gallery?: StrapiMedia[];
  eventType: 'competition' | 'performance' | 'workshop' | 'recital' | 'masterclass' | 'other';
  price?: number;
  registrationUrl?: string;
  featured: boolean;
}

export interface GalleryItem {
  id: number;
  title: string;
  description?: string;
  image: StrapiMedia;
  category: 'performance' | 'class' | 'competition' | 'event' | 'behind-scenes' | 'other';
  featured: boolean;
  order: number;
  tags?: string[];
}

// Homepage Service Functions
export const homepageService = {
  // Get hero section content
  async getHeroSection() {
    const queryParams = new URLSearchParams();
    queryParams.append('populate[backgroundImage]', '*');
    queryParams.append('populate[backgroundVideo]', '*');
    queryParams.append('populate[primaryButton]', '*');
    queryParams.append('populate[secondaryButton]', '*');
    
    const response = await strapiApi.get(`/hero-section?${queryParams.toString()}`);
    return formatStrapiSingle<HeroSection>(response.data);
  },

  // Get testimonials
  async getTestimonials(featured = false) {
    const queryParams = new URLSearchParams();
    queryParams.append('populate[avatar]', '*');
    
    if (featured) {
      queryParams.append('filters[featured][$eq]', 'true');
    }
    
    queryParams.append('sort[0]', 'order:asc');
    queryParams.append('sort[1]', 'createdAt:desc');
    
    const response = await strapiApi.get(`/testimonials?${queryParams.toString()}`);
    return formatStrapiCollection<Testimonial>(response.data);
  },

  // Get events
  async getEvents(params?: {
    featured?: boolean;
    upcoming?: boolean;
    eventType?: string;
    limit?: number;
  }) {
    const queryParams = new URLSearchParams();
    queryParams.append('populate[featuredImage]', '*');
    queryParams.append('populate[gallery]', '*');
    
    if (params?.featured) {
      queryParams.append('filters[featured][$eq]', 'true');
    }
    
    if (params?.upcoming) {
      const now = new Date().toISOString();
      queryParams.append('filters[startDate][$gte]', now);
    }
    
    if (params?.eventType) {
      queryParams.append('filters[eventType][$eq]', params.eventType);
    }
    
    if (params?.limit) {
      queryParams.append('pagination[pageSize]', params.limit.toString());
    }
    
    queryParams.append('sort[0]', 'startDate:asc');
    
    const response = await strapiApi.get(`/events?${queryParams.toString()}`);
    return formatStrapiCollection<Event>(response.data);
  },

  // Get single event by slug
  async getEventBySlug(slug: string) {
    const queryParams = new URLSearchParams();
    queryParams.append('filters[slug][$eq]', slug);
    queryParams.append('populate[featuredImage]', '*');
    queryParams.append('populate[gallery]', '*');
    
    const response = await strapiApi.get(`/events?${queryParams.toString()}`);
    const events = formatStrapiCollection<Event>(response.data);
    return events.length > 0 ? events[0] : null;
  },

  // Get gallery items
  async getGalleryItems(params?: {
    featured?: boolean;
    category?: string;
    limit?: number;
  }) {
    const queryParams = new URLSearchParams();
    queryParams.append('populate[image]', '*');
    
    if (params?.featured) {
      queryParams.append('filters[featured][$eq]', 'true');
    }
    
    if (params?.category) {
      queryParams.append('filters[category][$eq]', params.category);
    }
    
    if (params?.limit) {
      queryParams.append('pagination[pageSize]', params.limit.toString());
    }
    
    queryParams.append('sort[0]', 'order:asc');
    queryParams.append('sort[1]', 'createdAt:desc');
    
    const response = await strapiApi.get(`/gallery-items?${queryParams.toString()}`);
    return formatStrapiCollection<GalleryItem>(response.data);
  },

  // Get upcoming events for homepage
  async getUpcomingEvents(limit = 3) {
    return this.getEvents({ upcoming: true, limit });
  },

  // Get featured events for homepage
  async getFeaturedEvents(limit = 6) {
    return this.getEvents({ featured: true, limit });
  },

  // Get featured gallery items for homepage
  async getFeaturedGalleryItems(limit = 6) {
    return this.getGalleryItems({ featured: true, limit });
  },

  // Get featured testimonials for homepage
  async getFeaturedTestimonials() {
    return this.getTestimonials(true);
  }
};

// Helper functions for formatting data for display
export const formatEventForDisplay = (event: Event) => ({
  id: event.id,
  slug: event.slug,
  title: event.title,
  description: event.description,
  shortDescription: event.shortDescription,
  startDate: event.startDate,
  endDate: event.endDate,
  location: event.location,
  eventType: event.eventType,
  price: event.price,
  registrationUrl: event.registrationUrl,
  image: getStrapiMediaUrl(event.featuredImage),
  gallery: event.gallery?.map(img => getStrapiMediaUrl(img)) || []
});

export const formatGalleryItemForDisplay = (item: GalleryItem) => ({
  id: item.id,
  title: item.title,
  description: item.description,
  category: item.category,
  image: getStrapiMediaUrl(item.image),
  tags: item.tags || []
});

export const formatTestimonialForDisplay = (testimonial: Testimonial) => ({
  id: testimonial.id,
  name: testimonial.name,
  role: testimonial.role,
  content: testimonial.content,
  rating: testimonial.rating,
  avatar: getStrapiMediaUrl(testimonial.avatar)
});

export default homepageService;
