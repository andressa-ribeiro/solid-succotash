FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci --no-audit --no-fund || npm install

COPY . .
ENV CI=false
RUN npm run build

FROM node:20-alpine
WORKDIR /app

RUN npm i -g serve

COPY --from=build /app/build ./build

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- http://localhost:3000 || exit 1

CMD ["serve", "-s", "build", "-l", "3000"]
