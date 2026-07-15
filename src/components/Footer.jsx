import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="word display">Парк Альпак</div>
      <div className="links">
        <a href="#about">О парке</a>
        <a href="#tickets">Билеты</a>
        <a href="#directions">Как добраться</a>
      </div>
      <div>© Парк Альпак, 2026</div>
    </footer>
  )
}
