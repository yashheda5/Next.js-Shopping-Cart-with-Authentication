# 🛒 Next.js Shopping Cart with Authentication

A modern e-commerce shopping cart built with Next.js 13, featuring GitHub authentication, Redux state management, and a seamless shopping experience. This application demonstrates the implementation of a full-featured shopping cart with protected routes and real-time cart updates.

## 💻 Tech Stack

![Next.js](https://skillicons.dev/icons?i=nextjs)
![JavaScript](https://skillicons.dev/icons?i=javascript)
![React](https://skillicons.dev/icons?i=react)
![Node.js](https://skillicons.dev/icons?i=nodejs)

## 📁 File Structure

```bash
📁 /src
├── 📁 /actions                  # API calls for fetching products
├── 📁 /auth                     # NextAuth configuration for GitHub OAuth
├── 📁 /components
│   ├── AddToCart.js            # Component to handle add/remove cart actions
│   ├── CartPage.js             # Cart UI and functionality
│   ├── ProductCard.js          # Card component for individual products
│   ├── Header.js               # Header with navigation links
├── 📁 /provider                # Redux store setup and provider
├── 📁 /store
│   ├── cart-slice.js           # Redux slice for cart actions
│   └── index.js                # Configuring the Redux store
├── 📄 [page].js                # Dynamic route for product details
└── 📄 app.js                   # Main application setup
```

## ✨ Features

- 🔐 Secure authentication with GitHub OAuth
- 🛍️ Browse products from DummyJSON API
- 🔍 View detailed product information
- 🛒 Add/remove items from cart
- 💰 Real-time cart total calculation
- 📱 Responsive design for all devices

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/nextjs-shopping-cart.git
cd nextjs-shopping-cart
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file:
```env
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

## 🔒 Authentication

The application uses NextAuth.js with GitHub provider for authentication. Protected routes are handled by the middleware:

```javascript
import { auth } from "@/auth"
import { NextResponse } from 'next/server'

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isOnUnauthPage = req.nextUrl.pathname === '/unauth-page'

  if (!isLoggedIn && !isOnUnauthPage) {
    return NextResponse.redirect(new URL('/unauth-page', req.url))
  }

  if (isLoggedIn && isOnUnauthPage) {
    return NextResponse.redirect(new URL('/', req.url))
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
```

## 🌟 Key Features

- **Product Listing**: Browse through products fetched from DummyJSON API
- **Shopping Cart**: Add/remove items with real-time total calculation
- **Authentication**: Secure routes with GitHub OAuth
- **Responsive Design**: Optimized for both mobile and desktop views
- **State Management**: Efficient cart state handling with Redux Toolkit

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.# 🛒 Next.js Shopping Cart with Authentication

A modern e-commerce shopping cart built with Next.js 13, featuring GitHub authentication, Redux state management, and a seamless shopping experience. This application demonstrates the implementation of a full-featured shopping cart with protected routes and real-time cart updates.

## 💻 Tech Stack

![Next.js](https://skillicons.dev/icons?i=nextjs)
![JavaScript](https://skillicons.dev/icons?i=javascript)
![React](https://skillicons.dev/icons?i=react)
![Node.js](https://skillicons.dev/icons?i=nodejs)

## 🌐 Live Demo

Try the live demo of PDF Slides Co-Viewer hosted on Vercel:  
[PDF Slides Co-Viewer Live Demo](https://pdf-slides-co-viewer-web-app.vercel.app/)

## 📦 Direct Download

Download the latest version of PDF Slides Co-Viewer as a ZIP file:  
[Download ZIP](https://github.com/yashheda5/PDF-Slides-Co-Viewer-Web-App/archive/refs/heads/main.zip)



## 📁 File Structure

```bash
📁 /src
├── 📁 /actions                  # API calls for fetching products
├── 📁 /auth                     # NextAuth configuration for GitHub OAuth
├── 📁 /components
│   ├── AddToCart.js            # Component to handle add/remove cart actions
│   ├── CartPage.js             # Cart UI and functionality
│   ├── ProductCard.js          # Card component for individual products
│   ├── Header.js               # Header with navigation links
├── 📁 /provider                # Redux store setup and provider
├── 📁 /store
│   ├── cart-slice.js           # Redux slice for cart actions
│   └── index.js                # Configuring the Redux store
├── 📄 [page].js                # Dynamic route for product details
└── 📄 app.js                   # Main application setup
```

## ✨ Features

- 🔐 Secure authentication with GitHub OAuth
- 🛍️ Browse products from DummyJSON API
- 🔍 View detailed product information
- 🛒 Add/remove items from cart
- 💰 Real-time cart total calculation
- 📱 Responsive design for all devices

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/nextjs-shopping-cart.git
cd nextjs-shopping-cart
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file:
```env
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```


## 🌟 Key Features

- **Product Listing**: Browse through products fetched from DummyJSON API
- **Shopping Cart**: Add/remove items with real-time total calculation
- **Authentication**: Secure routes with GitHub OAuth
- **Responsive Design**: Optimized for both mobile and desktop views
- **State Management**: Efficient cart state handling with Redux Toolkit

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.