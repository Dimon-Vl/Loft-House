import './QuestionForm.scss'

export default function QuestionForm() {
    return (
        <section className="question-form">
            <div className="question-form__container">
                <h3 className="question-form__title">Є питання?</h3>
                <div className="question-form__content">
                    <form className="question-form__form">
                        <p className="question-form__privacy question-form__form-item">
                            *Ми нікому не передаємо ваші дані.<br />
                            І не зберігаємо ваш номер у базу.
                        </p>
                        <input type="text" className="question-form__input question-form__form-item" placeholder="Ваше ім’я" />
                        <input type="tel" className="question-form__input question-form__form-item" placeholder="Ваш телефон" />
                        <button className="question-form__button question-form__form-item">Подивитись район</button>
                    </form>
                </div>
            </div>
        </section>
    )
}