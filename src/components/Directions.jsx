import Reveal from './Reveal.jsx'
import './directions.css'

const stops = [
  { title: 'Роза Хутор, нижняя станция', sub: 'начало канатной дороги' },
  { title: 'Плато 1450', sub: 'верхняя станция' },
  { title: 'Парк Альпак', sub: '4 минуты пешком' },
]

export default function Directions() {
  return (
    <section className="section directions" id="directions">
      <div className="wrap directions-wrap">
        <Reveal>
          <h2 className="display">Как добраться</h2>
          <p className="addr">
            Красная Поляна, склон хребта Аибга — рядом с верхней станцией канатной дороги «Роза
            Хутор». От канатки до загона 4 минуты пешком по грунтовой тропе.
          </p>
          <dl>
            <dt>Часы работы</dt><dd className="tabular">Ежедневно, 10:00–18:00</dd>
            <dt>Телефон</dt><dd className="tabular">+7 862 000-00-00</dd>
            <dt>Telegram</dt><dd>@parkalpaka</dd>
          </dl>
        </Reveal>
        <Reveal delay={0.15} className="route">
          {stops.map((s) => (
            <div className="stop" key={s.title}>
              <div className="dot" />
              <div className="label">
                <strong>{s.title}</strong>
                {s.sub}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
