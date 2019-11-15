#!/bin/bash
npm run build; pm2 restart 32plus32; rm -rf _next; cp -R .next _next
