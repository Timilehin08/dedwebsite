FROM node:lts as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --silent
COPY . .
RUN yarn run build

FROM nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]