# Railway Deployment Guide

## Fixed Issues

The Railway deployment was failing due to health check configuration issues. The following fixes have been implemented:

### 1. Health Check Configuration
- **Issue**: Railway was checking `/admin` endpoint which requires authentication
- **Fix**: Changed health check to `/` endpoint in `railway.json`
- **Added**: Simple health check route in `src/index.js` that returns `{ status: 'ok', message: 'Strapi is running' }`

### 2. Server Configuration
- **Updated**: `config/server.js` with proper Railway environment variables
- **Added**: Fallback values for APP_KEYS and URL configuration
- **Set**: `RAILWAY_STATIC_URL` as fallback for URL configuration

### 3. Database Configuration
- **Updated**: `config/database.js` to support both SQLite (local) and PostgreSQL (production)
- **Added**: Proper SSL configuration for production database
- **Set**: Connection timeouts and pool settings

### 4. Environment Variables
Created `.env.example` with required variables for Railway:

```env
# Required for Railway deployment
DATABASE_CLIENT=postgres
DATABASE_URL=${DATABASE_URL}
URL=${RAILWAY_STATIC_URL}
APP_KEYS="your-secret-keys-here"
API_TOKEN_SALT=your-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

## Railway Configuration

The `railway.json` now includes:
- Health check path: `/` (instead of `/admin`)
- Health check timeout: 300 seconds
- Restart policy: ON_FAILURE

## Deployment Steps

1. **Push changes** to your repository
2. **Set environment variables** in Railway dashboard:
   - `DATABASE_CLIENT=postgres`
   - `APP_KEYS` (generate secure keys)
   - `API_TOKEN_SALT` (generate secure salt)
   - `ADMIN_JWT_SECRET` (generate secure secret)
   - `TRANSFER_TOKEN_SALT` (generate secure salt)
   - `JWT_SECRET` (generate secure secret)
3. **Redeploy** the application

## Health Check Endpoint

The application now responds to `GET /` with:
```json
{
  "status": "ok",
  "message": "Strapi is running"
}
```

This endpoint is unauthenticated and will allow Railway's health check to pass.

## Next Steps

After successful deployment:
1. Access Strapi admin at `https://your-app.railway.app/admin`
2. Create your admin user
3. Configure content types and permissions
4. Update frontend environment variables to point to your Railway URL
