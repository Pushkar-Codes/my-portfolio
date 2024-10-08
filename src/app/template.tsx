"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/utils/animation"; // Import animation

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn(); // Trigger animation when the component mounts
  }, []);

  return (
    <div className="relative">
      {/* Banners */}
      <div
        id="banner-1"
        className="min-h-screen bg-white z-10 fixed top-0 left-0 w-1/4"
      ></div>
      <div
        id="banner-2"
        className="min-h-screen bg-white z-10 fixed top-0 left-1/4 w-1/4"
      ></div>
      <div
        id="banner-3"
        className="min-h-screen bg-white z-10 fixed top-0 left-2/4 w-1/4"
      ></div>
      <div
        id="banner-4"
        className="min-h-screen bg-white z-10 fixed top-0 left-3/4 w-1/4"
      ></div>

      {/* Main Content - Hidden Initially */}
      <div
        id="main-content"
        className="relative z-50 opacity-0 transition-opacity duration-1000"
      >
        {children}
      </div>
    </div>
  );
}
