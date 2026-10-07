# 🚀 Getting Started with Pandora's Homes

Welcome to Pandora's Homes! This guide will help you get the application up and running in minutes.

## ⚡ Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
cd C:\Users\HP\Downloads\Pandora-home
npm install
```

### Step 2: Set Up Environment
```bash
# Copy environment template
cp .env.example .env.local

# Edit the file with your API URL (optional, defaults are provided)
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Visit `http://localhost:3000` in your browser.

## 📁 What's Included

✅ **Complete Homepage** with hero, stats, and featured rooms
✅ **Room Browsing** with search and filters
✅ **Room Details Page** with full information
✅ **Booking System** with date selection and payment options
✅ **User Authentication** pages (login/signup)
✅ **About & Contact** pages
✅ **Responsive Design** for all devices
✅ **Modern UI Components** with Radix UI
✅ **API Routes** ready for backend integration
✅ **Custom Hooks** for data fetching
✅ **Type Safety** with TypeScript

## 🎯 First Steps

### 1. Explore the Homepage
- Navigate to `http://localhost:3000`
- See the beautiful hero section
- Check featured rooms
- Browse statistics

### 2. Browse Rooms
- Click "Browse Rooms" button
- See all available rooms
- Use filters to narrow down options
- Click room card for details

### 3. Try Booking Flow
- Click on a room detail
- See full information and amenities
- Click "Book This Room"
- Fill in check-in and check-out dates
- See price calculation
- Enter guest information
- Select payment method

### 4. Visit Other Pages
- **About** (`/about`) - Learn about Pandora's Homes
- **Contact** (`/contact`) - Send a message
- **Login** (`/login`) - See authentication page

## 🔧 Customize the App

### Change Branding
Edit `components/layout/header.tsx`:
```typescript
// Change logo text and color
<span className="font-bold text-lg">YOUR BRAND NAME</span>
```

### Update Room Data
Edit `app/api/rooms/route.ts` - Replace mock data with real rooms

### Modify Homepage
Edit these files:
- `components/sections/hero-section.tsx` - Hero content
- `components/sections/featured-rooms.tsx` - Featured rooms
- `app/page.tsx` - Add/remove sections

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --primary: 0 0% 9.0%; /* Change primary color */
  --accent: 45 93% 47%; /* Change accent color */
}
```

## 📱 Testing on Mobile

### Using Browser DevTools
1. Open DevTools (F12)
2. Click mobile device icon
3. Select device (iPhone, Android, etc.)
4. Test responsive behavior

### On Actual Device
```bash
# Get your machine's IP
# Find IPv4 address from network settings

# Access from mobile
# Open: http://YOUR_IP:3000
```

## 🔌 Backend Integration

### Connect Your Backend

1. **Update API URL** in `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://your-api-domain.com/api
```

2. **Implement Backend APIs**:
   - `POST /api/auth/login` - User authentication
   - `GET /api/rooms` - Fetch rooms
   - `POST /api/bookings` - Create booking
   - (See README.md for full API list)

3. **Test API Calls**:
```typescript
// In any component
import api from "@/lib/api";

// Fetch rooms
const rooms = await api.getRooms();

// Create booking
const booking = await api.createBooking({
  roomId: "1",
  checkInDate: "2024-01-15",
  checkOutDate: "2024-01-20"
});
```

## 📦 Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start

# The app will be optimized and ready for deployment
```

## 🌐 Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Set environment variables
4. Deploy automatically

### Traditional Hosting
```bash
# Build
npm run build

# Upload output folder to server
# Set environment variables
# Run: npm run start
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
```

### API Errors
1. Check `.env.local` is configured correctly
2. Verify backend is running
3. Check browser console for error messages
4. Use Network tab to debug API calls

### Styling Not Applied
```bash
# Rebuild Tailwind CSS
npm run dev

# Clear browser cache (Ctrl+Shift+Del)
```

## 📚 Learn More

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Project Files
- `README.md` - Full documentation
- `FEATURES.md` - Detailed feature list
- `package.json` - Dependencies and scripts

## 🎓 Next Steps

1. **Customize**: Update branding and colors
2. **Backend**: Connect your backend APIs
3. **Database**: Set up MongoDB or your database
4. **Testing**: Test all features thoroughly
5. **Deployment**: Deploy to production

## 💡 Pro Tips

✅ Use browser DevTools Network tab to debug API calls
✅ Use React DevTools to inspect component state
✅ Check console for helpful error messages
✅ Use `console.log()` for debugging
✅ Test with different screen sizes
✅ Test with keyboard navigation only (accessibility)

## 🆘 Need Help?

### Check These Files First
- `README.md` - Complete documentation
- `FEATURES.md` - Feature descriptions
- `app/` folder - Page examples
- `components/` folder - Component examples

### Common Issues
1. **Routes not working?** → Check filename format in `app/` folder
2. **Styles not loading?** → Clear cache and rebuild
3. **API errors?** → Check `.env.local` configuration
4. **Components not found?** → Check import paths start with `@/`

## 📞 Contact

For support or questions:
- Email: info@pandorashomes.com
- Phone: +880 1234 567890
- GitHub Issues: [Create an issue]

---

**You're all set! Start exploring and customizing Pandora's Homes. Happy coding! 🎉**

Next: Read `README.md` for detailed documentation and `FEATURES.md` for complete feature list.
