# Autofract site — Deploy Runbook (LEGACY)

> **Current deploy path (2026-08):** push to `main` → Coolify on OVH auto-builds the Dockerfile and deploys. The apps-server Caddy block for `autofract.com` is a thin reverse proxy to OVH. Everything below documents the old apps-server systemd/webhook setup and is kept for reference only.

## BLOCKER — PathCore migration (decide before first deploy)

`autofract.com` currently reverse-proxies to `pathcore-lb:80` serving the PathCore/MindView product. **This new studio site replaces that.** Decide first:

- **Option A (recommended):** Move PathCore to `pathcore.autofract.com` — add a Caddy block for the new subdomain, remove PathCore from `autofract.com` root
- **Option B:** Decommission PathCore — remove it from Caddyfile entirely
- Verify with: `docker exec caddy-proxy curl -sI http://pathcore-lb:80` after reconfig

Do NOT proceed with steps below until this is resolved.

## First-time setup (apps server)

1. **Clone repo on server:**
   ```bash
   ssh apps
   cd /root
   git clone git@github.com:20012001amiramir/autofract-site.git
   cd autofract-site
   ```

2. **Copy systemd units:**
   ```bash
   cp deploy/autofract-site.service /etc/systemd/system/
   cp deploy/autofract-webhook.service /etc/systemd/system/
   systemctl daemon-reload
   ```

3. **Create webhook secret and inject into hooks.json:**
   ```bash
   openssl rand -hex 32 > /root/.autofract-webhook-secret
   chmod 600 /root/.autofract-webhook-secret
   sed -i "s/REPLACE_WITH_GITHUB_WEBHOOK_SECRET/$(cat /root/.autofract-webhook-secret)/" deploy/hooks.json
   ```

4. **Update Caddy configuration:**
   - Open `/etc/caddy/Caddyfile` (or bind-mounted path used by `caddy-proxy`)
   - Remove the existing `autofract.com { ... reverse_proxy pathcore-lb:80 ... }` block
   - Paste content of `deploy/caddy-autofract.txt`
   - Reload: `docker exec caddy-proxy caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile`

5. **First deploy:**
   ```bash
   chmod +x deploy/deploy.sh
   ./deploy/deploy.sh
   ```

6. **Enable systemd units:**
   ```bash
   systemctl enable --now autofract-site.service
   systemctl enable --now autofract-webhook.service
   ```

7. **Connect GitHub webhook:**
   - GitHub repo Settings → Webhooks → Add webhook
   - URL: `https://autofract.com:9010/hooks/autofract-deploy` (or route via Caddy)
   - Secret: `cat /root/.autofract-webhook-secret`
   - Event: push to `main`

## Routine deploys

Push to `main`. Webhook triggers `deploy.sh`.

### Rollback

```bash
cd /root/autofract-site
git log --oneline | head
git reset --hard <previous-sha>
./deploy/deploy.sh
```

## Verify

```bash
curl -I https://autofract.com           # 200
curl -I https://autofract.com/de        # 200
curl -I https://autofract.com/ru        # 200
curl -I https://autofract.com/fr        # 200
curl -I https://autofract.com/sitemap.xml  # 200, application/xml
```

## Health checks

- `docker logs autofract-site -f` — container logs
- `systemctl status autofract-site` — service status
- `docker exec caddy-proxy caddy validate --config /etc/caddy/Caddyfile` — Caddy config check

## Known gotchas

- **Caddy network:** Container MUST be on `caddy` docker network — else `reverse_proxy` fails with `dial tcp: lookup autofract-site on 127.0.0.11: no such host`. The systemd unit uses `--network caddy` explicitly.
