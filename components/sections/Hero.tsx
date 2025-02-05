"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, LineChart, Users } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-teal-400 to-purple-400 mb-6 leading-tight">
            THE ONLY Content Eco-System you need
          </h1>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Join the waitlist for cutting-edge tools to generate, plan, and optimize your content effortlessly.
          </p>
          <motion.div
          className="w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="m-auto w-fit bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 shadow-lg shadow-purple-500/25">
              Join the Waitlist
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-xl p-8">
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-white/[0.07] backdrop-blur-[2px] rounded-xl border border-white/[0.1] shadow-2xl" />
                <div className="relative p-6">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:translate-x-8 transition-transform duration-500" />
                  <Image
                    src="https://images.unsplash.com/photo-1533750516457-a7f992034fec"
                    alt="Analytics Dashboard"
                    width={400}
                    height={300}
                    className="w-12 h-12 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-white">Trending Topics</h3>
                  <p className="text-white/70">+127% engagement rate</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-white/[0.07] backdrop-blur-[2px] rounded-xl border border-white/[0.1] shadow-2xl" />
                <div className="relative p-6">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:translate-x-8 transition-transform duration-500" />
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                    alt="Analytics"
                    width={400}
                    height={300}
                    className="w-12 h-12 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-white">Analytics</h3>
                  <p className="text-white/70">Real-time insights</p>
                </div>
              </div>

              <div className="group relative overflow-hidden col-span-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-white/[0.07] backdrop-blur-[2px] rounded-xl border border-white/[0.1] shadow-2xl" />
                <div className="relative p-6">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:translate-x-8 transition-transform duration-500" />
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                    alt="Growth"
                    width={400}
                    height={300}
                    className="w-12 h-12 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-white">Audience Growth</h3>
                  <p className="text-white/70">Optimize for your target audience</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}