#!/bin/bash
npm run build
pm2 restart next
rm -rf _next
cp -R .next _next
