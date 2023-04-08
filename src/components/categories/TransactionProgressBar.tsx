import React from 'react';

type Props = {};

const TransactionProgressBar = ({
  transactionAmount,
  categoryBudget,
  totalTransactionAmount,
}) => {
  const percentage = (transactionAmount / totalTransactionAmount) * 100;
  const budgetAmount = (percentage / 100) * categoryBudget;
  const spentPercentage = (transactionAmount / budgetAmount) * 100;

  return (
    <div className="transaction-progress-bar">
      <div className="progress-bar" style={{ width: `${spentPercentage}%` }} />
      <div className="progress-label">{`${spentPercentage}%`}</div>
    </div>
  );
};

export default TransactionProgressBar;
