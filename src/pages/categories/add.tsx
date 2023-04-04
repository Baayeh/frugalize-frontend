import { AddCategoryProps } from '@/utils/types';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import {
  ErrorMessage,
  Field,
  FieldProps,
  Form,
  Formik,
  FormikProps,
} from 'formik';
import Image, { ImageProps } from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import * as Yup from 'yup';

const initialValues: AddCategoryProps = {
  cat_name: '',
  image: null,
};

const validationSchema = Yup.object({
  cat_name: Yup.string()
    .min(4, 'Category name must be at least 4 characters')
    .required('Category name is required'),
  image: Yup.string().required('Category image is required'),
});

const AddCategory = () => {
  const [showImg, setShowImg] = useState<string | ImageProps['src']>('');
  const [selectedImg, setSelectedImg] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const router = useRouter();

  const uploadImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    formik: FormikProps<AddCategoryProps>
  ) => {
    setIsUploading(true);

    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];

      setTimeout(() => {
        setIsUploading(false);
        setSelectedImg(file);
        setShowImg(URL.createObjectURL(file));
        setBtnDisabled(false);
        formik.setFieldValue('image', URL.createObjectURL(file));
      }, 3000);
    }
  };

  const onSubmit = (values: AddCategoryProps) => {
    console.log(values);
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
        <h1 className="text-3xl font-bold">Add new category</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          // console.log(formik.values);
          return (
            <Form>
              <div className="my-5">
                <Field name="cat_name">
                  {({ field, meta }: FieldProps) => {
                    return (
                      <TextField
                        required
                        label="Category Name"
                        variant="outlined"
                        {...field}
                        sx={{ width: '100%' }}
                        helperText={<ErrorMessage name="cat_name" />}
                        error={meta.touched && meta.error ? true : false}
                      />
                    );
                  }}
                </Field>
              </div>
              <div className="my-5">
                <Button
                  variant="contained"
                  component="label"
                  id="cat_image"
                  sx={{ width: '100%' }}
                >
                  {/* Upload Category Image */}
                  {isUploading && (
                    <svg
                      className="animate-spin ml-2 mr-3 h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  {isUploading
                    ? 'Uploading...'
                    : !isUploading && !showImg
                    ? 'Upload Category Image'
                    : showImg
                    ? 'Change image'
                    : ''}
                  <input
                    type="file"
                    required
                    accept="image/*"
                    hidden
                    name="image"
                    onChange={(e) => uploadImage(e, formik)}
                  />
                </Button>

                {showImg ? (
                  <div className="my-5 p-3 border flex justify-center items-center gap-7 rounded-lg">
                    <Image
                      src={showImg}
                      alt="Category Thumbnail"
                      width={100}
                      height={100}
                      className="w-[8rem] h-[8rem]"
                    />
                    <p>{selectedImg?.name}</p>
                  </div>
                ) : (
                  <p className="my-5 p-3 border flex justify-center items-center gap-10 rounded-lg">
                    No image uploaded
                  </p>
                )}
              </div>
              <div className="cat-submit">
                <Button
                  type="submit"
                  className="block w-full bg-green-800 p-3 rounded-full uppercase hover:bg-green-700 transition-all duration-300 ease-in-out"
                  disabled={btnDisabled}
                >
                  Create Category
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default AddCategory;
