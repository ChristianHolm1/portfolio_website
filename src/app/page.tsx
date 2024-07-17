"use client";

import React from "react";

import About from "../components/About";
import Footer from "../components/Footer";
import History from "../components/History";
import Project from "../components/Project";

function Page() {
  return (
    <div>
      <main className="flex flex-col items-center justify-between px-4 md:px-24 pt-12 min-h-screen bg-gray-900">
        <div className="w-full max-w-6xl mx-auto">
          <About />
          <Project />
          <History />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
