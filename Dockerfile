FROM node:lts as build
WORKDIR /app
COPY package*.json ./
COPY .env.production ./
RUN npm install  --force
COPY . .
RUN npm run build

# Production stage
FROM node:lts
WORKDIR /app
COPY --from=build /app ./
# copy the .env.local file
RUN npm install -g serve
EXPOSE 3000
CMD ["npm", "start"]