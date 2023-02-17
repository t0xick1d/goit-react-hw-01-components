import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function StatistickItem({ label, percentage, color }) {
  return (
    <li className={style.item} style={{ backgroundColor: color }}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
}

StatistickItem.prototype = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.number.isRequired,
};
