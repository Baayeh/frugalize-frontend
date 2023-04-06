import { CategoryProp } from '@/utils/types';
import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

type SingleCategoryProp = {
  category: CategoryProp;
};

const Category = ({ category }: SingleCategoryProp) => {
  return (
    <div className="cat-card border p-4 rounded-lg flex items-center gap-3 mb-6">
      <div className="card-img rounded-lg w-[100px] overflow-hidden">
        <Image src={category.image_url} alt="Food & Drinks" width={100} height={100} />
      </div>
      <div className="cat-info">
        <h2 className='font-bold text-lg'>{category.name}</h2>
        <p className='text-sm'>Budget Allocated: <span className='text-green-500'>GH₵ {(parseFloat(category.cat_budget).toFixed(2))}</span></p>
        <p className='text-sm'>Amount Spent: <span className='text-red-500'>- GH₵ 20</span></p>
        <Button variant='outlined' className='mt-3 block w-full'>View More</Button>
      </div>
    </div>
  );
};

export default Category;
