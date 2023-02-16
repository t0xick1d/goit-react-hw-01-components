import PropTypes from 'prop-types';

import StatistickItem from './StatisticsItem';

export default function Statistick({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(e => {
          return (
            <StatistickItem
              key={e.id}
              label={e.label}
              percentage={e.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
}

Statistick.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
