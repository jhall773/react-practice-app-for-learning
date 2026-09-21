# Use an official Node.js runtime as the base image
# This pulls the official Node 18 image from Docker Hub.
# It includes Node, npm, and Linux.
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3001

# Command to start the server
CMD ["node", "index.js"]
