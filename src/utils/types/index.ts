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

export type AddCategoryProps = {
  cat_name: string;
  image: string | null;
};

export type AddTransactionProps = {
  transaction_name: string;
  amount: string;
  category_id: string;
};

export type NewUserProps = {
  name: string;
  username: string;
  income: number;
  email: string;
}
