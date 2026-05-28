"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Eye,
  Heart,
  MessageCircleOff,
  MessageSquare,
  SlidersHorizontal,
  Sparkles,
  ThumbsUp,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

const COMMUNITY_POSTS = [
  {
    id: 1,
    title: "Trust score: The score of agent",
    summary:
      "Introducing Trust Score — a performance metric in FESENSI that evaluates resolution speed, contribution quality, and support efficiency.",
    author: "Aadesh Kumar",
    role: "Core Contributor",
    date: "May 26, 2026",
    timestamp: 1779789600000,
    views: 215,
    likes: 42,
    replies: 12,
    tag: "Feature Announcement",
  },
  {
    id: 2,
    title: "Collaboration & Reassignment: Enhancing Support Efficiency",
    summary:
      "Agents can now request ticket reassignment whenever additional expertise is needed, improving workflow and faster ticket handling.",
    author: "Shivam Yadav",
    role: "Frontend Engineer",
    date: "Jul 30, 2025",
    timestamp: 1753871400000,
    views: 180,
    likes: 31,
    replies: 0,
    tag: "Product Update",
  },
  {
    id: 3,
    title: "Coming Soon: AI-Powered Q&A with LLM + RAG",
    summary:
      "Get context-aware answers instantly using AI-powered retrieval systems integrated directly inside your support workflow.",
    author: "Saurabh Verma",
    role: "AI Lead",
    date: "May 24, 2026",
    timestamp: 1779616800000,
    views: 340,
    likes: 78,
    replies: 29,
    tag: "AI & Research",
  },
];

