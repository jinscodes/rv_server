import { BirthType } from "../../types/signup";

type Props = {
  date: BirthType;
};

export const convertDate = ({ date }: Props) => {
  const { year, month, day } = date;
  let convertedMonth;

  switch (month) {
    case "January":
      convertedMonth = "01";
      break;
    case "Febuary":
      convertedMonth = "02";
      break;
    case "March":
      convertedMonth = "03";
      break;
    case "April":
      convertedMonth = "04";
      break;
    case "May":
      convertedMonth = "05";
      break;
    case "June":
      convertedMonth = "06";
      break;
    case "July":
      convertedMonth = "07";
      break;
    case "August":
      convertedMonth = "08";
      break;
    case "September":
      convertedMonth = "09";
      break;
    case "October":
      convertedMonth = "10";
      break;
    case "November":
      convertedMonth = "11";
      break;
    case "December":
      convertedMonth = "12";
      break;
  }

  return `${year}-${convertedMonth}-${day}`;
};
