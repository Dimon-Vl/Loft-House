import './Header.scss'

export default function Header() {

    const menuItems = [
        { title: 'Про комплекс', link: '#' },
        { title: 'Район', link: '#' },
        { title: 'Каталог квартир', link: '#' },
        { title: 'Іпотека', link: '#' },
        { title: 'Контакти', link: '#' },
    ];

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__hero">
                    <div className="header__logo">
                        <h1 className="header__logo-title">LoftHouse</h1>
                        <p className="header__logo-description">ЖИЛИЙ КОМПЛЕКС</p>
                    </div>
                    <nav className="header__menu">
                        <ul className="header__menu-items">
                            {menuItems.map((item, index) => (
                                <li className="header__menu-item" key={index}>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="header__menu-item--phone"><a href="#">Меню</a></div>
                    </nav>
                </div>
                <div className="header__content">
                    <h2 className="header__company-description">Жилий комплекс в <br /> історичному центрі</h2>
                    <div className="header__mouse">
                    </div>
                    <address className="header__contact">
                        <div className="header__contact-address">вулиця Межигірська, 78</div>
                        <div className="header__contact-phone">+38 (063) 652-26-18</div>
                    </address>
                </div>
            </div>
        </header>
    )
}