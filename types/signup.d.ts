export type SignupValues = {
  lastname?: string;
  firstname: string;
  birth: {
    year: number;
    month: string;
    date: number;
  };
  gender: "r" | "m" | "f";
  email: string;
  id: string;
  pw: string;
};

export type usersIdDB = {
  id: string;
};