type SortOption =
  | "Newest"
  | "Most Viewed"
  | "Most Liked"
  | "Uncommented";

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("Newest");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close sort dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSortOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter + Sort Logic
  const sortedPosts = useMemo(() => {
    const filtered = COMMUNITY_POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag =
        selectedTag === "All" || post.tag === selectedTag;

      return matchesSearch && matchesTag;
    });

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "Newest":
          return b.timestamp - a.timestamp;

        case "Most Viewed":
          return b.views - a.views;

        case "Most Liked":
          return b.likes - a.likes;

        case "Uncommented":
          return a.replies - b.replies;

        default:
          return 0;
      }
    });
  }, [searchQuery, selectedTag, sortBy]);

  return (
    <div className="min-h-screen  text-zinc-900 overflow-hidden">
      {/* Sticky Header */}

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
         

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT SIDE */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 backdrop-blur-xl px-5 py-2 text-sm font-medium text-indigo-700 shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  Fesensi Community
                </div>

                <div className="space-y-5">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                    Discover Ideas,
                    <span className="text-indigo-600">
                      {" "}
                      Updates & Discussions
                    </span>
                  </h1>

                  <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
                    Explore AI-powered updates, support innovations,
                    product announcements and collaborate with the
                    FESENSI ecosystem.
                  </p>
                </div>

                {/* Search */}
                {/* <div className="relative max-w-xl">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />

                  <input
                    type="text"
                    placeholder="Search community discussions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-16 rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-xl shadow-lg pl-14 pr-5 text-sm outline-none transition-all focus:ring-4 focus:ring-indigo-100"
                  />
                </div> */}

                {/* Stats */}
                <div className="flex flex-wrap gap-4">
                  {/* <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-zinc-200 p-5 shadow-md min-w-[170px]">
                    <p className="text-3xl font-black">1.2K+</p>

                    <span className="text-sm text-zinc-500">
                      Community Users
                    </span>
                  </div> */}

                  {/* <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-zinc-200 p-5 shadow-md min-w-[170px]">
                    <p className="text-3xl font-black">340+</p>

                    <span className="text-sm text-zinc-500">
                      Discussions
                    </span>
                  </div> */}

                  {/* <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-zinc-200 p-5 shadow-md min-w-[170px]">
                    <p className="text-3xl font-black">98%</p>

                    <span className="text-sm text-zinc-500">
                      Resolution Rate
                    </span>
                  </div> */}
                  <Link href="/">
                        <Button className="rounded-2xl h-11 px-5 bg-indigo-600 hover:bg-indigo-700 shadow-lg">
                          Create a Post
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="relative">
                <div className="rounded-[32px] border border-white/70 bg-white/70 backdrop-blur-2xl shadow-2xl p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">
                        Trending Discussions
                      </h3>

                      <p className="text-sm text-zinc-500 mt-1">
                        Active community insights
                      </p>
                    </div>

                    <div className="h-14 w-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>

                  <div className="space-y-5">
                    {COMMUNITY_POSTS.slice(0, 3).map((post) => (
                      <div
                        key={post.id}
                        className="rounded-2xl border border-zinc-100 bg-white/70 p-5 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
                      >
                        <h4 className="font-semibold leading-relaxed">
                          {post.title}
                        </h4>

                        <div className="flex items-center gap-5 mt-4 text-sm text-zinc-500">
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {post.views}
                          </span>

                          <span className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            {post.likes}
                          </span>

                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            {post.replies}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute -z-10 top-10 right-10 h-52 w-52 rounded-full bg-indigo-200 blur-3xl opacity-40" />
              </div>
            </div>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-y border-zinc-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Tags */}
              <div className="flex gap-3 overflow-x-auto no-scrollbar">
                {[
                  "All",
                  "Feature Announcement",
                  "Product Update",
                  "AI & Research",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-all ${
                      selectedTag === tag
                        ? "bg-indigo-600 text-white shadow-lg"
                        : "bg-white border border-zinc-200 text-zinc-600 hover:border-indigo-300"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="h-11 px-5 rounded-2xl border border-zinc-200 bg-white flex items-center gap-3 shadow-sm hover:bg-zinc-50 transition-all"
                >
                  <SlidersHorizontal className="h-4 w-4 text-zinc-500" />

                  <span className="text-sm font-medium">
                    Sort: {sortBy}
                  </span>

                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isSortOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isSortOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-zinc-200 bg-white shadow-xl p-2 z-50">
                    {(
                      [
                        "Newest",
                        "Most Viewed",
                        "Most Liked",
                        "Uncommented",
                      ] as SortOption[]
                    ).map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortBy(option);
                          setIsSortOpen(false);
                        }}
                        className={`w-full rounded-xl px-4 py-3 text-left text-sm transition-all ${
                          sortBy === option
                            ? "bg-indigo-50 text-indigo-700 font-semibold"
                            : "hover:bg-zinc-100 text-zinc-600"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* POSTS SECTION */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
                  Community Feed
                </h2>

                <p className="text-zinc-500 mt-2">
                  Explore the latest discussions from FESENSI
                </p>
              </div>

              <div className="hidden md:flex items-center gap-2 text-sm text-zinc-500">
                <Clock className="h-4 w-4" />
                Live Discussions
              </div>
            </div>

            {/* Posts Grid */}
            {sortedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {sortedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group rounded-[30px] bg-white/70 backdrop-blur-2xl border border-white shadow-xl p-7 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>

                        <div>
                          <p className="font-semibold">
                            {post.author}
                          </p>

                          <span className="text-sm text-zinc-500">
                            {post.role}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs text-zinc-500">
                        {post.date}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-6">
                      <span className="inline-flex rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-semibold">
                        {post.tag}
                      </span>

                      <h3 className="text-2xl font-bold mt-4 leading-snug group-hover:text-indigo-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-zinc-600 mt-4 leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-100">
                      <div className="flex items-center gap-5 text-sm text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {post.views}
                        </span>

                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </span>

                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {post.replies}
                        </span>
                      </div>

                      <Link href={`/posts/${post.id}`}>
                        <Button className="rounded-2xl h-11 px-5 bg-indigo-600 hover:bg-indigo-700 shadow-lg">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-[32px] border border-dashed border-zinc-300 bg-white py-24 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100">
                  <MessageCircleOff className="h-10 w-10 text-zinc-400" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  No discussions found
                </h3>

                <p className="mt-2 text-zinc-500 max-w-md">
                  Try changing your search query or selecting a
                  different category filter.
                </p>

                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTag("All");
                    setSortBy("Newest");
                  }}
                  className="mt-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      
    </div>
  );
}