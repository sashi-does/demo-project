"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Sarah Chen",
    role: "Content Creator",
    quote: "This platform has completely transformed how I approach content creation. The AI-powered insights are game-changing!"
  },
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "Michael Rodriguez",
    role: "YouTuber",
    quote: "The trend analysis and content optimization tools have helped me double my channel growth in just three months."
  },
  {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "Emma Thompson",
    role: "Instagram Influencer",
    quote: "Finally, a tool that understands the needs of modern content creators. The analytics are incredibly detailed yet easy to understand."
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Content Creators
          </h2>
          <p className="text-xl text-gray-400">
            See what our early users have to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}