#!/usr/bin/env bash
set -euo pipefail

cd /root/autofract-site

echo "[autofract] pulling latest main..."
git fetch --all
git reset --hard origin/main

BUILD_ID=$(date +%Y%m%d%H%M%S)
echo "[autofract] building image autofract-site:latest (build=$BUILD_ID)..."
docker build -t autofract-site:latest --build-arg BUILD_ID="$BUILD_ID" .

echo "[autofract] restarting container..."
systemctl restart autofract-site.service

echo "[autofract] reloading caddy..."
docker exec caddy-proxy caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile || true

echo "[autofract] deploy complete."
