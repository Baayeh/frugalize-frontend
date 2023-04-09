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
  name: string;
  cat_budget: string;
};

export type AddTransactionProps = {
  name: string;
  amount: string;
  category_id: string;
};

export type NewUserProps = {
  name: string;
  username: string;
  income: number;
  email: string;
};

export type NewCategoryProps = {
  data: FormData;
  token: string;
};

export type NewTransactionProps = {
  data: {
    name: string;
    amount: string;
    category_id: string;
  };
  token: string;
};

export type CategoryProp = {
  id: number;
  name: string;
  cat_budget: string;
  image_url: string;
  cat_total_expenses: string;
};

export type LatestProps = {
  id: number;
  name: string;
  amount: string;
  category: string;
  cat_image: string;
  created_at: string;
};
