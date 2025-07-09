#!/bin/sh

echo "Running Prisma migrate..."
npx prisma db push

echo "Starting application..."
npm start
