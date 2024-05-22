# Use a base image suitable for your application
FROM node:21.7.3-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the local directory (containing application source code) 
# to the working directory in the container
COPY . .

# Install dependencies
RUN npm install

# Expose any necessary ports
EXPOSE 5173

# Command to run your application
CMD ["npm", "run", "host"]

