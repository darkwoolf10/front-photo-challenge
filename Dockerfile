# pull official base image
#FROM node:14.5.0-alpine
FROM node:13.12.0-alpine

# set working directory
WORKDIR /front

# add `/front/node_modules/.bin` to $PATH
ENV PATH /front/node_modules/.bin:$PATH

# install front dependencies
RUN ls -la
COPY package.json ./
COPY package-lock.json ./
RUN ls -la

# add front
COPY . ./
RUN ls -la
RUN npm install --no-package-lock

# start front
CMD ["npm", "start"]
