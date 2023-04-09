import { StepActionProps } from '@/utils/types';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, FieldProps } from 'formik';
import React from 'react';
import StepActions from './StepActions';

const IncomeInfo = ({ step, prevStep, nextStep }: StepActionProps) => {
  return (
    <>
      <h2 className="font-semibold mb-4 text-2xl text-center">
        Your Monthly Income
      </h2>
      <Field name="income">
        {({ field, meta }: FieldProps) => {
          // console.log(meta);

          return (
            <Box>
              <TextField
                type="text"
                label="Income"
                error={meta.touched && meta.error ? true : false}
                id="outlined-start-adornment"
                sx={{ m: 1, width: '95%' }}
                {...field}
                helperText={<ErrorMessage name="income" />}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">GHC</InputAdornment>
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

export default IncomeInfo;
