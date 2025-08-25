# Railway Deployment Guide

## Build Configuration Fixed

The Railway deployment now includes proper build processes for both the React frontend and Strapi CMS:

### 1. Build Process
- **Frontend Build**: `npm run build:frontend` builds React app in `frontend/dist/`
- **Strapi Build**: `strapi build` builds the admin panel
- **Combined Build**: `npm run build` runs both builds sequentially
- **Static Serving**: Frontend served from `/`, Strapi admin from `/admin`

### 2. Railway Configuration (`railway.json`)
```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm run build"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/api/health",
    "healthcheckTimeout": 300
  }
}
```

### 3. Static File Serving
- **Frontend**: Served from `/` via `config/middlewares.js`
- **Admin Panel**: Available at `/admin`
- **API**: Available at `/api/*`
- **Health Check**: Available at `/api/health`

### 4. Server Configuration
- **Updated**: `config/server.js` with Railway environment variables
- **Database**: Flexible SQLite (local) / PostgreSQL (production)
- **Static Files**: Frontend dist folder served by Strapi

### 5. Environment Variables
Required for Railway deployment:

```env
DATABASE_CLIENT=postgres
DATABASE_URL=${DATABASE_URL}
URL=${RAILWAY_STATIC_URL}
APP_KEYS="your-secret-keys-here"
API_TOKEN_SALT=your-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

## Deployment Architecture

```
Railway Deployment:
├── Frontend (React) → Built to frontend/dist/ → Served at /
├── Strapi Admin → Built with strapi build → Served at /admin
├── Strapi API → Available at /api/*
└── Health Check → Available at /api/health
```

## Deployment Steps

1. **Push changes** to your repository
2. **Set environment variables** in Railway dashboard
3. **Deploy** - Railway will:
   - Install dependencies
   - Build frontend (`cd frontend && npm ci && npm run build`)
   - Build Strapi admin (`strapi build`)
   - Start server (`npm start`)
   - Health check at `/api/health`

## Access Points

After successful deployment:
- **Frontend**: `https://your-app.railway.app/`
- **Admin Panel**: `https://your-app.railway.app/admin`
- **API**: `https://your-app.railway.app/api/*`
- **Health Check**: `https://your-app.railway.app/api/health`
