# Multi-stage build for optimized production image
# ============================================

# Stage 1: Builder
# ============================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && \
    npm ci --only=development && \
    npm cache clean --force

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Verify build output
RUN ls -la dist/ && \
    test -f dist/index.html || (echo "Build failed: dist/index.html not found" && exit 1)

# ============================================
# Stage 2: Runtime (Nginx)
# ============================================
FROM nginx:1.27-alpine

# Set working directory
WORKDIR /app

# Install tools for health checks
RUN apk add --no-cache curl

# Remove default nginx config
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Verify nginx config
RUN nginx -t || (echo "Nginx config validation failed" && exit 1)

# Copy built application from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Set correct permissions
RUN chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /var/cache/nginx && \
    chmod -R 755 /var/log/nginx

# Create directory for custom logs
RUN mkdir -p /var/log/nginx && \
    chown -R nginx:nginx /var/log/nginx

# Expose port
EXPOSE 80

# Health check - improved
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -sf http://localhost/index.html > /dev/null || exit 1

# Run as non-root user
USER nginx

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
