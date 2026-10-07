# Pandora's Homes - Hostel Booking Platform

A modern, fully-featured hostel booking and management platform built with Next.js, React, and TypeScript. Pandora's Homes is Dhaka's premier male residence designed for focused students and young professionals.

## 🌟 Features

### User Features
- 🔐 User authentication (signup, login, logout)
- 🏠 Browse available rooms and accommodations
- 🔍 Advanced search and filtering
- 📅 Online booking system with date selection
- 💳 Flexible payment options (Card, Bank Transfer, Mobile Banking)
- ⭐ Rate and review rooms
- 👤 User profile management
- 📱 Responsive design for all devices

### Admin Features
- 📊 Dashboard for managing rooms and bookings
- 🏘️ Room inventory management
- 📋 Booking management
- 👥 User management
- 📈 Analytics and reporting

### Amenities
- **High-Speed Wi-Fi**: 1 Gbps fiber connection in every room
- **Home-Cooked Meals**: Three nutritious meals daily
- **24/7 Security**: Biometric access and CCTV surveillance
- **Fitness Center**: Fully equipped gym
- **Study Spaces**: Quiet zones and common areas
- **Green Spaces**: Rooftop garden and recreational areas

## 🛠️ Tech Stack

- **Frontend**: Next.js 15+, React 18, TypeScript
- **UI Components**: Radix UI with Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form
- **API Client**: Axios
- **Styling**: Tailwind CSS with CVA
- **Date Handling**: dayjs
- **Backend**: Node.js/MongoDB (recommended)

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn
- MongoDB (for backend)

## 🚀 Quick Start

### 1. Installation

```bash
# Navigate to project directory
cd C:\Users\HP\Downloads\Pandora-home

# Install dependencies
npm install
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Update with your settings
# Edit .env.local with your API URL and database connection
```

### 3. Run Development Server

```bash
# Start the development server
npm run dev

# The app will be available at http://localhost:3000
```

### 4. Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
Pandora-home/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   └── rooms/           # Room endpoints
│   ├── rooms/               # Room listing pages
│   ├── booking/             # Booking pages
│   ├── login/               # Authentication
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── providers.tsx        # Context providers
│   └── globals.css          # Global styles
│
├── components/              # Reusable React components
│   ├── layout/              # Header, Footer, Navigation
│   ├── sections/            # Page sections (Hero, Stats, etc.)
│   └── ui/                  # UI components (Button, Input, etc.)
│
├── hooks/                   # Custom React hooks
│   ├── useAuth.ts          # Authentication hook
│   └── useRooms.ts         # Rooms data hook
│
├── lib/                     # Utility functions
│   ├── api.ts              # API client setup
│   ├── types.ts            # TypeScript types
│   ├── utils.ts            # Helper functions
│   ├── constants.ts        # App constants
│   └── validators.ts       # Form validators
│
├── public/                 # Static assets
├── package.json            # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind CSS config
├── next.config.js         # Next.js config
└── README.md             # This file
```

## 🎨 Pages & Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage with featured rooms |
| `/rooms` | Browse all rooms |
| `/rooms/[id]` | Room details |
| `/booking/[id]` | Booking form |
| `/login` | User login |
| `/about` | About us |
| `/contact` | Contact form |
| `/api/rooms` | Rooms API endpoint |

## 📚 Available Components

### Layout Components
- `Header` - Navigation header
- `Footer` - Footer with links

### Section Components
- `HeroSection` - Landing hero section
- `FeaturedRooms` - Room showcase
- `StatsSection` - Statistics
- `AmenitiesSection` - Amenities list
- `CTASection` - Call-to-action

### UI Components
- `Button` - Primary button component
- Custom inputs, selects, and form elements

## 🔗 API Endpoints

### Rooms
```
GET    /api/rooms              # List all rooms
POST   /api/rooms              # Create room (admin)
GET    /api/rooms/[id]         # Get room details
PUT    /api/rooms/[id]         # Update room (admin)
DELETE /api/rooms/[id]         # Delete room (admin)
```

### Bookings
```
GET    /api/bookings           # List user bookings
POST   /api/bookings           # Create booking
GET    /api/bookings/[id]      # Get booking details
PUT    /api/bookings/[id]      # Update booking
DELETE /api/bookings/[id]      # Cancel booking
```

### Authentication
```
POST   /api/auth/login         # User login
POST   /api/auth/register      # User registration
POST   /api/auth/logout        # User logout
```

## 🎯 Usage Examples

### Fetch Rooms
```typescript
import { useRooms } from "@/hooks/useRooms";

function RoomsList() {
  const { data: rooms, isLoading } = useRooms();
  
  return (
    <div>
      {rooms?.map(room => (
        <div key={room.id}>{room.title}</div>
      ))}
    </div>
  );
}
```

### Authentication
```typescript
import { useAuth } from "@/hooks/useAuth";

function LoginForm() {
  const { login, isAuthenticated } = useAuth();
  
  const handleLogin = (email, password) => {
    login({ email, password });
  };
  
  return <form>{/* form fields */}</form>;
}
```

### API Calls
```typescript
import api from "@/lib/api";

// Get all rooms
const rooms = await api.getRooms();

// Create booking
const booking = await api.createBooking({
  roomId: "1",
  checkInDate: "2024-01-15",
  checkOutDate: "2024-01-20"
});
```

## 🔐 Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
MONGODB_URI=mongodb://localhost:27017/pandora-homes
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

## 📦 Dependencies

Key packages used:
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling
- `@radix-ui/*` - UI components
- `@tanstack/react-query` - Data fetching
- `react-hook-form` - Form handling
- `axios` - HTTP client
- `next-themes` - Theme management
- `class-variance-authority` - Component variants

## 🧪 Testing

```bash
# Run tests (if configured)
npm test

# Run with coverage
npm run test:coverage
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub
git push

# Connect to Vercel and deploy
# Set environment variables in Vercel dashboard
```

### Deploy to Other Platforms

- **Netlify**: Import repository and set environment variables
- **AWS**: Use Amplify or EC2
- **DigitalOcean**: Use App Platform

## 📝 Customization

### Change Brand Colors
Edit `app/globals.css` and `tailwind.config.js`:

```css
:root {
  --primary: 0 0% 9.0%;
  --accent: 45 93% 47%;
  /* ... other colors */
}
```

### Modify Room Data
Edit `lib/constants.ts` and API routes in `app/api/`

### Add New Pages
Create new directories in `app/` with `page.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📞 Support & Contact

- **Email**: info@pandorashomes.com
- **Phone**: +880 1234 567890
- **Website**: https://pandorashomes.com
- **Location**: Dhaka, Bangladesh

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI Components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Data fetching with [TanStack Query](https://tanstack.com/query/)

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

**Made with ❤️ by Pandora's Homes Team**

*Last Updated: October 2026*
