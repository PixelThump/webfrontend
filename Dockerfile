#stage 1
# Pull node
FROM node:18-alpine AS node
# Create working directory
WORKDIR /app
# Copy full application code into working directory
COPY . .
# Install all dependencies of angular application
RUN npm install
RUN npm run buildProd
# stage 2
# Pull nginx for angular hosting
FROM nginx:alpine
# Copy angular target folder (dist) into the static hosting path of nginx
COPY --from=node /app/dist/frontend /usr/share/nginx/html
# Copy nginx config into correct folder
COPY nginx.conf /etc/nginx/conf.d/default.conf
