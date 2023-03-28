import AuthenticationInfo from '@/components/register/AuthenticationInfo';
import IncomeInfo from '@/components/register/IncomeInfo';
import PersonalInfo from '@/components/register/PersonalInfo';
import { RegisterValuesProps } from '@/types';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsApple, BsArrowLeft, BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import * as Yup from 'yup';

const initialValues: RegisterValuesProps = {
  name: '',
  username: '',
  email: '',
  password: '',
  income: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(5, 'Name should be at least 5 characters')
    .required('Name is required'),
  username: Yup.string()
    .min(5, 'Username should be at least 5 characters')
    .required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
    //   'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    // )
    .required('Password is required'),
  income: Yup.string()
    .matches(/^[0-9]+$/, 'Transaction ID must be digits')
    .min(3, 'Income must have at least 3 digits')
    .required('Income is required'),
});

const Register = () => {
  const [step, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const prevStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (values: RegisterValuesProps) => {
    console.log(values);
  };

  const renderComponents = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo step={step} prevStep={prevStep} nextStep={nextStep} />
        );
      case 2:
        return <AuthenticationInfo />;
      case 3:
        return <IncomeInfo />;
      default:
        return (
          <PersonalInfo step={step} prevStep={prevStep} nextStep={nextStep} />
        );
    }
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <Button
        color="success"
        className="!rounded-full w-16 h-16 !absolute top-3 left-3"
        href="/auth"
      >
        <span>
          <BsArrowLeft className="text-xl text-white" />
        </span>
      </Button>
      <div className="login-logo">
        <Image
          src="https://res.cloudinary.com/dskl0qde4/image/upload/v1678001270/undraw_my_app_re_gxtj_nlutpw.svg"
          alt="register logo"
          className="w-[8rem] mx-auto"
          width={128}
          height={128}
        />
      </div>

      <div className="omniAuth-container w-full mt-6 px-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            // console.log(formik);
            return <Form>{renderComponents()}</Form>;
          }}
        </Formik>
        <div className="w-[80%] mx-auto">
          <Divider className="py-4 text-sm text-slate-500">
            or continue with
          </Divider>
        </div>
        <div className="omniAuth flex justify-center gap-4">
          <button className="block bg-[#3b3b3b] p-4 rounded-2xl hover:bg-[#555555] transition-all duration-300 ease-in-out">
            <span>
              <BsApple />
            </span>
          </button>
          <button className="block bg-[#3b3b3b] p-4 rounded-2xl hover:bg-[#555555] transition-all duration-300 ease-in-out">
            <span>
              <FcGoogle />
            </span>
          </button>
        </div>
        <div className="my-2 text-center">
          <p className="text-slate-400 text-sm">
            Already have an account?{' '}
            <Link
              href={'/auth/login'}
              className="text-white font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
