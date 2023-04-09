import Image from 'next/image';
import React from 'react';

type SingleTransactionProp = {
  transaction: {
    id: number;
    name: string;
    amount: string;
    category: string;
    cat_image: string;
  };
};

const Transaction = ({ transaction }: SingleTransactionProp) => {
  return (
    <div className="cat-card border p-4 rounded-lg flex items-center gap-3 mb-6">
      <div className="card-img rounded-lg w-[100px] overflow-hidden">
        <Image
          src={transaction.cat_image}
          alt="Food & Drinks"
          width={100}
          height={100}
        />
      </div>
      <div className="cat-info">
        <h2 className="font-bold text-lg">{transaction.name}</h2>
        <p className="text-sm">
          Amount Spent:{' '}
          <span className="text-red-500">
            - GH₵ {parseFloat(transaction.amount).toFixed(2)}
          </span>
        </p>
        <p className="text-sm">
          Category: <span className="text-sm">{transaction.category}</span>
        </p>
      </div>
    </div>
  );
};

export default Transaction;
