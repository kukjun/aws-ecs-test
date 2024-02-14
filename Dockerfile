FROM node:17.2.0 AS builder
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build


FROM node:17.2.0-alpine
WORKDIR /app


COPY --from=builder /app ./

EXPOSE 80


CMD npm run start:prod
