import PropTypes from 'prop-types';

import TransactionItemTemplate from './TransactionItemTemplate';

export default function TransactionHistory({ item }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
