import { StepActionProps } from '@/utils/types';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { HiOutlineUser } from 'react-icons/hi';
import StepActions from './StepActions';

const PersonalInfo = ({ step, prevStep, nextStep }: StepActionProps) => {
  return (
    <>
      <h2 className="font-semibold mb-4 text-2xl text-center">
        Create New Account
      </h2>
      <Field name="name">
        {({ field, meta }: FieldProps) => {
          // console.log(meta);

          return (
            <Box>
              <TextField
                label="Full Name"
                error={meta.touched && meta.error ? true : false}
                id="outlined-start-adornment"
                sx={{ m: 1, width: '95%' }}
                {...field}
                helperText={<ErrorMessage name="name" />}
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
      <Field name="username">
        {({ field, meta }: FieldProps) => {
          // console.log(meta);

          return (
            <Box>
              <TextField
                label="Username"
                error={meta.touched && meta.error ? true : false}
                id="outlined-start-adornment"
                sx={{ m: 1, width: '95%' }}
                {...field}
                helperText={<ErrorMessage name="username" />}
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
      <StepActions step={step} prevStep={prevStep} nextStep={nextStep} />
    </>
  );
};

export default PersonalInfo;
