import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.array,
};
