import { PasswordVisibilityProps, StepActionProps } from '@/utils/types';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { HiOutlineMail, HiOutlineUser } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import StepActions from './StepActions';

type AuthenticationInfoProps = StepActionProps & PasswordVisibilityProps;

const AuthenticationInfo = ({
  step,
  prevStep,
  nextStep,
  handleMouseDownPassword,
  handleClickShowPassword,
  showPassword,
}: AuthenticationInfoProps) => {
  return (
    <>
      <h2 className="font-semibold mb-4 text-2xl text-center">
        Create New Account
      </h2>
      <Field name="email">
        {({ field, meta }: FieldProps) => {
          // console.log(meta);

          return (
            <Box>
              <TextField
                type="email"
                label="Email"
                error={meta.touched && meta.error ? true : false}
                id="outlined-start-adornment"
                sx={{ m: 1, width: '95%' }}
                {...field}
                helperText={<ErrorMessage name="email" />}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HiOutlineMail />
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
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

export default AuthenticationInfo;
