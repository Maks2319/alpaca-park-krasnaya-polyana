import { motion } from 'framer-motion'
import MountainScene from './MountainScene.jsx'
import './hero.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className="hero" id="about">
      <MountainScene />
      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
        <motion.div className="eyebrow" variants={item}>
          Парк альпак · Красная Поляна
        </motion.div>
        <motion.h1 className="display hero-title" variants={item}>
          <span>АЛЬПАКИ ЖИВУТ</span>
          <span className="accent-line">ВЫШЕ ОБЛАКОВ</span>
        </motion.h1>

        <div className="hero-below">
          <motion.div className="panel intro" variants={item}>
            <p>
              На плато над Красной Поляной пасётся стадо из шестнадцати альпак. Их можно кормить
              с руки, расчёсывать и фотографировать на фоне снежных вершин — без забора между
              вами и горами.
            </p>
            <div className="ctas">
              <motion.a
                href="#tickets"
                className="stub"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0, scale: 0.97 }}
              >
                Купить билет →
              </motion.a>
              <motion.a
                href="#directions"
                className="stub stub--outline"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0, scale: 0.97 }}
              >
                Как добраться
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="panel facts" variants={item}>
            <dl>
              <dt>Высота</dt><dd className="tabular">1450 м</dd>
              <dt>От Розы Хутор</dt><dd className="tabular">12 мин</dd>
              <dt>Животных</dt><dd className="tabular">16</dd>
              <dt>Открыто</dt><dd className="tabular">10:00–18:00</dd>
            </dl>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
