# Stage 1: Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
RUN npm install --production  # Install only production dependencies
CMD ["npm", "run", "start:prod"]