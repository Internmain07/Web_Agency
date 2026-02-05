# 🎨 SEO Image Assets Guide
## I-Intern Web Design Agency

This guide helps you create the required images for optimal SEO and social media sharing.

---

## 📸 Required Images

### 1. Open Graph Image (OG Image)
**File**: `public/og-image.jpg`

**Specifications**:
- **Dimensions**: 1200 x 630 pixels
- **Aspect Ratio**: 1.91:1
- **File Format**: JPG or PNG
- **Max Size**: Under 300 KB (ideally under 100 KB)
- **Color Space**: RGB

**Used For**:
- Facebook posts
- LinkedIn shares
- WhatsApp previews
- Slack unfurls
- Other Open Graph platforms

**Content Recommendations**:
```
┌─────────────────────────────────────────┐
│                                         │
│         I-INTERN                        │
│     Web Design Agency                   │
│                                         │
│  High-end design shouldn't require     │
│      a high-end headache                │
│                                         │
│  [Your Logo Here]                       │
│                                         │
│  Professional Web Design & Development  │
│                                         │
└─────────────────────────────────────────┘
```

**Design Tips**:
- Use brand colors (cyan, sky blue, teal)
- Large, readable text (minimum 40px font size)
- Include logo prominently
- Keep important content in center (safe zone)
- Avoid text near edges (may be cropped on some platforms)
- Use high contrast for readability
- Test on mobile (image will be smaller)

**Tools to Create**:
- Canva (free templates available)
- Figma (design tool)
- Adobe Photoshop
- Online OG Image generators

**Test Your Image**:
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

### 2. Twitter Card Image
**File**: `public/twitter-image.jpg`

**Specifications**:
- **Dimensions**: 1200 x 600 pixels (or 1200 x 675 for 16:9)
- **Aspect Ratio**: 2:1 or 16:9
- **File Format**: JPG or PNG
- **Max Size**: Under 5 MB (ideally under 300 KB)
- **Color Space**: RGB

**Used For**:
- Twitter posts
- Twitter card previews
- X platform shares

**Content Recommendations**:
```
┌──────────────────────────────────────────────┐
│                                              │
│    [Logo] I-INTERN                          │
│           Web Design Agency                 │
│                                              │
│    Custom Websites | React Development     │
│    Full-Stack Solutions | SEO Optimized    │
│                                              │
│    i-intern.com | contact@i-intern.com     │
│                                              │
└──────────────────────────────────────────────┘
```

**Design Tips**:
- Similar to OG image but slightly different ratio
- Twitter crops to 2:1, so design accordingly
- Mobile preview is 1:1 (center content is key)
- Use Twitter brand colors if desired
- Clear call-to-action or value proposition
- Professional, clean design

**Test Your Image**:
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

### 3. Logo
**File**: `public/logo.png`

**Specifications**:
- **Dimensions**: 500 x 500 pixels (or larger for scalability)
- **Aspect Ratio**: 1:1 (square)
- **File Format**: PNG with transparency
- **Max Size**: Under 100 KB
- **Color Space**: RGB

**Used For**:
- Schema.org structured data
- Website header/footer
- Favicon generation
- Business listings
- Social media profiles

**Design Requirements**:
- Transparent background
- Clean, recognizable design
- Works in both light and dark themes
- Scalable (vector-based ideally)
- Brand colors incorporated
- Simple enough to be recognizable at small sizes

**Logo Variations Recommended**:
1. **Full Logo**: `logo.png` - Complete with text
2. **Icon Only**: `logo-icon.png` - Just the mark/symbol
3. **Light Version**: `logo-light.png` - For dark backgrounds
4. **Dark Version**: `logo-dark.png` - For light backgrounds

**Tools to Create**:
- Adobe Illustrator (vector)
- Figma (vector)
- Canva (templates)
- LogoMakr (online)

---

### 4. Favicon
**File**: `public/favicon.ico`

**Specifications**:
- **Dimensions**: Multiple sizes in one file:
  - 16 x 16 pixels
  - 32 x 32 pixels
  - 48 x 48 pixels
  - 64 x 64 pixels
