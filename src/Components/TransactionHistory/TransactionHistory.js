// import PropTypes from 'prop-types';
// import s from './Statistics.module.css';

const TransactionHistory = ({ transactions }) => {
  // const TransactionHistory = ({ id, type, amount, currency }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Statistics.propTypes = {
//   title: PropTypes.string,

//   //🔆 данный тип подходит для любого вида data
//   stats: PropTypes.any.isRequired,
// };

export default TransactionHistory;
