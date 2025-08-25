import axios from 'axios';

// Strapi API configuration
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;

// Create axios instance
const strapiApi = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    ...(API_TOKEN && { Authorization: `Bearer ${API_TOKEN}` }),
  },
});

// Types for Strapi responses
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiEntity {
  id: number;
  attributes: Record<string, any>;
}

export interface StrapiMedia {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: Record<string, any>;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
  };
}

// Helper function to get media URL
export const getStrapiMediaUrl = (media: StrapiMedia | null): string => {
  if (!media) return '';
  const url = media.attributes.url;
  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
};

// Helper function to format Strapi entity
export const formatStrapiEntity = <T>(entity: StrapiEntity): T & { id: number } => {
  return {
    id: entity.id,
    ...entity.attributes,
  } as T & { id: number };
};

// Helper function to format Strapi collection response
export const formatStrapiCollection = <T>(response: StrapiResponse<StrapiEntity[]>): (T & { id: number })[] => {
  return response.data.map(entity => formatStrapiEntity<T>(entity));
};

// Helper function to format single Strapi response
export const formatStrapiSingle = <T>(response: StrapiResponse<StrapiEntity>): T & { id: number } => {
  return formatStrapiEntity<T>(response.data);
};

export default strapiApi;
