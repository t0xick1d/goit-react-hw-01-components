import PropTypes from 'prop-types';

import style from './Statistics.module.css';

import StatistickItem from './StatisticsItem';

export default function Statistick({ title, stats }) {
  return (
    <section
      className={title ? style.statistickContainer : style.statistickAlone}
    >
      {title && <h2 className={style.titleContainer}>{title}</h2>}

      <ul className={style.listStatistick}>
        {stats.map(e => {
          const randomColor = getRandomHexColor();
          return (
            <StatistickItem
              key={e.id}
              label={e.label}
              percentage={e.percentage}
              color={randomColor}
            />
          );
        })}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistick.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
