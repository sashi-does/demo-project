"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Zap } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

const steps = [
  {
    icon: Search,
    title: "Monitor Trends",
    description: "Stay ahead of the curve with real-time trend monitoring and analysis.",
    gradient: "from-purple-500/10",
    glow: "from-purple-500/20",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    hasShinyBorder: false,
    borderGradient: "from-purple-500 via-pink-500 to-purple-500"
  },
  {
    icon: Lightbulb,
    title: "Generate Ideas",
    description: "Get AI-powered content ideas tailored to your niche and audience.",
    gradient: "from-teal-500/10",
    glow: "from-teal-500/20",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    hasShinyBorder: false
  },
  {
    icon: Zap,
    title: "Optimize Content",
    description: "Create high-performing content with our optimization tools.",
    gradient: "from-blue-500/10",
    glow: "from-blue-500/20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    hasShinyBorder: false,
    borderGradient: "from-blue-400 via-cyan-500 to-blue-400"
  }
]

const ShinyBorder = ({ gradient }: { gradient: string }) => (
  <div className="absolute inset-0 p-[1px] rounded-2xl overflow-hidden">
    <div className="absolute inset-0">
      <div className={cn(
        "w-[500%] h-full absolute bg-gradient-to-r animate-[shine_3s_linear_infinite]",
        gradient
      )} />
    </div>
    <div className="h-full w-full bg-black rounded-2xl" />
  </div>
)

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-white/80">
            Three simple steps to supercharge your content strategy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                {step.hasShinyBorder && (
  <ShinyBorder gradient={step.borderGradient ?? 'default-gradient'} />
)}

                
                
                <Slot className={cn(
                  "relative block h-full rounded-2xl overflow-hidden",
                  !step.hasShinyBorder && "border border-white/[0.1]",
                  step.hasShinyBorder && "p-[1px]"
                )}>
                  <div className="relative h-full rounded-2xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} to-transparent`} />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                    <div className="relative p-8">
                      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${step.glow} to-transparent rounded-full blur-2xl transform translate-x-20 -translate-y-20 group-hover:translate-x-16 transition-transform duration-500`} />
                      <div className="relative space-y-6">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={64}
                          height={64}
                          className="rounded-lg object-cover"
                        />
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                          <p className="text-white/70">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slot>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}