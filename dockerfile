FROM nginx:1.16.0-alpine
WORKDIR /app

# 请保证dist目录的路径是正确的
COPY /dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3007
ENTRYPOINT nginx -g "daemon off;"