# Taimour Taj Shami — Portfolio

A cinematic, dark-themed portfolio website for an ML Engineer & AI Specialist. Built with vanilla HTML, CSS, and JavaScript — zero dependencies, instant load times.

![Portfolio Preview](assets/images/og-preview.png)

## ✨ Features

- **Neural Network Canvas** — Animated particle mesh background with mouse-reactive nodes
- **Custom Cursor** — Smooth trailing cursor with magnetic hover effects
- **Scroll Animations** — Staggered reveal-on-scroll with intersection observers
- **Responsive Design** — Fully responsive from 4K to mobile with drawer navigation
- **Film Grain Overlay** — Subtle noise texture for cinematic depth
- **Loading Sequence** — Character-by-character name reveal with progress bar
- **Zero Dependencies** — Pure HTML/CSS/JS, no build tools needed

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/taimour-portfolio.git

# Open locally
cd taimour-portfolio
open index.html    # macOS
# or
start index.html   # Windows
```

## 📁 Project Structure

```
taimour-portfolio/
├── index.html              # Main HTML
├── assets/
│   ├── css/
│   │   └── style.css       # All styles
│   ├── js/
│   │   ├── main.js         # Interactions & animations
│   │   └── neural-canvas.js # Particle background
│   └── images/
│       └── og-preview.png  # Social share image
├── CNAME                   # Custom domain (optional)
├── robots.txt              # SEO
├── sitemap.xml             # SEO
├── 404.html                # Custom 404 page
└── README.md
```

## 🌐 Deployment

### GitHub Pages (Free)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch** → `main` → `/ (root)`
4. Your site will be live at `https://your-username.github.io/taimour-portfolio`

### Custom Domain (Optional)

1. Buy a domain (e.g. from Namecheap, Google Domains)
2. Add a `CNAME` file with your domain
3. In your DNS provider, add:
   - `A` record → `185.199.108.153`
   - `A` record → `185.199.109.153`
   - `A` record → `185.199.110.153`
   - `A` record → `185.199.111.153`
   - `CNAME` record → `www` → `your-username.github.io`
4. Enable HTTPS in GitHub Pages settings

### Netlify / Vercel (Alternative)

1. Connect your GitHub repo
2. No build command needed — it's static HTML
3. Deploy automatically on every push

## 🎨 Customization

### Update Your Info
- Replace `YOUR-GITHUB` and `YOUR-LINKEDIN` in `index.html`
- Update email, phone number, and descriptions as needed
- Add your own OG preview image at `assets/images/og-preview.png`

### Color Palette
Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --cyan:   #00f0c0;   /* Primary accent */
  --orange: #ff6b35;   /* Secondary */
  --violet: #b18cff;   /* Tertiary */
  --lime:   #a8ff60;   /* Quaternary */
}
```

## 📄 License

MIT — free for personal and commercial use.