- **File Format**: ICO or PNG
- **Max Size**: Under 50 KB
- **Color Space**: RGB

**Used For**:
- Browser tab icon
- Bookmark icon
- Browser history
- Mobile home screen icon

**Additional Favicon Files (Recommended)**:
```html
<!-- Add to index.html <head> -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

**Design Tips**:
- Use simplified logo/icon
- High contrast colors
- Recognizable at tiny sizes
- Avoid fine details
- Test at 16x16 to ensure visibility

**Tools to Create**:
- [Favicon.io](https://favicon.io/) - Free generator
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Complete package
- Adobe Photoshop
- GIMP (free)

---

## 🎨 Brand Color Palette

Based on your website's design:

### Primary Colors
- **Cyan**: `#22d3ee` (rgb(34, 211, 238))
- **Sky Blue**: `#0ea5e9` (rgb(14, 165, 233))
- **Teal**: `#14b8a6` (rgb(20, 184, 166))

### Secondary Colors
- **Blue**: `#3b82f6` (rgb(59, 130, 246))
- **Dark Blue**: `#1e40af` (rgb(30, 64, 175))

### Neutral Colors
- **Black**: `#000000`
- **White**: `#ffffff`
- **Slate 900**: `#0f172a` (dark text)
- **Slate 100**: `#f1f5f9` (light backgrounds)

---

## 📐 Quick Sizing Guide

### Image Dimensions Summary
| Image Type | Dimensions | Format | Usage |
|------------|-----------|---------|-------|
| OG Image | 1200×630 | JPG/PNG | Social sharing |
| Twitter Card | 1200×600 | JPG/PNG | Twitter |
| Logo | 500×500 | PNG | Schema & general |
| Favicon | 32×32 | ICO/PNG | Browser tab |
| Apple Touch | 180×180 | PNG | iOS home screen |

---

## 🖼️ Image Optimization

