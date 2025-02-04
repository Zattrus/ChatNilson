/* eslint-disable react-refresh/only-export-components */
import { message } from 'antd';
import { Form, Formik, FormikProps } from 'formik';
import { createContext, useRef, useState } from 'react';
import * as Yup from 'yup';
import { ChatBotStepEnum, IChatBotContext, IFormValues } from './ChatBot.model';
import ChatBotView from './ChatBot.view';

export const ChatBotContext = createContext({} as IChatBotContext);

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: "chatbot", text: "Olá, eu sou o chatNilson, tudo bem? Preciso saber seu nome e sobrenome" },
  ]);

  const formikRef = useRef<FormikProps<IFormValues> | null>(null);

  const validationSchemas = Yup.object().shape({
    name: Yup.string()
      .required("Por favor, insira seu nome.")
      .matches(/^[a-zA-ZÀ-ÿ\s]*$/, "O nome não pode conter números.")
      .test('has-sobrenome', 'Por favor, insira o sobrenome.', value => {
        return value ? value.trim().split(/\s+/).length > 1 : false;
      }),
    city: Yup.string()
      .required("Por favor, insira sua cidade e estado.")
      .matches(/^[a-zA-ZÀ-ÿ\s]*$/, "A cidade não pode conter números."),
    birthdate: Yup.date()
      .required("Por favor, insira sua data de nascimento.")
      .max(new Date(), "A data de nascimento não pode ser no futuro.")
      .test('valid-date', 'Data de nascimento inválida.', (value) => {
        if (!value) return false;

        const [day, month, year] = value.toISOString().slice(0, 10).split("/");
        const date = new Date(`${year}-${month}-${day}`);
        const minDate = new Date('1900-01-01');
        const maxDate = new Date();

        return date >= minDate && date <= maxDate;
      }),
    email: Yup.string().email("E-mail inválido.").required("Por favor, insira seu e-mail."),
    rating: Yup.number().min(1).max(5).required("Por favor, avalie o processo.")
  });

  const [formikValues, setFormikValues] = useState<IFormValues>({
    name: '',
    city: '',
    birthdate: '',
    email: '',
    rating: 0
  });

  const [userStep, setUserStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    const currentField = Object.keys(formikValues)[userStep];
    const currentValue = formikValues[currentField as keyof IFormValues];

    try {
      await validationSchemas.validateAt(currentField, { [currentField]: currentValue });

      if (!currentValue && userStep !== ChatBotStepEnum.RATING && userStep !== ChatBotStepEnum.FINISHED) {
        message.warning("Por favor, preencha o campo.");
        return;
      }

      setMessages((prevMessages) => [...prevMessages, { sender: "user", text: String(currentValue) }]);
      setIsTyping(true);

      setTimeout(() => {
        let botMessage = "";

        switch (userStep) {
          case ChatBotStepEnum.NAME:
            botMessage = `Que satisfação, ${currentValue}, agora eu sei seu nome. Qual cidade e estado você mora?`;
            setUserStep(ChatBotStepEnum.CITY);
            break;
          case ChatBotStepEnum.CITY:
            botMessage = "Legal, agora sabemos sua cidade e estado. Quando foi que você nasceu?";
            setUserStep(ChatBotStepEnum.BIRTHDATE);
            break;
          case ChatBotStepEnum.BIRTHDATE:
            botMessage = "Agora me fala teu e-mail, por gentileza.";
            setUserStep(ChatBotStepEnum.EMAIL);
            break;
          case ChatBotStepEnum.EMAIL:
            botMessage = "Você finalizou o teste! Faça uma avaliação sobre o processo que realizou até aqui. Nós agradecemos!";
            setUserStep(ChatBotStepEnum.RATING);
            break;
          default:
            break;
        }

        setMessages((prevMessages) => [...prevMessages, { sender: "chatbot", text: botMessage }]);
        setIsTyping(false);
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        message.warning(error.message);
      } else {
        message.warning("Ocorreu um erro desconhecido.");
      }
    }
  };

  const handleStarRating = (value: number) => {
    if (userStep === ChatBotStepEnum.FINISHED) return;

    console.log("TESTE", value)

    setFormikValues((prev) => ({ ...prev, rating: value }));
    setMessages((prevMessages) => [...prevMessages, { sender: "user", text: `Avaliação: ${value} estrelas` }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { sender: "chatbot", text: "Obrigado pela sua avaliação!" }]);
      setIsTyping(false);
    }, 3000);

    setUserStep(ChatBotStepEnum.FINISHED);
  };

  const sharedValues: IChatBotContext = {
    messages,
    formikValues,
    userStep,
    isTyping,
    formikRef,
    setFormikValues
  };

  const onSubmit = async (values: IFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("values", values);
  };

  return (
    <ChatBotContext.Provider value={sharedValues}>
      <Formik
        innerRef={formikRef}
        onSubmit={onSubmit}
        initialValues={formikValues}
      >
        {({ isSubmitting }) => (
          <Form>
            <ChatBotView
              isSubmitting={isSubmitting}
              handleStarRating={handleStarRating}
              handleSendMessage={handleSendMessage}
            />
          </Form>
        )}
      </Formik>
    </ChatBotContext.Provider>
  );
}