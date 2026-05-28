"use client";

import * as React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import CommunityPage from "./community/page";

export default function Page() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-sky-50">
      {/* 1. Header (Anchored top) */}
      <Header />

      {/* 2. Main content block - flex-1 expands to push the footer down */}
      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Your current live-forum or dashboard widgets go here */}

        <CommunityPage/>
      </main>

      {/* 3. Footer (Always pushed cleanly to the bottom) */}
      <Footer />
    </div>
  )
}