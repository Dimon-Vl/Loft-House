import './Header.scss'

export default function Header() {
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
                            <li className="header__menu-item"><a href="#">Про комплекс</a></li>
                            <li className="header__menu-item"><a href="#">Район</a></li>
                            <li className="header__menu-item"><a href="#">Каталог квартир</a></li>
                            <li className="header__menu-item"><a href="#">Іпотека</a></li>
                            <li className="header__menu-item"><a href="#">Контакти</a></li>
                        </ul>
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