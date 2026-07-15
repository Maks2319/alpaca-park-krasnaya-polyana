import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import './mountain-scene.css'

function AlpacaMark({ tone = 'near' }) {
  return (
    <svg viewBox="0 0 64 64" className={`alpaca-mark alpaca-mark--${tone}`}>
      <ellipse className="alpaca-ear" cx="24" cy="16" rx="7" ry="11" transform="rotate(-14 24 16)" />
      <ellipse className="alpaca-ear" cx="40" cy="16" rx="7" ry="11" transform="rotate(14 40 16)" />
      <ellipse className="alpaca-face" cx="32" cy="34" rx="19" ry="18" />
      <circle className="alpaca-eye" cx="25" cy="32" r="2.4" />
      <circle className="alpaca-eye" cx="39" cy="32" r="2.4" />
    </svg>
  )
}

export default function MountainScene() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const farY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const midY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const nearY = useTransform(scrollYProgress, [0, 1], [0, 190])

  const cloudTransition = (duration, delay) =>
    reduceMotion
      ? { duration: 0 }
      : { duration, delay, repeat: Infinity, ease: 'linear' }

  const bobTransition = (duration, delay) =>
    reduceMotion
      ? { duration: 0 }
      : { duration, delay, repeat: Infinity, ease: 'easeInOut' }

  return (
    <div ref={ref} className="scene" aria-hidden="true">
      <div className="scene-sky" />

      <motion.div
        className="cloud cloud--a"
        animate={reduceMotion ? undefined : { x: ['-10%', '10%'] }}
        transition={cloudTransition(46, 0)}
      />
      <motion.div
        className="cloud cloud--b"
        animate={reduceMotion ? undefined : { x: ['8%', '-14%'] }}
        transition={cloudTransition(60, 2)}
      />
      <motion.div
        className="cloud cloud--c"
        animate={reduceMotion ? undefined : { x: ['-6%', '12%'] }}
        transition={cloudTransition(52, 6)}
      />

      <motion.div className="ridge ridge--far" style={{ y: farY }}>
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none">
          <path d="M0,260 L120,220 L240,240 L360,190 L480,225 L600,175 L720,210 L840,170 L960,215 L1080,180 L1200,230 L1320,195 L1440,235 L1440,500 L0,500 Z" />
        </svg>
      </motion.div>

      <motion.div className="ridge ridge--mid" style={{ y: midY }}>
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none">
          <path d="M0,320 L100,260 L220,300 L340,230 L460,280 L580,210 L700,270 L820,205 L940,265 L1060,215 L1180,275 L1300,225 L1440,290 L1440,500 L0,500 Z" />
        </svg>
      </motion.div>

      <motion.div className="ridge ridge--near" style={{ y: nearY }}>
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none">
          <path d="M0,420 L140,340 L260,380 L380,260 L500,340 L620,220 L760,300 L880,240 L1000,320 L1140,260 L1260,360 L1380,300 L1440,340 L1440,500 L0,500 Z" />
          <path className="snowcap" d="M355,272 L380,260 L403,276 L389,281 L372,281 Z" />
          <path className="snowcap" d="M595,232 L620,220 L644,236 L629,241 L611,241 Z" />
        </svg>

        <motion.div
          className="alpaca alpaca--1"
          animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
          transition={bobTransition(3.2, 0)}
        >
          <AlpacaMark tone="near" />
        </motion.div>
        <motion.div
          className="alpaca alpaca--2"
          animate={reduceMotion ? undefined : { y: [0, -2.5, 0] }}
          transition={bobTransition(2.6, 0.6)}
        >
          <AlpacaMark tone="near" />
        </motion.div>
        <motion.div
          className="alpaca alpaca--3"
          animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
          transition={bobTransition(3.6, 1.2)}
        >
          <AlpacaMark tone="near" />
        </motion.div>
      </motion.div>

      <div className="scene-scrim" />
    </div>
  )
}
