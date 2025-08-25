# Strapi Integration Setup Guide

## Overview
This guide explains how to set up and configure the Strapi CMS integration with your React frontend.

## Prerequisites
- Node.js (v16 or higher)
- Yarn or npm
- Strapi backend running

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file in the `frontend/` directory:

```bash
# Copy the example file
cp .env.example .env
```

Update the `.env` file with your Strapi configuration:

```env
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_API_TOKEN=your_strapi_api_token_here
```

### 2. Strapi Content Types Created

The following content types have been set up in your Strapi backend:

#### Blog System
- **Blog Posts** (`/api/blog-posts`)
  - Title, slug, excerpt, content, featured image
  - Relations: category, author, tags
  - SEO metadata support

- **Categories** (`/api/categories`)
  - Name, slug, description, color
  - One-to-many relationship with blog posts

- **Authors** (`/api/authors`)
  - Name, slug, bio, avatar, email, social links
  - One-to-many relationship with blog posts

- **Tags** (`/api/tags`)
  - Name, slug, color
  - Many-to-many relationship with blog posts

#### Homepage Content
- **Hero Section** (`/api/hero-section`) - Single Type
  - Title, subtitle, background image/video
  - Primary and secondary buttons
  - Features list

- **Testimonials** (`/api/testimonials`)
  - Name, role, content, rating, avatar
  - Featured flag and ordering

- **Events** (`/api/events`)
  - Title, description, dates, location
  - Featured image and gallery
  - Event type, price, registration URL

- **Gallery Items** (`/api/gallery-items`)
  - Title, description, image
  - Category, featured flag, ordering

#### Shared Components
- **Button Component** - Reusable button with variants
- **SEO Component** - Meta data for pages

### 3. Frontend Integration

The frontend has been updated with:

#### API Services
- `src/lib/strapi.ts` - Strapi API client configuration
- `src/services/blogService.ts` - Blog-related API calls
- `src/services/homepageService.ts` - Homepage content API calls

#### Updated Components
- `src/pages/Blog.tsx` - Now fetches from Strapi API
- `src/components/sections/ReviewsSection.tsx` - Dynamic testimonials
- `src/components/sections/GallerySection.tsx` - Dynamic gallery

#### Features Added
- Loading states for all API calls
- Error handling with fallback to static content
- TypeScript types for all Strapi responses
- Image URL formatting for Strapi media
- Responsive design maintained

### 4. Starting the Application

#### Start Strapi Backend
```bash
# In the root directory
npm run develop
# or
yarn develop
```

#### Start Frontend
```bash
# In the frontend directory
cd frontend
npm run dev
# or
yarn dev
```

### 5. Adding Content in Strapi

1. **Access Strapi Admin**: http://localhost:1337/admin
2. **Create content for each collection type**:
   - Add categories first (Ballet, Hip-Hop, Contemporary, etc.)
   - Add authors with avatars
   - Add tags
   - Create blog posts with featured images
   - Add testimonials with ratings
   - Upload gallery images
   - Configure hero section content

### 6. API Permissions

Ensure the following permissions are set in Strapi:
- **Public role** should have `find` and `findOne` permissions for:
  - Blog Posts, Categories, Authors, Tags
  - Testimonials, Events, Gallery Items
  - Hero Section

### 7. Troubleshooting

#### Common Issues:
1. **CORS errors**: Configure Strapi CORS settings in `config/middlewares.js`
2. **API token issues**: Generate a new API token in Strapi admin
3. **Image not loading**: Check media upload permissions and URL configuration
4. **Empty content**: Verify content is published (not draft) in Strapi

#### Fallback Behavior:
- If Strapi is unavailable, the frontend will show static fallback content
- Loading states are displayed while fetching data
- Error messages are shown if API calls fail

### 8. Deployment Considerations

#### Environment Variables:
- Update `VITE_STRAPI_URL` for production Strapi instance
- Generate production API token
- Configure CORS for production domain

#### Build Process:
```bash
# Frontend build
cd frontend
npm run build

# Strapi build
npm run build
```

## Content Management Workflow

1. **Content Creation**: Use Strapi admin panel to create/edit content
2. **Publishing**: Ensure content is published (not draft)
3. **Frontend Updates**: Changes appear immediately on frontend
4. **Media Management**: Upload images through Strapi media library

## Next Steps

1. Add content in Strapi admin panel
2. Test all functionality with real data
3. Configure production environment variables
4. Set up automated deployments if needed

## Support

For issues with:
- **Strapi setup**: Check Strapi documentation
- **Frontend integration**: Review API service files
- **Content types**: Refer to schema files in `src/api/*/content-types/`
