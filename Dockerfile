# Buildstage
FROM node:20-alpine as angular
ARG STRAPI_URL
ARG MATOMO_SITE_ID
WORKDIR /ng-app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run ng build --configuration reparaturnetzwerk-frontend -- --aot

# Servestage
FROM nginx:alpine
ARG name
COPY --from=angular /ng-app/dist/reparaturnetzwerk-frontend /usr/share/nginx/html
COPY webapp.nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80