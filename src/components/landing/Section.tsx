import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, showSecondButton, secondButtonText }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4), 2px 2px 8px rgba(0,0,0,0.6)' }}
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          style={{ textShadow: '0 0 10px rgba(255,255,255,0.3), 2px 2px 6px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 flex flex-wrap gap-4"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-white bg-transparent border-white hover:bg-white hover:text-blue-900 transition-colors"
            onClick={() => window.open('https://max.ru/', '_blank')}
          >
            {buttonText}
          </Button>
          {showSecondButton && (
            <Button
              variant="outline"
              size="lg"
              className="text-white bg-transparent border-white hover:bg-white hover:text-blue-900 transition-colors"
              onClick={() => window.open('https://max.ru/', '_blank')}
            >
              {secondButtonText}
            </Button>
          )}
        </motion.div>
      )}
    </section>
  )
}