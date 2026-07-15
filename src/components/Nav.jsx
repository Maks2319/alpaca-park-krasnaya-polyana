import { motion } from 'framer-motion'
import './nav.css'

export default function Nav() {
  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="word">
        Парк <span>Альпак</span>
      </div>
      <div className="links">
        <a href="#about">О парке</a>
        <a href="#tickets">Билеты</a>
        <a href="#directions">Как добраться</a>
        <motion.a
          href="#tickets"
          className="stub nav-cta"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0, scale: 0.97 }}
        >
          Билеты →
        </motion.a>
      </div>
    </motion.nav>
  )
}
