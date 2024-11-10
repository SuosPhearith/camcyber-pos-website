// app/layout.js

import "./globals.css"; // Import any global CSS or Tailwind CSS here if needed
import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
