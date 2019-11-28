# Use a base image with Alpine Linux and Node v10.x.x
FROM node:13-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./

# building the code for production
RUN npm ci --only=production

# Bundle app source (see .dockerignore file specs)
COPY . .

# TODO: HEALTHCHECK?

# Define port 8080 as server output
ENV PORT 8080
EXPOSE 8080

# Default command as container start
CMD ["npm", "run", "start:prod"]

# Ensure that the programm will start as non root user
USER node
