import './Apartments.scss';

export default function Apartments() {
  const apartmentsData = [
    { icon: 'olymp', name: 'Пентхаус “Loft Олімп”', link: '#' },
    { icon: 'nice', name: 'Апартаменти “Nice Loft”', link: '#' },
    { icon: 'studio', name: 'Апартаменти “Loft Studio”', link: '#' },
    { icon: 'prestige', name: 'Loft квартира “Престиж”', link: '#' },
  ];

  return (
    <section className="apartments" aria-labelledby="apartments-title">
      <div className="apartments__container">
        <h3 id="apartments-title" className="apartments__title">
          Наші квартири
        </h3>
        <ul className="apartments__list">
          {apartmentsData.map((item, index) => (
            <li className="apartments__item" key={index}>
              <a href={item.link}>
                <div className="apartments__image-wrapper">
                  <div
                    className={`apartments__image apartments__image--${item.icon}`}
                  ></div>
                </div>
                <p className="apartments__name">{item.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
