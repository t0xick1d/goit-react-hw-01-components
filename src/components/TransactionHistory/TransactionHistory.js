import PropTypes from 'prop-types';
import style from './History.module.css';

import TransactionItemTemplate from './TransactionItemTemplate';

export default function TransactionHistory({ item }) {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr className={style.tr}>
          <th className={style.title}>Type</th>
          <th className={style.title}>Amount</th>
          <th className={style.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {item.map(e => {
          return (
            <TransactionItemTemplate
              key={e.id}
              type={e.type}
              amount={e.amount}
              currency={e.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
