FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy website files to nginx
COPY index.html /usr/share/nginx/html/

# Set proper permissions
RUN chmod -R 755 /usr/share/nginx/html/ && \
    chmod -R 755 /usr/share/nginx/ && \
    chown -R nginx:nginx /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
