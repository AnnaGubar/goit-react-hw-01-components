import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{
              backgroundColor: `rgb(${getRandom(0, 255)}, ${getRandom(
                0,
                255,
              )}, ${getRandom(0, 255)})`,
            }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,

  //🔆 данный тип подходит для любого вида data
  stats: PropTypes.any.isRequired,
};

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export default Statistics;
