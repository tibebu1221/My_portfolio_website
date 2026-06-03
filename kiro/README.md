# Portfolio Website - Desalegn Tibebu Yayehe

A professional portfolio website showcasing skills, projects, and contact information.

## Features

- Responsive design (mobile, tablet, desktop)
- Contact form with email functionality
- Modern gradient design with animations
- Profile picture display
- Skills showcase
- Project portfolio
- Service offerings

## Setup Instructions

### Option 1: Using PHP (Recommended for Email Functionality)

1. **Install a local server** (choose one):
   - **XAMPP** (Windows/Mac/Linux): https://www.apachefriends.org/
   - **WAMP** (Windows): https://www.wampserver.com/
   - **MAMP** (Mac): https://www.mamp.info/

2. **Setup Steps**:
   - Install XAMPP (or your chosen server)
   - Copy all portfolio files to the `htdocs` folder:
     - Windows: `C:\xampp\htdocs\portfolio\`
     - Mac: `/Applications/XAMPP/htdocs/portfolio/`
   
3. **Start the server**:
   - Open XAMPP Control Panel
   - Start "Apache" module
   
4. **Access your website**:
   - Open browser and go to: `http://localhost/portfolio/`

5. **Configure Email** (Important):
   - Open `contact.php`
   - The email is already set to: `dessiet70@gmail.com`
   - For production, you may need to configure SMTP settings

### Option 2: Using PHP Built-in Server (Quick Test)

1. Open terminal/command prompt in the portfolio folder
2. Run: `php -S localhost:8000`
3. Open browser: `http://localhost:8000`

### Option 3: Static HTML Only (No Email)

- Simply open `index.html` in your browser
- Note: Contact form won't send emails without a server

## Adding Your Profile Picture

1. Save your photo as `profile.jpg` in the same folder as `index.html`
2. The image will automatically display in the circular frame
3. Recommended size: 500x500 pixels or larger (square format)

## Customization

### Change Your Email Address
Edit `contact.php` line 8:
```php
$to_email = "your-email@example.com";
```

### Change Colors
Edit `styles.css` at the top (`:root` section):
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
--accent-color: #ec4899;
```

### Update Content
Edit `index.html` to change:
- Your name and title
- About section text
- Skills
- Projects
- Services
- Contact information

## Email Configuration for Production

For a live website, you may need to:

1. **Use SMTP** (recommended):
   - Install PHPMailer: https://github.com/PHPMailer/PHPMailer
   - Configure with Gmail, SendGrid, or other SMTP service

2. **Configure Server Email**:
   - Ensure your hosting server has mail() function enabled
   - Some hosts require SPF/DKIM records

3. **Alternative Services**:
   - FormSpree: https://formspree.io/
   - EmailJS: https://www.emailjs.com/
   - Netlify Forms (if hosting on Netlify)

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── contact.php         # Email handling backend
├── profile.jpg         # Your profile picture (add this)
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Troubleshooting

### Contact Form Not Working?
1. Make sure you're using a PHP server (not just opening HTML file)
2. Check that Apache is running in XAMPP
3. Verify email address in `contact.php`
4. Check browser console for errors (F12)

### Profile Picture Not Showing?
1. Ensure file is named exactly `profile.jpg`
2. Check file is in the same folder as `index.html`
3. Try refreshing the page (Ctrl+F5)

### Styling Issues?
1. Clear browser cache (Ctrl+Shift+Delete)
2. Ensure `styles.css` is in the same folder
3. Check browser console for errors

## Contact

- **Email**: dessiet70@gmail.com
- **Phone**: 0937884156
- **Location**: Debre Tabor, Ethiopia

## License

© 2024 Desalegn Tibebu Yayehe. All rights reserved.
