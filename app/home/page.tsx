"use client"

import { v4 as uuidv4 } from 'uuid'
import { 
  TrendingUp, 
  Brain, 
  FileText, 
  Users,
  Hash,
  Search,
  BarChart,
  Bell,
  ExternalLink,
  ChevronLeft
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import React from 'react'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const features = [
    {
      id: uuidv4(),
      name: "Trending",
      icon: TrendingUp,
      gradient: "from-purple-600/20 to-purple-800/20",
      borderGlow: "group-hover:border-purple-500/50",
      href: "/trending"
    },
    {
      id: uuidv4(),
      name: "Ideation Hub",
      icon: Brain,
      gradient: "from-blue-600/20 to-blue-800/20",
      borderGlow: "group-hover:border-blue-500/50",
      href: "/ideation"
    },
    {
      id: uuidv4(),
      name: "Script Automation",
      icon: FileText,
      gradient: "from-emerald-600/20 to-emerald-800/20",
      borderGlow: "group-hover:border-emerald-500/50",
      href: "/scripts"
    },
    {
      id: uuidv4(),
      name: "Competitor Analysis",
      icon: Users,
      gradient: "from-orange-600/20 to-orange-800/20",
      borderGlow: "group-hover:border-orange-500/50",
      href: "/competitors"
    },
  ]

  const trendingHashtags = [
    { tag: "#TrendingNow", uses: "20K+", growth: "+15%", color: "text-purytple-400" },
    { tag: "#AIRevolution", uses: "15K+", growth: "+25%", color: "text-blue-400" },
    { tag: "#ContentCreator", uses: "30K+", growth: "+10%", color: "text-green-400" },
    { tag: "#SocialMedia", uses: "25K+", growth: "+20%", color: "text-pink-400" },
  ]

  const trendingKeywords = [
    { keyword: "AI Content Creation", searches: "50K", trend: "↑ Rising" },
    { keyword: "Social Media Hacks", searches: "35K", trend: "↗️ Trending" },
    { keyword: "Content Strategy 2024", searches: "45K", trend: "🔥 Hot" },
    { keyword: "Viral Marketing Tips", searches: "40K", trend: "→ Stable" },
  ]
  // task manager
  // scheduling
  // ideate --> creating a new video planner
  // trending
  // settigns
  // bot that tells about channel information
  // competitor analysis
  // analytics
  const trendingVideos = [
    {
      title: "How to Go Viral on Social Media",
      views: "150K",
      engagement: "20K",
      growth: "+45%",
      creator: "Top Creator",
      thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"
    },
    {
      title: "AI Tools for Content Creators",
      views: "100K",
      engagement: "15K",
      growth: "+30%",
      creator: "Tech Guru",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    },
  ]

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black">
      <div className="flex">
        <div className={`relative transition-[width] duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'} min-h-screen border-r border-gray-800/50`}>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-50">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="absolute -right-4 p-2 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white shadow-lg"
            >
              <ChevronLeft className={`w-4 h-4 transition-transform duration-300 ${!isSidebarOpen ? 'rotate-180' : ''}`} />
            </motion.button>
          </div>

          <div className="py-8 px-4 space-y-6">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="group relative flex items-center cursor-pointer"
              >
                <div className={`relative flex items-center w-full ${isSidebarOpen ? 'px-4' : 'justify-center'}`}>
                  <div className={`
                    p-2 
                    rounded-lg 
                    text-gray-200 
                    transition-all 
                    duration-300
                    group-hover:bg-gray-800/50
                    group-hover:text-white
                    ${!isSidebarOpen && 'hover:scale-110'}
                  `}>
                    <feature.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  {isSidebarOpen && (
                    <span className="ml-3 font-medium text-gray-200 group-hover:text-white transition-colors">
                      {feature.name}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 space-y-8">
          {/* Header */}
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-20" />
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal-500/30 rounded-full filter blur-3xl opacity-20" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 relative">
              Welcome back!
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-teal-500" />
            </h1>
            <p className="text-gray-400 text-lg">Here's what's trending in your niche today</p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Trending Hashtags */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group rounded-2xl border border-gray-800/50 hover:border-gray-700/50 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Hash className="w-5 h-5 text-purple-400" />
                    <h2 className="text-xl font-semibold text-white">Trending Hashtags</h2>
                  </div>
                  <div className="space-y-3">
                    {trendingHashtags.map((item) => (
                      <div 
                        key={item.tag}
                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        <span className={`${item.color} font-medium`}>{item.tag}</span>
                        <div className="flex gap-4">
                          <span className="text-sm text-gray-400">{item.uses}</span>
                          <span className="text-sm text-green-400">{item.growth}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Trending Keywords */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative group rounded-2xl border border-gray-800/50 hover:border-gray-700/50 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Search className="w-5 h-5 text-blue-400" />
                    <h2 className="text-xl font-semibold text-white">Trending Keywords</h2>
                  </div>
                  <div className="space-y-3">
                    {trendingKeywords.map((item) => (
                      <div 
                        key={item.keyword}
                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        <span className="text-white">{item.keyword}</span>
                        <div className="flex gap-4">
                          <span className="text-sm text-gray-400">{item.searches}</span>
                          <span className="text-sm text-green-400">{item.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Trending Videos */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative group rounded-2xl border border-gray-800/50 hover:border-gray-700/50 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <BarChart className="w-5 h-5 text-green-400" />
                      <h2 className="text-xl font-semibold text-white">Trending Videos</h2>
                    </div>
                    <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                      View all <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {trendingVideos.map((video) => (
                      <div 
                        key={video.title}
                        className="group p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        <div className="flex gap-4">
                          <div className="w-24 h-16 rounded-md overflow-hidden">
                            <img 
                              src={video.thumbnail} 
                              alt={video.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                              {video.title}
                            </h3>
                            <div className="flex justify-between text-sm text-gray-400">
                              <span>{video.views} views</span>
                              <span>{video.engagement} engagements</span>
                              <span className="text-green-400">{video.growth}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Trend Alerts */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative group rounded-2xl border border-gray-800/50 hover:border-gray-700/50 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Bell className="w-5 h-5 text-orange-400" />
                    <h2 className="text-xl font-semibold text-white">Trend Alerts</h2>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors">
                      <p className="text-gray-300">🔥 #ValentineContentIdeas is trending with 25% engagement growth!</p>
                      <p className="text-sm text-gray-400 mt-1">2 hours ago</p>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors">
                      <p className="text-gray-300">📈 Competitor video "AI Marketing Strategies" gaining traction</p>
                      <p className="text-sm text-gray-400 mt-1">4 hours ago</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}