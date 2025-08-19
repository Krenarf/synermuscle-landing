# SynerMuscle Waitlist Landing Page

A modern, responsive single-page waitlist landing site for the SynerMuscle fitness app. Built with vanilla HTML, CSS, and JavaScript for optimal performance and easy customization.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Fade-up animations and interactive hover effects
- **Waitlist Form**: Email collection with validation and feedback
- **Performance Optimized**: Lightweight and fast loading
- **Accessibility**: Proper focus states and semantic HTML

## 📁 File Structure

```
/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Setup & Usage

### Quick Start
1. Download or clone the files to your local machine
2. Open `index.html` in your web browser
3. The page is ready to use!

### Local Development
For development with live reload, you can use any of these methods:

**Using Python (if installed):**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (if installed):**
```bash
npx serve .
```

**Using Live Server (VS Code extension):**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

## 🎨 Customization

### Colors & Branding
The main colors are defined in CSS variables. You can easily change them in `styles.css`:

```css
/* Primary brand colors */
--primary-blue: #2563eb;
--primary-green: #10b981;
--gradient-blue: #3b82f6;
--gradient-green: #10b981;
```

### Logo
Replace the text logo in `index.html`:
```html
<div class="logo">SynerMuscle</div>
```

Or add an image logo:
```html
<div class="logo">
    <img src="path/to/your/logo.png" alt="SynerMuscle" />
</div>
```

### Hero Image
Replace the placeholder with your actual 3D character image:
```html
<div class="hero-image">
    <img src="path/to/your/3d-character.png" alt="SynerMuscle Character" />
</div>
```

### Content
Update the text content in `index.html` to match your brand voice and messaging.

## 📧 Waitlist Form Integration

### Current Implementation
The form currently saves emails to localStorage and logs to console. This is perfect for testing and development.

### Production Integration
To connect to a real backend service, update the `submitEmail` function in `script.js`:

#### Mailchimp Integration
```javascript
async function submitEmail(email) {
    const response = await fetch('https://your-mailchimp-endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });
    if (!response.ok) throw new Error('Failed to submit');
}
```

#### Supabase Integration
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('your-url', 'your-anon-key')

async function submitEmail(email) {
    const { error } = await supabase
        .from('waitlist')
        .insert([{ email, created_at: new Date() }])
    
    if (error) throw error;
}
```

#### Custom Backend
```javascript
async function submitEmail(email) {
    const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });
    if (!response.ok) throw new Error('Failed to submit');
}
```

## 🌐 Deployment

### Static Hosting
This landing page works perfectly with any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Push to a repository
- **AWS S3**: Upload files to a bucket
- **Firebase Hosting**: Use Firebase CLI

### Custom Domain
Add your custom domain in your hosting provider's settings.

### SSL/HTTPS
Most modern hosting providers include SSL certificates automatically.

## 📱 Responsive Design

The page is fully responsive with breakpoints at:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## 🎭 Animations

### Scroll Animations
Elements with `data-aos="fade-up"` will animate when they come into view.

### Hover Effects
- Feature cards lift and scale on hover
- CTA button has hover and active states
- Smooth transitions throughout

### Performance
- Scroll events are throttled for optimal performance
- CSS animations use GPU acceleration
- Minimal JavaScript for fast loading

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Analytics & Tracking

To add analytics, include your tracking code in the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Minify CSS/JS**: Use build tools to minify for production
3. **CDN**: Serve assets from a CDN for faster global loading
4. **Caching**: Set appropriate cache headers for static assets

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the landing page.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please reach out through your preferred communication channel.

---

**Built with ❤️ for SynerMuscle**
