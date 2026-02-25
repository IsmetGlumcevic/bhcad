# bhcad

Next.js 16 aplikacija (App Router) za bhcad web sajt.

## Zahtjevi

- Node.js 20+
- npm (koristi se `package-lock.json`)
- Docker i Docker Compose (ako deploy radiš kroz kontejnere)

## Lokalni razvoj

1. Instaliraj zavisnosti:
```bash
npm ci
```
2. Pokreni development server:
```bash
npm run dev
```
3. Otvori `http://localhost:3000`.

## Deployment (preporučeno: Docker)

Ovaj repo je podešen za produkcijski deploy preko `Dockerfile` + `compose.yaml` (Next standalone output).

### 1) Priprema servera

1. Instaliraj Docker i Docker Compose plugin.
2. Otvori port koji koristi aplikacija (default `3000`) ili postavi reverse proxy (Nginx/Caddy) prema tom portu.
3. Na server kopiraj projekat (git clone ili CI artifact).

### 2) Build i pokretanje

Iz root foldera projekta:

```bash
docker compose up --build -d
```

Provjera statusa:

```bash
docker compose ps
docker compose logs -f web
```

Stop/restart:

```bash
docker compose down
docker compose restart web
```

### 3) Šta je već riješeno u Docker setupu

- Multi-stage build za manji produkcijski image.
- `output: "standalone"` u Next konfiguraciji.
- `sharp` podrška za `next/image`.
- Runtime writeable cache putanja za optimizovane slike (`.next/cache/images`).
- Healthcheck u kontejneru.

### 4) Environment varijable (produkcija)

`compose.yaml` već postavlja:

- `NODE_ENV=production`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`
- `NEXT_TELEMETRY_DISABLED=1`
- `NEXT_SHARP_PATH=/app/node_modules/sharp`

Ako koristiš reverse proxy, najčešće aplikacija ostaje na internom `3000`, a domen ide kroz proxy.

### 5) Primjer Nginx reverse proxy konfiguracije

Primjer fajla `/etc/nginx/sites-available/bhcad.conf`:

```nginx
upstream bhcad_app {
  server 127.0.0.1:3000;
  keepalive 64;
}

server {
  listen 80;
  listen [::]:80;
  server_name example.com www.example.com;

  client_max_body_size 20m;

  location / {
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_read_timeout 60s;
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_pass http://bhcad_app;
  }
}
```

Aktivacija (Ubuntu/Debian):

```bash
sudo ln -s /etc/nginx/sites-available/bhcad.conf /etc/nginx/sites-enabled/bhcad.conf
sudo nginx -t
sudo systemctl reload nginx
```

Ako koristiš HTTPS, dodaj TLS certifikat (npr. Let's Encrypt) i prebaci `listen` na `443 ssl http2`.

## Deployment bez Dockera (alternativa)

Ako ne koristiš kontejnere:

1. Instaliraj zavisnosti:
```bash
npm ci
```
2. Napravi build:
```bash
npm run build
```
3. Pokreni produkciju:
```bash
npm run start
```
4. Postavi proces menadžer (npr. `pm2`) i reverse proxy.

## Bitne napomene

- Aplikacija koristi `next/font` (Google Fonts). Server/CI tokom `npm run build` mora imati izlaz na internet prema `fonts.googleapis.com` i `fonts.gstatic.com`.
- Aplikacija koristi `next/image`, pa runtime mora imati write pristup za `.next/cache`.

## Korisne komande

- Lint:
```bash
npm run lint
```
- Produkcijski build (lokalna provjera):
```bash
npm run build
```
