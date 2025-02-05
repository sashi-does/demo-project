"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`absolute inset-0 transition-all duration-300 ${
        isScrolled ? "bg-white/[0.07] backdrop-blur-lg border-b border-white/[0.1]" : ""
      }`} />
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between py-4">
          <motion.div
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400"
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            transition={{ duration: 0.2 }}
          >
            ContentPro
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#features" 
              className="text-white/90 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link 
              href="#about" 
              className="text-white/90 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white shadow-lg shadow-purple-500/25"
              >
                Join Waitlist
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}