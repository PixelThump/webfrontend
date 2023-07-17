#stage 1
# Pull node
FROM node:fermium-buster as node
# Create working directory
WORKDIR /app
# Copy full application code into working directory
COPY . .
# Install all dependencies of angular application
RUN npm install
# Build Angular application
RUN npm run build
# stage 2
# Pull nginx for angular hosting
FROM nginx:alpine
# Copy angular target folder (dist) into the static hosting path of nginx
COPY --from=node /app/dist/my-dockerized-angular /usr/share/nginx/html