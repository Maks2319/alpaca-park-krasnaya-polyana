import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import './gallery.css'

const herd = [
  { name: 'Латте', trait: 'любит объятия', tone: 'p1' },
  { name: 'Зефир', trait: 'самый пушистый', tone: 'p2' },
  { name: 'Груша', trait: 'вожак стада', tone: 'p3' },
  { name: 'Чили', trait: 'крадёт морковь', tone: 'p4' },
  { name: 'Ёлка', trait: 'родилась зимой', tone: 'p5' },
  { name: 'Мускат', trait: 'громче всех гудит', tone: 'p6' },
]

function Portrait({ tone }) {
  return (
    <div className={`portrait ${tone}`}>
      <div className="ear l" />
      <div className="ear r" />
      <div className="face" />
      <div className="eye l" />
      <div className="eye r" />
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal as="div" className="head-row">
          <h2 className="display">Немного из шестнадцати</h2>
          <div className="eyebrow">Стадо парка</div>
        </Reveal>
        <div className="strip">
          {herd.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.06} className="card">
              <motion.div whileHover={{ y: -6, scale: 1.03 }} transition={{ duration: 0.25 }}>
                <Portrait tone={a.tone} />
              </motion.div>
              <div className="name">{a.name}</div>
              <div className="trait-cap">{a.trait}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
