# How to Upload Certificate Images

Your portfolio now has a beautiful certificate viewer with lightbox functionality!

## 📁 Folder Structure

Create a folder named `certificates` in the same location as your `index.html` file:

```
portfolio/
├── index.html
├── styles.css
├── script.js
├── certificates/          ← Create this folder
│   ├── certificate1.jpg
│   ├── certificate2.jpg
│   ├── certificate3.jpg
│   └── certificate4.jpg
└── profile.jpg
```

## 📸 Adding Your Certificate Images

### Step 1: Prepare Your Certificates

1. **Scan or photograph** your certificates
2. **Save as JPG or PNG** format
3. **Recommended size**: 1200x900 pixels or higher
4. **File names**: Use simple names like:
   - `certificate1.jpg` - IT Degree
   - `certificate2.jpg` - Web Development
   - `certificate3.jpg` - Computer Maintenance
   - `certificate4.jpg` - Internship

### Step 2: Create the Certificates Folder

1. Open your portfolio folder
2. Create a new folder named `certificates`
3. Copy your certificate images into this folder

### Step 3: Name Your Files

Make sure your certificate images match these names:
- `certificate1.jpg` → Information Technology Degree
- `certificate2.jpg` → Web Development Certificate
- `certificate3.jpg` → Computer Maintenance Certificate
- `certificate4.jpg` → IT Internship Completion

## ✨ Features

Your certificate viewer includes:

✅ **Image Display**: Shows certificate images in cards
✅ **Lightbox Viewer**: Click any certificate to view full-size
✅ **Navigation**: Previous/Next buttons to browse certificates
✅ **Keyboard Controls**:
   - `ESC` - Close lightbox
   - `←` Left Arrow - Previous certificate
   - `→` Right Arrow - Next certificate
✅ **Fallback Icons**: If image not found, shows icon placeholder
✅ **Hover Effects**: Beautiful animations on hover
✅ **Mobile Responsive**: Works on all devices

## 🎨 Customizing Certificate Information

To update certificate details, edit `index.html`:

```html
<div class="certificate-card" data-certificate="1">
    <div class="certificate-image-container">
        <img src="certificates/certificate1.jpg" alt="Your Certificate Name">
        ...
    </div>
    <div class="certificate-content">
        <h3>Your Certificate Title</h3>
        <p class="certificate-issuer">Issuing Organization</p>
        <p class="certificate-date">2023</p>
        <p class="certificate-description">Your description here</p>
    </div>
</div>
```

## ➕ Adding More Certificates

To add a 5th certificate:

1. **Add the image**: Save as `certificates/certificate5.jpg`

2. **Copy this code** before the closing `</div>` of certificates-grid:

```html
<div class="certificate-card" data-certificate="5">
    <div class="certificate-image-container">
        <img src="certificates/certificate5.jpg" alt="New Certificate" class="certificate-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="certificate-placeholder">
            <i class="fas fa-trophy"></i>
        </div>
        <div class="certificate-overlay">
            <i class="fas fa-search-plus"></i>
            <span>Click to view</span>
        </div>
    </div>
    <div class="certificate-content">
        <h3>New Certificate Title</h3>
        <p class="certificate-issuer">Organization Name</p>
        <p class="certificate-date">2024</p>
        <p class="certificate-description">Certificate description here.</p>
    </div>
    <div class="certificate-badge">
        <i class="fas fa-trophy"></i>
    </div>
</div>
```

## 🖼️ Image Tips

**Best Practices:**
- Use high-quality scans (300 DPI minimum)
- Keep file sizes under 2MB for faster loading
- Use landscape orientation for certificates
- Ensure text is readable in the image
- Remove any sensitive information if needed

**Image Formats:**
- ✅ JPG/JPEG (recommended for photos)
- ✅ PNG (recommended for scanned documents)
- ❌ Avoid GIF or BMP

## 🔧 Troubleshooting

### Certificate image not showing?
1. Check file name matches exactly (case-sensitive)
2. Verify image is in `certificates/` folder
3. Try refreshing browser (Ctrl+F5)
4. Check browser console for errors (F12)

### Lightbox not opening?
1. Make sure JavaScript is enabled
2. Check `script.js` is loaded
3. Verify `data-certificate` attribute exists

### Image quality poor?
1. Use higher resolution images
2. Scan at 300 DPI or higher
3. Avoid compressing images too much

## 📱 Mobile View

Certificates automatically adjust for mobile devices:
- Cards stack vertically
- Images scale to fit screen
- Lightbox works with touch gestures
- Swipe left/right to navigate (if implemented)

## 🎯 Quick Checklist

- [ ] Create `certificates` folder
- [ ] Add certificate images (certificate1.jpg, certificate2.jpg, etc.)
- [ ] Update certificate titles and descriptions in HTML
- [ ] Test lightbox by clicking certificates
- [ ] Check on mobile device
- [ ] Verify all images load correctly

---

Need help? The placeholder icons will show if images aren't found, so your site still looks professional!
