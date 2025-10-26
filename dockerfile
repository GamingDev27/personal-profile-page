# Use an official Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . ./

# Expose the port the app runs on (default Vite uses 5173)
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev", "--", "--host"]