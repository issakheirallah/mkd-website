import { motion, useReducedMotion } from 'framer-motion'

/**
 * Subtle "rise and fade in" wrapper. Triggers when the element scrolls into view.
 * Respects prefers-reduced-motion: degrades to a static block with no animation.
 */
export default function FadeIn({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  once = true,
  className,
  as = 'div',
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
