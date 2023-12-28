import { BirthType } from "../../types/signup";

type Props = {
  date: BirthType;
};

export const convertDate = ({ date }: Props) => {
  console.log(date);
  const { year, month, day } = date;
};
