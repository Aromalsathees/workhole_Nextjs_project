// "use client";

// import React, { useState } from 'react';
// import Homepage1 from './components/Homepage1';
// import Homepage2 from './components/Homepage2';
// import Footer from './Head_Footer/Footer';

// export default function Layout() {
//   const [showFirst, setShowFirst] = useState(true);

//   return (
//     <>
//       <main className="container mx-auto p-4">
//         {showFirst ? <Homepage1 /> : <Homepage2 />}
//       </main>
//       <Footer />
//     </>
//   );
// }

// app/layout.js
import './globals.css'; // ✅ This line is required to load Tailwind styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className="container mx-auto p-4">
          {/* <HomeToggle /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
