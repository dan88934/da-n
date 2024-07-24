# Dockerfile

# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY front-end/dan/package.json front-end/dan/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY front-end/dan/ .

# Build the Next.js application for production
RUN npm run build

# Expose the application port 
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