### Before Upload
1. **Compress Images**:
   - Use [TinyPNG](https://tinypng.com/)
   - Use [ImageOptim](https://imageoptim.com/)
   - Use [Squoosh](https://squoosh.app/)

2. **Check File Size**:
   - OG Image: < 300 KB (ideally < 100 KB)
   - Twitter Card: < 300 KB
   - Logo: < 100 KB
   - Favicon: < 50 KB

3. **Verify Dimensions**:
   - Use exact dimensions specified
   - Don't rely on CSS resizing
   - Ensure images are crisp and clear

### Image Quality Checklist
- [ ] Sharp and clear (not blurry)
- [ ] Correct dimensions
- [ ] Optimized file size
- [ ] Proper color space (RGB)
- [ ] Compressed without quality loss
- [ ] Transparent backgrounds where needed
- [ ] Text is readable
- [ ] Logo is visible
- [ ] Works on light and dark backgrounds

---

## 🎯 Where to Place Images

### In Your Project
```
public/
├── og-image.jpg          ← Open Graph image
├── twitter-image.jpg     ← Twitter card image
├── logo.png              ← Main logo
├── logo-icon.png         ← Icon only (optional)
├── favicon.ico           ← Browser icon
├── favicon-16x16.png     ← Small favicon
├── favicon-32x32.png     ← Standard favicon
├── apple-touch-icon.png  ← iOS icon
└── site.webmanifest      ← PWA manifest (optional)
```

### In HTML (Already configured in index.html)
The meta tags in your `index.html` already reference:
- `/og-image.jpg` for Open Graph
- `/twitter-image.jpg` for Twitter Cards
- `/logo.png` for Schema.org

Just place your images in the `public/` folder with these exact names!

---

## 🚀 Quick Start Checklist

Ready to create your images? Follow this order:

### Step 1: Design Logo (30-60 minutes)
- [ ] Create main logo (500×500 PNG)
- [ ] Ensure transparent background
- [ ] Export in multiple formats
- [ ] Compress file

### Step 2: Create OG Image (20-30 minutes)
- [ ] Use Canva or Figma template
- [ ] Add logo, brand name, tagline
- [ ] Use brand colors
- [ ] Export as 1200×630 JPG
- [ ] Compress file

### Step 3: Create Twitter Image (10-15 minutes)
- [ ] Adapt OG image design
- [ ] Resize to 1200×600
- [ ] Export as JPG
- [ ] Compress file

### Step 4: Generate Favicon (10 minutes)
- [ ] Use logo as base
- [ ] Simplify if needed
- [ ] Use favicon generator
- [ ] Download all sizes
- [ ] Test at 16×16

### Step 5: Upload & Test (15 minutes)
- [ ] Place all images in `public/` folder
- [ ] Rebuild/restart dev server
- [ ] Test OG image with Facebook Debugger
- [ ] Test Twitter card with Twitter Validator
- [ ] Check favicon in browser
- [ ] Verify all images load correctly

**Total Time**: 85-130 minutes (1.5-2 hours)

---

## 🎨 Template Resources

### Free Design Tools
1. **Canva** - [canva.com](https://www.canva.com/)
   - Templates for OG images and social media
   - Free tier available
   - Easy drag-and-drop interface

2. **Figma** - [figma.com](https://www.figma.com/)
   - Professional design tool
   - Free for individuals
   - Great for logos and precise work

3. **Photopea** - [photopea.com](https://www.photopea.com/)
   - Free online Photoshop alternative
   - Works in browser
   - Supports PSD files

### OG Image Templates
- [Canva OG Templates](https://www.canva.com/templates/?query=open+graph)
- [Figma Community](https://www.figma.com/community) - Search "OG image"

### Logo Makers (if needed)
- [LogoMakr](https://logomakr.com/) - Free, simple
- [Looka](https://looka.com/) - AI-powered
- [Hatchful by Shopify](https://www.shopify.com/tools/logo-maker) - Free

### Favicon Generators
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Favicon Generator](https://www.favicon-generator.org/)

---

## 💡 Pro Tips

1. **Consistency**: Use same brand colors, fonts, and style across all images
2. **Simplicity**: Less is more - avoid cluttered designs
3. **Testing**: Always test on actual platforms before finalizing
4. **Versions**: Create multiple versions and A/B test which performs better
5. **Updates**: Update images seasonally or for special campaigns
6. **Backup**: Keep original design files (PSD, AI, Figma) for future edits
7. **Accessibility**: Ensure good contrast ratios for readability
8. **Mobile**: Always check how images look on mobile devices

---

## ❓ FAQ

### Q: Can I use the same image for OG and Twitter?
**A**: You can, but different dimensions are optimal for each platform. Twitter crops to 2:1 while OG is 1.91:1. Best practice is to create separate, optimized versions.

### Q: Do I need all these image sizes?
**A**: For basic SEO, you need: OG image, logo, and favicon. Twitter image and additional favicon sizes are nice-to-have but improve user experience.

### Q: What if I don't have a logo yet?
**A**: Use a text-based logo initially. Your brand name in a nice font with brand colors can work as a placeholder while you design a proper logo.

### Q: Can I change these images later?
**A**: Yes! You can update them anytime. Use Facebook Debugger to clear the cache after updating OG images.

### Q: Should images be JPG or PNG?
**A**: 
- **JPG**: OG image, Twitter card (better compression for photos)
- **PNG**: Logo, favicon (supports transparency)

---

## 📞 Need Help?

If you need professional design assistance:
- **Email**: contact@i-intern.com
- **Services**: We offer logo design and branding services
- **Quick Fix**: Use Canva templates as a starting point

---

## ✅ Final Checklist

Before considering your image assets complete:

- [ ] Logo created and exported (500×500 PNG)
- [ ] OG image created (1200×630 JPG)
- [ ] Twitter image created (1200×600 JPG)
- [ ] Favicon generated (32×32 ICO)
- [ ] All images compressed and optimized
- [ ] All images placed in `public/` folder
- [ ] Images tested on actual platforms
- [ ] All images load correctly in browser
- [ ] Meta tags in HTML reference correct filenames
- [ ] Original design files saved for future edits

---

**Ready to create your SEO-optimized images!** 🎨

---

**Document Version**: 1.0  
**Created**: February 4, 2026  
**Last Updated**: February 4, 2026
