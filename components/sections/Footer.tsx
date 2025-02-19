"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Twitter, Instagram, Youtube, Mail } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let frame = 0
    const particles: Array<{
      x: number,
      y: number,
      speed: number,
      size: number,
      opacity: number,
      color: string
    }> = []
    

    const colors = [
      { r: 147, g: 51, b: 234 },  
      { r: 45, g: 212, b: 191 },  
      { r: 79, g: 70, b: 229 },   
      { r: 236, g: 72, b: 153 }   
    ]

    for (let i = 0; i < 100; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.3,
        size: 0.6 + Math.random() * 1,
        opacity: Math.random() * 0.5,
        color: `rgb(${color.r}, ${color.g}, ${color.b})`
      })
    }

    const animate = () => {
      frame++
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        // Update particle position with a slight wave motion
        particle.y -= particle.speed
        particle.x += Math.sin(frame * 0.02 + particle.y * 0.01) * 0.2
        
        // Reset position when particle goes off screen
        if (particle.y < -10) {
          particle.y = canvas.height + 10
          particle.x = Math.random() * canvas.width
        }
        // Keep particles within horizontal bounds
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0

        // Calculate opacity with smooth sine wave
        particle.opacity = 0.15 + Math.sin(frame * 0.01 + particle.y * 0.01) * 0.1

        // Draw particle with color and calculated opacity
        ctx.fillStyle = particle.color.replace('rgb', 'rgba').replace(')', `, ${particle.opacity})`)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ 
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(88, 28, 135, 0.95), rgba(15, 23, 42, 0.98))'
        }} 
      />
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-full blur-[100px]" />
            
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Ready to Transform Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">Content Strategy?</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join the waitlist today and be among the first to experience the future of content creation.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-fit"
              >
                <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold shadow-xl shadow-purple-500/20">
                  Join the Waitlist
                  <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="relative">
              <h3 className="font-semibold mb-6 text-lg text-white">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="group flex items-center text-gray-400 hover:text-white transition-colors">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center text-gray-400 hover:text-white transition-colors">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center text-gray-400 hover:text-white transition-colors">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <h3 className="font-semibold mb-6 text-lg text-white">Support</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="group flex items-center text-gray-400 hover:text-white transition-colors">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-teal-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center text-gray-400 hover:text-white transition-colors">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-teal-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center text-gray-400 hover:text-white transition-colors">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-teal-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2024 Content Strategy Tool. All rights reserved.
          </p>
          <div className="flex space-x-8">
            {[
              { name: 'Twitter', icon: Twitter, color: 'hover:text-blue-400' },
              { name: 'Instagram', icon: Instagram, color: 'hover:text-pink-500' },
              { name: 'Youtube', icon: Youtube, color: 'hover:text-red-500' },
              { name: 'Mail', icon: Mail, color: 'hover:text-teal-400' }
            ].map((social) => (
              <motion.a
                key={social.name}
                href="#"
                className={`text-gray-500 transition-colors ${social.color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}