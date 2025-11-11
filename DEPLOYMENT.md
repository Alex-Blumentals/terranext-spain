# Deployment Guide

## 📦 What's Been Done

✅ Project built and tested locally
✅ Code pushed to GitHub: https://github.com/Alex-Blumentals/terranext-spain
✅ All 17 slides implemented with TerraNext branding
✅ Responsive design with keyboard/touch navigation

## 🚀 Next Steps: Deploy to Vercel

### 1. Create Vercel Project

**URL:** https://vercel.com/new

1. Click **"Add New Project"**
2. Select **"Import Git Repository"**
3. Choose: `Alex-Blumentals/terranext-spain`
4. Click **"Import"**

### 2. Configure Build Settings

These should auto-detect, but verify:

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: out
Install Command: npm install
Node.js Version: 18.x or 20.x
```

**No environment variables needed** ✅

Click **"Deploy"**

### 3. Set Up Custom Domain

**Recommended subdomains:**
- `presentation.terranext.co` ⭐ (Best - clear and professional)
- `zelestra.terranext.co` (Client-specific)
- `pitch.terranext.co` (Purpose-specific)
- `dev.terranext.co` (Development/staging)

**In Vercel:**
1. Go to Project Settings → Domains
2. Click "Add Domain"
3. Enter your chosen subdomain
4. Vercel provides DNS configuration

**In Your DNS Provider:**
```
Type: CNAME
Name: presentation (or your choice)
Value: cname.vercel-dns.com
TTL: Auto
```

### 4. Keep spain.terranext.co Alive

✅ No conflict - that stays on Lovable
✅ New presentation will be on different subdomain
✅ Both can run simultaneously

## 📱 Testing Before Going Live

**Local preview:**
```bash
cd /home/alex31416/projects/terranext-spain
npm run dev
```

Visit: http://localhost:3000

**Production preview:**
After Vercel deploys, you'll get:
`https://terranext-spain.vercel.app`

Test this before adding custom domain!

## 🎨 Presentation Features

- 17 slides covering full Zelestra proposal
- Keyboard navigation: ← → Space
- Touch/swipe gestures for mobile
- Progress bar showing slide position
- TerraNext brand colors (#0D3B66, #79C048, #1767B3)
- Professional design following design brief
- Responsive: works on projector, laptop, tablet, phone

## 📊 Slide Overview

1. Cover - TerraNext + Zelestra branding
2. Journey - 29 → 3 → 1 selection process
3. **⭐ 4-Phase Roadmap** - €2-5M value story (KEY SLIDE)
4. Focus - Phase 1 structure
5. Challenge - Semi-arid climate = opportunity
6. Step 1.1 - Field work (Weeks 1-3)
7. **⭐ Week 3 Milestone** - GO/NO-GO validation
8. Step 1.2 - Analysis (Weeks 4-10)
9. Models - Intensive vs Standard comparison
10. Deliverables - 10 documents
11. Investment - €137k breakdown
12. **⭐ Payment Structure** - 30/30/40 milestones
13. Timeline - 10-week Gantt
14. **⭐ GO/NO-GO Tree** - 4 decision paths
15. Advantage - Why diagnose before design
16. Incentive - 20% credit within 30 days
17. Next Steps - 3-step process

⭐ = Critical slides with extra design attention

## 🔧 Future Updates

To update content:
1. Edit slide files in `components/slides/`
2. Commit and push to GitHub
3. Vercel auto-deploys from `master` branch

To update styling:
1. Edit `tailwind.config.ts` for colors
2. Edit `app/globals.css` for global styles
3. Push to GitHub → auto-deploy

## 📞 Support

**Project Location:** `/home/alex31416/projects/terranext-spain/`
**GitHub Repo:** https://github.com/Alex-Blumentals/terranext-spain
**Design Brief:** `/home/alex31416/projects/terranext/docs/technical/DESIGN-BRIEF-zelestra-presentation.md`

---

**Status:** Ready for Vercel deployment ✅
**Estimated Deployment Time:** 2-3 minutes
**DNS Propagation Time:** 5-60 minutes
