import './Features.scss';

export default function Features() {
  const featuresData = [
    { icon: 'bench', lines: ['Поряд історичні', 'парки та сквери'] },
    { icon: 'building', lines: ['Повністю', 'облаштований'] },
    { icon: 'fountain', lines: ['10 фонтанів', 'на території'] },
    { icon: 'bicycle', lines: ['6 км', 'велодоріжок'] },
  ];

  return (
    <section className="features">
      <div className="features__container">
        <ul className="features__list">
          {featuresData.map((item, index) => (
            <li className="features__item" key={index}>
              <div className={`features__icon features__icon--${item.icon}`}></div>
              <p className="features__text">
                {item.lines[0]} <br /> {item.lines[1]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
