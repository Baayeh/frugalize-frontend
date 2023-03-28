import { LoginValuesProps } from '@/types';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BsApple, BsArrowLeft } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineUser } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import * as Yup from 'yup';

const initialValues: LoginValuesProps = {
  email: 'admin@example.com',
  password: 'admbaayeh',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
    //   'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    // )
    .required('Password is required'),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const authenticateUser = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 3000);
  };

  const onSubmit = (values: LoginValuesProps) => {
    if (values.email && values.password) {
      authenticateUser();
    }
  };

  return (
    <section
      id="register-container"
      className="flex flex-col justify-center items-center h-screen"
    >
      <Button
        color="success"
        className="!rounded-full w-16 h-16 !absolute top-3 left-3"
        onClick={() => router.back()}
      >
        <span>
          <BsArrowLeft className="text-2xl text-white" />
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
        {/* <img
          src="https://res.cloudinary.com/dskl0qde4/image/upload/v1678001270/undraw_my_app_re_gxtj_nlutpw.svg"
          alt="register logo"
          className="w-[8rem] mx-auto"
        /> */}
      </div>

      <div className="form-container mt-6 w-full">
        <h2 className="font-semibold text-2xl text-center">
          Login to Your Account
        </h2>

        <div className="omniAuth-container mt-6 px-4">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              // console.log(formik);
              return (
                <Form>
                  <Field name="email">
                    {({ field, meta }: FieldProps) => {
                      // console.log(meta);

                      return (
                        <Box>
                          <TextField
                            label="Email"
                            error={meta.touched && meta.error ? true : false}
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '95%' }}
                            {...field}
                            helperText={<ErrorMessage name="email" />}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <HiOutlineUser />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                      );
                    }}
                  </Field>
                  <Field name="password">
                    {({ field, meta }: FieldProps) => {
                      // console.log(meta);

                      return (
                        <Box>
                          <TextField
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            error={meta.touched && meta.error ? true : false}
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '95%' }}
                            {...field}
                            helperText={<ErrorMessage name="password" />}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <RiLockPasswordLine />
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                      );
                    }}
                  </Field>
                  <button
                    type="submit"
                    className="w-full p-3 bg-[#3ff366] rounded-full text-lg font-bold text-black mt-2 hover:bg-[#2fb94d] transition-all duration-300 ease-in-out flex items-center justify-center min-w-max mx-auto"
                  >
                    {loading && (
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
                          stroke-width="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                    {loading ? 'Authenticating...' : 'Sign In'}
                  </button>
                </Form>
              );
            }}
          </Formik>
          <div className="forgot-pass text-center my-3">
            <Link href="/auth/forgot" className="text-primary underline">
              Forgot Password?
            </Link>
          </div>
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
              Don&apos;t have an account?{' '}
              <Link
                href={'/auth/register'}
                className="text-white font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
