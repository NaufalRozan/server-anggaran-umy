# Build stage
FROM node:20.10-alpine AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./
RUN npm ci

# Copy the rest of the app's source code
COPY . .

# Run the build
RUN npm run build

# Production stage
FROM node:20.10-alpine AS production

WORKDIR /app

# Copy only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy build and Prisma files from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

# Expose the app port
EXPOSE 5000

# Generate Prisma client
RUN npx prisma generate

# Start the application
CMD ["sh", "-c", "npx prisma db push && npm start" ]
