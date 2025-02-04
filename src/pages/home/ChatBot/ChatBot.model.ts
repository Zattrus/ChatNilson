import { FormikProps } from "formik";

export type IChatBotProps = object

export interface IChatBotContext {
  isTyping: boolean;
  // userInput: string;
  // rating: number;
  // userCity: string;
  // userName: string;
  // userEmail: string;
  // userBirthDate: string;
  userStep: number;
  messages: {
      sender: string, 
      text: string;
  }[];
  // setUserInput: (text: string) => void;
  formikValues: IFormValues;
  formikRef: React.MutableRefObject<FormikProps<IFormValues> | null>;
  setFormikValues: React.Dispatch<React.SetStateAction<IFormValues>>
}

export interface IChatBotViewProps {
  handleSendMessage: () => void;
  handleStarRating: (value: number) => void;
  isSubmitting: boolean;
}

export enum ChatBotStepEnum {
  NAME = 0,
  CITY = 1,
  BIRTHDATE = 2,
  EMAIL = 3,
  RATING = 4,
  FINISHED = 5,
}

export interface IFormValues {
  name : string;
  city: string
  birthdate: string
  email: string,
  rating: number,
}