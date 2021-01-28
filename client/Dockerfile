# Stage 1 Build
FROM node:alpine as node
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9
COPY . /app
ARG BACKEND_URI
ENV BACKEND_URI $BACKEND_URI
RUN ng build --prod

# Stage 2 Run
FROM nginx:alpine
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/kaktus-fe /usr/share/nginx/html
EXPOSE 80
