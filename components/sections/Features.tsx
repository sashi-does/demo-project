"use client"

import { motion } from "framer-motion"
import { 
  TrendingUp, 
  Brain, 
  Bell, 
  Users, 
  LineChart, 
  FileText, 
  Settings, 
  BarChart, 
  DollarSign,
  UserPlus,
  MessageCircle
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Content Trends & Idea Generation",
    gradient: "from-purple-500/10",
    glow: "from-purple-500/20",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    items: [
      {
        icon: TrendingUp,
        title: "Trends Dashboard",
        description: "Monitor real-time trending hashtags, keywords, and content ideas to stay ahead."
      },
      {
        icon: Brain,
        title: "AI-Powered Ideation Hub",
        description: "Generate niche-specific content ideas tailored to your audience."
      },
      {
        icon: Bell,
        title: "Automated Trend Alerts",
        description: "Timely notifications on trends relevant to your niche."
      }
    ]
  },
  {
    title: "Content Research & Validation",
    gradient: "from-teal-500/10",
    glow: "from-teal-500/20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    items: [
      {
        icon: Users,
        title: "Competitor Analysis",
        description: "Benchmark competitor performance on YouTube and Instagram."
      },
      {
        icon: LineChart,
        title: "Idea Validation Insights",
        description: "Predict content performance based on data."
      }
    ]
  },
  {
    title: "Content Planning & Optimization",
    gradient: "from-blue-500/10",
    glow: "from-blue-500/20",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f",
    items: [
      {
        icon: FileText,
        title: "Content Brief Generator",
        description: "Research-driven briefs with optimized headlines and content structures."
      },
      {
        icon: Settings,
        title: "Optimization Toolkit",
        description: "Titles, descriptions, tags, and high-CTR thumbnail generator."
      }
    ]
  },
  {
    title: "Audience & Analytics",
    gradient: "from-indigo-500/10",
    glow: "from-indigo-500/20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    items: [
      {
        icon: BarChart,
        title: "Audience Behavior Analytics",
        description: "Understand engagement patterns and optimize strategy."
      },
      {
        icon: LineChart,
        title: "Growth & Performance Tracker",
        description: "Track followers, engagement, and key metrics."
      },
      {
        icon: DollarSign,
        title: "Earnings Tracker",
        description: "Centralized income tracking from ads, sponsorships, and affiliates."
      }
    ]
  },
]

const FeatureCard = ({ item, index }: any) => {
  const Icon = item.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-800 shadow-xl" />
      <div className="relative p-8 hover:scale-[1.02] transition-transform duration-300">
        <Icon className="w-8 h-8 text-white/80 mb-4 transition-colors" />
        <h3 className="text-lg font-medium mb-3 text-white/90">{item.title}</h3>
        <p className="text-gray-400 text-sm">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-950" id="features">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Powerful Features for Content Creators
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to create, optimize, and grow your content
          </p>
        </motion.div>

        {features.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20 group relative overflow-hidden rounded-2xl">
            <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} to-gray-950 opacity-20`} />
            <div className="absolute inset-0 backdrop-blur-3xl" />
            <div className="relative p-10">
              <div className={`absolute top-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-br to-transparent rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:translate-x-16 transition-transform duration-500 opacity-20`} />
              <div className="relative">
                <div className="flex items-center gap-6 mb-10">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={56}
                    height={56}
                    className="rounded-xl object-cover ring-2 ring-gray-800/50"
                  />
                  <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
                    {section.title}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item, index) => (
                    <FeatureCard key={index} item={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}