import Reveal from './Reveal.jsx'
import './traits.css'

const traits = [
  {
    word: 'Тихо',
    text: 'Альпаки почти не издают звуков — только тихое гудение, когда им хорошо. Здесь нет очередей и громкоговорителей.',
    color: 'var(--accent-2)',
  },
  {
    word: 'Близко',
    text: 'Между вами и стадом нет забора — только миска с кормом. Можно расчесать шерсть и заглянуть в жёлтые глаза.',
    color: 'var(--accent)',
  },
  {
    word: 'Высоко',
    text: 'Загон стоит на плато на высоте 1450 метров — за спиной у альпак открывается вид на весь хребет Аибга.',
    color: 'var(--tan)',
  },
]

export default function Traits() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="lead">
          <div className="eyebrow">Почему сюда возвращаются</div>
          <p>
            Парк маленький — не зоопарк с вольерами, а открытый загон на склоне, где можно час
            провести рядом с животными, а не пройти мимо них.
          </p>
        </Reveal>
        <div className="grid3">
          {traits.map((t, i) => (
            <Reveal key={t.word} delay={i * 0.1} className="trait">
              <div className="word display" style={{ color: t.color }}>
                {t.word}
              </div>
              <p>{t.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
