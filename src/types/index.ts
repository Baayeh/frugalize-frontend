export type LoginValuesProps = {
  email: string;
  password: string;
};

export type RegisterValuesProps = {
  name: string;
  username: string;
  email: string;
  password: string;
  income: string;
};

export type StepActionProps = {
  step: number;
  prevStep: () => void;
  nextStep: () => void;
};

export type PasswordVisibilityProps = {
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
