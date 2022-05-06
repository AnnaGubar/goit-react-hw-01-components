import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.item}
            style={{
              backgroundColor: `rgb(${getRandom(0, 255)}, ${getRandom(
                0,
                255,
              )}, ${getRandom(0, 255)})`,
            }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,

  //🔆 данный тип подходит для любого вида data
  // stats: PropTypes.any.isRequired,

  // ✅ массив обьектов конкретной структуры
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export default Statistics;
