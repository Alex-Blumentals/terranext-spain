# Deployment Guide - Zelestra Pizarroso-I Presentation

## Quick Deployment to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Import Git Repository: `terranext` repo
   - Select the `presentation` directory as root

3. **Configure Project**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Root Directory**: `presentation`

4. **Deploy**: Click "Deploy"

5. **Configure Custom Domain**:
   - Go to Project Settings → Domains
   - Add domain: `presentacion.terranext.co`
   - Configure DNS:
     - Type: CNAME
     - Name: `presentacio`
     - Value: `cname.vercel-dns.com`
     - TTL: Auto/3600

### Method 2: Vercel CLI

```bash
# 1. Login to Vercel (first time only)
vercel login

# 2. Deploy to production
cd presentation
vercel --prod

# 3. Configure custom domain (via dashboard or CLI)
vercel domains add presentacion.terranext.co
```

### Method 3: GitHub Integration

1. **Push to GitHub**:
   ```bash
   git add presentation/
   git commit -m "Add Zelestra Pizarroso-I presentation"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to Vercel Dashboard
   - Import from GitHub
   - Select repository
   - Configure as Method 1
   - Enable auto-deploy on push

## DNS Configuration

### At your DNS provider (e.g., Cloudflare, Namecheap)

```
Type: CNAME
Name: presentacion
Value: cname.vercel-dns.com
TTL: Auto or 3600
```

**Verification**: After DNS propagates (5-60 minutes), visit:
- https://presentacion.terranext.co

## Testing the Deployment

### 1. Test Build Locally

```bash
cd presentation
npm install
npm run build
npm run preview
```

Visit http://localhost:4173

### 2. Test Production Build

After deployment, verify:

- [ ] Main slide loads with TerraNext logo
- [ ] All 10 slides navigate correctly
- [ ] Brand colors applied (#0D3B66, #79C048, #1767B3)
- [ ] Responsive design works on mobile
- [ ] Arrow keys navigate slides
- [ ] Press 'Esc' for overview mode
- [ ] Print to PDF works (add ?print-pdf to URL)

## Post-Deployment Checklist

- [ ] URL accessible: https://presentacion.terranext.co
- [ ] SSL certificate active (HTTPS working)
- [ ] Logo displays correctly
- [ ] All slides content visible
- [ ] Navigation works (arrows, space, Esc)
- [ ] Mobile responsive
- [ ] Print/PDF export functional

## Troubleshooting

### Build fails

**Error**: Missing dependencies
**Solution**:
```bash
cd presentation
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Domain not resolving

**Issue**: DNS propagation delay
**Solution**: Wait 5-60 minutes, then check:
```bash
dig presentacion.terranext.co
# Should show CNAME to vercel-dns.com
```

### Logo not showing

**Issue**: Path incorrect in production
**Solution**: Verify in `index.html`:
```html
<img src="/assets/TerraNextHorizontal.svg" ...>
```
Path should be absolute with leading `/`.

### Styles not loading

**Issue**: Vite build configuration
**Solution**: Check `vite.config.js` has correct base path:
```js
export default defineConfig({
    base: '/',  // Should be '/' for custom domain
    ...
});
```

## Updating the Presentation

### Minor content changes

1. Edit `presentation/index.html`
2. Test locally: `npm run dev`
3. Deploy:
   ```bash
   vercel --prod
   ```
   Or push to GitHub (if auto-deploy enabled)

### Major redesign

1. Update `styles/custom-theme.css`
2. Test responsive: Resize browser or use DevTools
3. Test print: Add `?print-pdf` to URL
4. Deploy

## Performance Optimization

Current bundle sizes:
- **HTML**: 34 KB
- **CSS**: 64 KB
- **JS**: 113 KB
- **Total**: ~211 KB (good for presentation)

### Further optimization (if needed):

1. **Image optimization**:
   - Convert SVG logo to inline if <10KB
   - Use WebP for photos (if added)

2. **Code splitting**:
   - Not needed for single-page presentation

3. **CDN caching**:
   - Vercel handles automatically

## Backup & Recovery

### Create backup

```bash
cd presentation
tar -czf zelestra-presentation-backup-$(date +%Y%m%d).tar.gz .
```

### Restore from backup

```bash
tar -xzf zelestra-presentation-backup-YYYYMMDD.tar.gz
npm install
npm run build
vercel --prod
```

## Support Contacts

**Vercel Support**: https://vercel.com/support
**TerraNext Technical**: alex@terranext.co

---

## Deployment Status

**Status**: ⚠️ Ready for deployment (requires Vercel login)

**Next Steps**:
1. Login to Vercel: `vercel login`
2. Deploy: `cd presentation && vercel --prod --yes`
3. Configure domain: Add `presentacion.terranext.co` in Vercel dashboard
4. Update DNS: Add CNAME record

**Estimated Time**: 15-30 minutes (including DNS propagation)
