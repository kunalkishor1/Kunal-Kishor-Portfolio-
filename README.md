# Portfolio Website - Kunal Kishor

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases projects, skills, experience, and certifications with a clean, responsive design and smooth animations.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Built with Tailwind CSS and custom components
- **Smooth Animations**: Framer Motion for elegant transitions
- **Contact Form**: EmailJS integration for direct email sending
- **Resume Download**: Direct PDF download functionality
- **Optimized**: Lightweight and fast with minimal dependencies

## 📁 Project Structure

```
portfolio-main
├── client/
│   ├── index.html              # Main HTML entry point
│   └── src/
│       ├── components/          # React components
│       │   ├── About.tsx
│       │   ├── Certifications.tsx
│       │   ├── Contact.tsx
│       │   ├── Experience.tsx
│       │   ├── Footer.tsx
│       │   ├── Hero.tsx
│       │   ├── Navigation.tsx
│       │   ├── Projects.tsx
│       │   ├── Skills.tsx
│       │   └── ui/              # Reusable UI components
│       ├── pages/               # Page components
│       ├── hooks/                # Custom React hooks
│       ├── lib/                  # Utility functions
│       └── main.tsx             # React entry point
├── server/                       # Express.js backend
│   ├── index.ts                 # Server setup
│   ├── routes.ts                # API routes
│   └── vite.ts                 # Vite integration
├── attached_assets/             # Images and resume PDF
├── package.json                 # Dependencies
└── vite.config.ts              # Vite configuration
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Email**: EmailJS
- **Build Tool**: Vite
- **Backend**: Express.js
- **State Management**: TanStack React Query

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up EmailJS (optional, for contact form):
   - See `EMAILJS_SETUP.md` for detailed instructions
   - Create a `.env` file with your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:5000`

### Production Build
```bash
npm run build
npm start
```

### Type Checking
```bash
npm run check
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. If EmailJS is not configured, the form will automatically fall back to opening the user's email client.

For EmailJS setup instructions, see `EMAILJS_SETUP.md`.

## 🎨 Customization

- **Colors**: Edit `client/src/index.css` for color scheme
- **Content**: Update component files in `client/src/components/`
- **Images**: Replace images in `attached_assets/` directory
- **Resume**: Update PDF in `attached_assets/` directory

## 📄 License

MIT License

## 👤 Author

**Kunal Kishor**
- Email: kunalkishor93344@gmail.com
- LinkedIn: [linkedin.com/in/kunal-kishor-48778a223](https://linkedin.com/in/kunal-kishor-48778a223)
- GitHub: [github.com/kunalkishor1](https://github.com/kunalkishor1)

---

Built with ❤️ using React and TypeScript
