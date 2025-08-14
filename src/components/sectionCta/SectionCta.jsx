import './SectionCta.scss'

export default function SectionCta() {
    return (
        <section className="section-cta">
            <div className="section-cta__container">
                <h3 className="section-cta__title">Бажаєте подивитись?</h3>
                <div className="section-cta__content">
                    <p className="section-cta__description">
                        ЖК LoftHouse - це проект бізнес-класу, розташований в центрі міста, на вулиці Межигірська, 78.
                        Комплекс пропонує своїм мешканцям квартири площею від 40 до 170 кв. м.
                        У будівлі буде три секції, в яких розміститься лише 56 квартир.
                    </p>
                    <form className="section-cta__form">
                        <input type="text" className="section-cta__input section-cta__form-item" placeholder="Ваше ім’я" />
                        <input type="tel" className="section-cta__input section-cta__form-item" placeholder="Ваш телефон" />
                        <p className="section-cta__privacy section-cta__form-item">
                            *Ми нікому не передаємо ваші дані.<br />
                            І не зберігаємо ваш номер у базу.
                        </p>
                        <button className="section-cta__button section-cta__form-item">Подивитись район</button>
                    </form>
                </div>
            </div>
        </section>
    )
}