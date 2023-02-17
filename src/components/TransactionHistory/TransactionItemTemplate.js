import PropTypes from 'prop-types';
import style from './History.module.css';

export default function TransactionItemTemplate({ type, amount, currency }) {
  return (
    <tr className={style.tr}>
      <td className={style.td}>{type}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{currency}</td>
    </tr>
  );
}

TransactionItemTemplate.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
