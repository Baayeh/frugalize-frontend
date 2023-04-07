import Category from '@/components/categories/Category';
import { getAllCategories } from '@/redux/categories/categorySlice';
import { useAppDispatch } from '@/redux/hooks';
import { CategoryProp } from '@/utils/types';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

type CategoriesProps = {
  categories: [CategoryProp];
};

const AllCategories = () => {
  const [categories, setCategories] = useState<CategoriesProps['categories']>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getAllCategories()).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        setCategories(res.payload);
      }
    });
  }, [dispatch]);

  return (
    <section>
      <div className="flex justify-between items-center p-4">
        <Button
          className="w-16 h-16 rounded-full"
          onClick={() => router.back()}
        >
          <span>
            <BsArrowLeft className="text-xl text-white" />
          </span>
        </Button>
        <Button
          onClick={() => router.push('/categories/add')}
          className="bg-white text-black text-sm font-bold uppercase px-3 py-2 rounded hover:bg-gray-300 transition-all duration-300 ease-in-out"
        >
          Add new
        </Button>
      </div>
      <section className="p-4">
        <h1 className="font-bold text-xl mb-4">All Categories</h1>
        {categories &&
          categories.map((category) => {
            return (
              <React.Fragment key={category.id}>
                <Category category={category} />
              </React.Fragment>
            );
          })}
      </section>
    </section>
  );
};

export default AllCategories;
