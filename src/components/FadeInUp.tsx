import { motion } from "framer-motion"

type FadeInUpProps = {
  children: React.ReactNode
  // Optional: custom delay to stagger animations of multiple elements
  delay?: number
  // Optional: pass extra tailwind classes if needed
  className?: string
}

export default function FadeInUp({ children, delay = 0, className = "" }: FadeInUpProps) {
  return (
    <motion.div
      // 🎬 Initial state before the element is visible: invisible, 30px lower
      initial={{ opacity: 0, y: 30 }}
      // 🎬 State when user scroll to the element: fully visible, slide up to correct position
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, // smooth natural speed, you can adjust this
        ease: "easeOut",
        delay: delay 
      }}
      viewport={{
        // ✅ Animation plays ONLY ONCE the first time you scroll to the element
        once: true,
        // Start animation 100px before element enters screen, so it feels smooth
        margin: "-100px"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}