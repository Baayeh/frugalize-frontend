import { getAllCategories } from '@/redux/categories/categorySlice';
import { useAppDispatch } from '@/redux/hooks';
import { addTransaction } from '@/redux/transactions/transactionSlice';
import { AddTransactionProps, CategoryProp } from '@/utils/types';
import { FormHelperText, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import * as Yup from 'yup';

const MySwal = withReactContent(Swal);

const initialValues: AddTransactionProps = {
  name: '',
  amount: '',
  category_id: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, 'Transaction name must be at least 4 characters')
    .required('Transaction name is required'),
  amount: Yup.string()
    .matches(/^[0-9]+$/, 'Amount must be digits')
    .required('Amount is required'),
  category_id: Yup.string().required('Select a category'),
});

const AddTransaction = () => {
  const [categories, setCategories] = useState<[CategoryProp]>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getAllCategories()).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        setCategories(res.payload);
      }
    });
  }, [dispatch]);

  const onSubmit = (values: AddTransactionProps) => {
    const token = localStorage.getItem('token');
    const data = {
      name: values.name,
      amount: values.amount,
      category_id: values.category_id,
    };

    if (token) {
      const payload = {
        data,
        token: token,
      };

      dispatch(addTransaction(payload))
        .then((res) => {
          const { message } = res.payload;
          if (res.meta.requestStatus === 'rejected') {
            MySwal.fire({
              toast: true,
              position: 'top-end',
              icon: 'error',
              title: message,
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
          } else {
            MySwal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: message,
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            }).then(() => {
              router.push('/transactions');
            });
          }
        })
        .catch((err) => {
          MySwal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Something went wrong! Please try again',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        });
    }
  };

  return (
    <section className="p-5 mt-10">
      <Button
        color="success"
        className="rounded-full w-16 h-16 absolute top-3 left-0"
        onClick={() => router.back()}
      >
        <span>
          <BsArrowLeft className="text-xl text-white" />
        </span>
      </Button>
      <div className="mt-5">
        <h1 className="text-3xl font-bold">Add a transaction</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          // console.log(formik);
          return (
            <Form>
              <div className="my-5">
                <Field name="name">
                  {({ field, meta }: FieldProps) => {
                    return (
                      <TextField
                        required
                        label="Transaction Name"
                        variant="outlined"
                        {...field}
                        sx={{ width: '100%' }}
                        helperText={<ErrorMessage name="name" />}
                        error={meta.touched && meta.error ? true : false}
                      />
                    );
                  }}
                </Field>
              </div>
              <div className="my-5">
                <Field name="amount">
                  {({ field, meta }: FieldProps) => {
                    return (
                      <TextField
                        required
                        label="Amount"
                        variant="outlined"
                        {...field}
                        sx={{ width: '100%' }}
                        helperText={<ErrorMessage name="amount" />}
                        error={meta.touched && meta.error ? true : false}
                      />
                    );
                  }}
                </Field>
              </div>

              {/* Select category */}
              <Field name="category_id">
                {({ field, meta }: FieldProps) => {
                  return (
                    <Box sx={{ minWidth: 120, mb: 5 }}>
                      <FormControl
                        fullWidth
                        error={meta.touched && meta.error ? true : false}
                      >
                        <InputLabel id="category" required>
                          Category
                        </InputLabel>
                        <Select
                          labelId="category"
                          id="category"
                          {...field}
                          label="Category"
                        >
                          <MenuItem value="">
                            <em>Select a category</em>
                          </MenuItem>
                          {categories &&
                            categories.map((category) => {
                              return (
                                <MenuItem key={category.id} value={category.id}>
                                  {category.name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                        {meta.touched && meta.error && (
                          <FormHelperText>
                            <ErrorMessage name="category_id" />
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Box>
                  );
                }}
              </Field>
              <div className="cat-submit">
                <Button
                  type="submit"
                  className="block w-full bg-green-800 p-3 rounded-full uppercase hover:bg-green-700 transition-all duration-300 ease-in-out"
                  disabled={!formik.isValid}
                >
                  Add Transaction
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default AddTransaction;
