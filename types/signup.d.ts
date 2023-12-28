export type SignupValues = {
  lastname?: string;
  firstname: string;
  birth: BirthType;
  gender: "r" | "m" | "f";
  email: string;
  id: IdType;
};

export type IdType = {
  id: string;
  pw: string;
};

export type usersIdDB = {
  id: string;
};

export type BirthType = {
  year: number;
  month: string;
  day: number;
};
