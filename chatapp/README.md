# Chat App

## Setup

In the root directory, initialize the database:
```bash
docker compose up -d
```

For the backend, make sure you have Java 17 and Maven, then run:
```bash
mvn install
mvn spring-boot:run
```

For the frontend, you can use NVM to install the correct Node version:
```bash
nvm install
nvm use
npm i -g pnpm@8
pnpm i
pnpm run dev
```
