#!/bin/sh

set -e

echo "Running Prisma migrations..."
npx prisma db push

echo "Starting the app..."
npm run dev