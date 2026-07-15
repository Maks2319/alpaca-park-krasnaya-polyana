import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import './tickets.css'

const tickets = [
  {
    kind: 'Взрослый',
    price: '900',
    items: ['Вход без ограничения по времени', 'Порция корма включена', '16+ лет'],
  },
  {
    kind: 'Детский, до 12 лет',
    price: '500',
    items: ['Порция корма включена', 'Сопровождение взрослого обязательно'],
  },
  {
    kind: 'Семейный',
    price: '2400',
    items: ['2 взрослых + 2 детских билета', 'Корм на всю семью', 'Экономия 400 ₽'],
    featured: true,
  },
]

export default function Tickets() {
  return (
    <section className="section tickets-section" id="tickets">
      <div className="wrap">
        <Reveal as="div" className="head-row">
          <h2 className="display">Билеты</h2>
          <div className="eyebrow">Без предварительной записи</div>
        </Reveal>
        <div className="ticket-row">
          {tickets.map((t, i) => (
            <Reveal key={t.kind} delay={i * 0.08}>
              <motion.div
                className={`ticket${t.featured ? ' featured' : ''}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <div className="top">
                  <div className="kind">{t.kind}</div>
                  <div className="price tabular">
                    {t.price} <span className="cur">₽</span>
                  </div>
                </div>
                <div className="perf" />
                <div className="bottom">
                  <ul>
                    {t.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
