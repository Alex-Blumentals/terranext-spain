# Quickstart - Deploy in 5 Minutes

## Prerequisites
- Vercel account (free): https://vercel.com/signup
- Git installed

## Step 1: Login to Vercel (30 seconds)

```bash
vercel login
```

Select your authentication method (GitHub, GitLab, Bitbucket, or email).

## Step 2: Deploy (2 minutes)

```bash
cd /home/alex31416/projects/terranext/presentation
vercel --prod --yes
```

Wait for deployment to complete. You'll get a URL like:
`https://zelestra-pizarroso-presentation-abc123.vercel.app`

## Step 3: Add Custom Domain (2 minutes)

### In Vercel Dashboard:
1. Go to https://vercel.com/dashboard
2. Click your project
3. Go to Settings → Domains
4. Click "Add"
5. Enter: `presentacion.terranext.co`
6. Click "Add"

Vercel will show you DNS instructions.

### In Your DNS Provider:
Add CNAME record:
```
Type: CNAME
Name: presentacion
Value: cname.vercel-dns.com
TTL: 3600
```

## Step 4: Wait & Verify (5-60 minutes)

DNS propagation takes time. Check status:

```bash
# Check DNS
dig presentacion.terranext.co

# Visit when ready
open https://presentacion.terranext.co
```

---

## Alternative: Deploy via Dashboard

### Option A: Import from Git

1. Push code to GitHub:
   ```bash
   git add presentation/
   git commit -m "Add Zelestra presentation"
   git push origin main
   ```

2. Go to Vercel Dashboard
3. Click "Add New..." → "Project"
4. Import your repository
5. Select `presentation` as root directory
6. Framework: Vite
7. Click "Deploy"

### Option B: Deploy from Local (Drag & Drop)

1. Build locally:
   ```bash
   cd presentation
   npm run build
   ```

2. Go to Vercel Dashboard
3. Click "Add New..." → "Project"
4. Drag the `dist/` folder to upload
5. Add custom domain as in Step 3 above

---

## Troubleshooting

### "Vercel CLI not found"
```bash
npm install -g vercel
vercel login
```

### "Build failed"
```bash
cd presentation
rm -rf node_modules package-lock.json
npm install
npm run build
vercel --prod
```

### "Domain not resolving"
Wait 30-60 minutes for DNS propagation, then try again.

### "Logo not showing"
Check `/assets/TerraNextHorizontal.svg` exists in build output.

---

## That's It!

Your presentation is now live at:
**https://presentacion.terranext.co**

Navigate with:
- Arrow keys (←/→)
- Space (next slide)
- Esc (overview)
- F (fullscreen)

To export PDF:
1. Add `?print-pdf` to URL
2. Press Ctrl/Cmd+P
3. Save as PDF

---

**Need help?** See [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) for detailed instructions.
