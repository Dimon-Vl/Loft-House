import './Footer.scss';

export default function Footer() {
  const menu1 = [
    "Про комплекс",
    "Район",
    "Каталог квартир",
    "Контакти",
    "Іпотека"
  ];

  const menu2 = [
    "Поселення та переїзд",
    "Сервісні послуги",
    "Екологічна стійкість",
    "Програма лояльності",
    "Інвестиційні можливості"
  ];

  const contacts = {
    address: "вулиця Межигірська, 78",
    phone: "+38 063 652-26-18",
    salesHours: "10:00 - 20:00",
    email: "vip@lofthouse.ua"
  };

  const socialLinks = [
    { href: "#", src: "youtube0.svg", alt: "YouTube" },
    { href: "#", src: "group0.svg", alt: "Facebook" },
    { href: "#", src: "group1.svg", alt: "Instagram" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__logo">
          <h1 className="footer__logo-title">LoftHouse</h1>
          <p className="footer__logo-description">ЖИЛИЙ КОМПЛЕКС</p>
        </div>

        <nav className="footer__about">
          <ul>
            {menu1.map((item, index) => (
              <li key={index} className='footer__item'>{item}</li>
            ))}
          </ul>
        </nav>

        <nav className="footer__program">
          <ul>
            {menu2.map((item, index) => (
              <li key={index} className='footer__item'>{item}</li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <address>
            <p className='footer__item'>Адреса: {contacts.address}</p>
            <p className='footer__item'>Телефон: <a href={`tel:${contacts.phone}`}>{contacts.phone}</a></p>
            <p className='footer__item'>Відділ продажів: {contacts.salesHours}</p>
            <p className='footer__item'>
              E-mail: <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </p>
          </address>

          <div className="footer__social">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href}>
                <img src={link.src} alt={link.alt} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
