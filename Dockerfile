FROM node:17-alpine AS build
ENV NODE_ENV=production
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install 2> >(grep -v warning 1>&2)
COPY . .
RUN yarn build

FROM nginx:1.21.6-alpine AS MAIN
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80/tcp
CMD [ "nginx", "-g", "daemon off;" ]
