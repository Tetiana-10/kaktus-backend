# Stage 1 Build
FROM node:alpine as node
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9
COPY . /app
ENV BACKEND_URI="http://localhost:3000/default"
RUN ng build --prod

# Stage 2 Run
FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/kaktus-fe /usr/share/nginx/html
EXPOSE 80
