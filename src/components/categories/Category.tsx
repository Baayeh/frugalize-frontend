'use client';

import { CategoryProp } from '@/utils/types';
import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type SingleCategoryProp = {
  category: CategoryProp;
};

const Category = ({ category }: SingleCategoryProp) => {
  const [isSinglePath, setIsSinglePath] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/categories/[id]') {
      setIsSinglePath(true);
    } else {
      setIsSinglePath(false);
    }
  }, [isSinglePath, router]);

  return (
    <div
      className={`${
        isSinglePath ? 'bg-green-400 text-slate-900' : 'border'
      } cat-card p-4 rounded-lg flex items-center gap-3 mb-6`}
    >
      <div className="card-img rounded-lg w-[100px] overflow-hidden">
        <Image
          src={category.image_url}
          alt="Food & Drinks"
          width={100}
          height={100}
        />
      </div>
      <div className="cat-info">
        <h2 className="font-bold text-lg">{category.name}</h2>
        <p className="text-sm">
          Budget Allocated:{' '}
          <span className={`${isSinglePath ? 'text-black font-semibold' : 'text-green-500'}`}>
            GH₵ {parseFloat(category.cat_budget).toFixed(2)}
          </span>
        </p>
        <p className="text-sm">
          Amount Spent:{' '}
          <span className={`${isSinglePath ? 'font-semibold' : ''} text-red-500`}>
            GH₵ {parseFloat(category.cat_total_expenses).toFixed(2)}
          </span>
        </p>
        {!isSinglePath && (
          <Button
            onClick={() => router.push(`/categories/${category.id}`)}
            variant="outlined"
            className="mt-3 block text-center w-full"
          >
            View More
          </Button>
        )}
      </div>
    </div>
  );
};

export default Category;
