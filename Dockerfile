FROM node:14.5.0-stretch
ARG NODE_DNV
WORKDIR /app
COPY . . 
RUN yarn install && yarn build
CMD ["sh","-c","yarn start"]
