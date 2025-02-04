import { MoreOutlined, SendOutlined } from "@ant-design/icons";
import { Avatar, Input, Layout, Rate, Tooltip } from "antd";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { chatbotNilson } from "../../../assets";
import SiderBar from "../../components/siderbar/SiderBar";
import { ChatBotContext } from "./ChatBot";
import { IChatBotViewProps } from "./ChatBot.model";
import { ChatContent, ChatFooter, ChatHeader, ChatInfo, ChatItem, Container, Message, SidebarHeader, StyledSider } from "./ChatBot.style";

export default function ChatBotView({
  handleSendMessage,
  handleStarRating,
}: IChatBotViewProps) {

  const {
    messages,
    userStep,
    setFormikValues,
    formikRef,
    isTyping,
    formikValues,
  } = useContext(ChatBotContext);

  return (
    <Container>
      <Helmet title="ChatBot" />

      <div className="header" />

      <div className="chatbot-container">
        <SiderBar />

        <StyledSider>
          <SidebarHeader>
            <h1 className="chatbot-title">Conversas</h1>
            <MoreOutlined className="chatbot-title-icon" />
          </SidebarHeader>

          <ChatItem>
            <Avatar className="avatar" src={chatbotNilson} />
            <ChatInfo>
              <strong>ChatNilson</strong>
              <span>Óla , eu sou o ChatNilson...</span>
            </ChatInfo>
          </ChatItem>
        </StyledSider>

        <Layout>
          <ChatHeader>
            <Avatar className="avatar" src={chatbotNilson} />
            <span className="avatar-text">ChatNilson</span>
          </ChatHeader>

          <ChatContent>
            {messages.map((message, index) => (
              <Message key={index} isUser={message.sender === "user"}>
                {message.text}
              </Message>
            ))}

            {isTyping && (
              <Message isUser={false}>
                <span className="typing-indicator">Digitando...</span>
              </Message>
            )}
          </ChatContent>

          <ChatFooter>
            {userStep === 0 && (
              <Input
                id="name"
                type="text"
                value={formikValues.name}
                onPressEnter={handleSendMessage}
                className="input-footer"
                placeholder="Nome completo"
                onChange={(e) => {
                  setFormikValues({ ...formikValues, name: e.target.value });
                  formikRef.current?.setFieldValue('name', e.target.value);
                }}
              />
            )}

            {userStep === 1 && (
              <Input
                id="city"
                type="text"
                value={formikValues.city}
                onPressEnter={handleSendMessage}
                className="input-footer"
                placeholder="Cidade e estado"
                onChange={(e) => {
                  setFormikValues({ ...formikValues, city: e.target.value });
                  formikRef.current?.setFieldValue('city', e.target.value);
                }}
              />
            )}

            {userStep === 2 && (
              <Input
                id="birthdate"
                type='date'
                value={formikValues.birthdate}
                onPressEnter={handleSendMessage}
                className="input-footer"
                placeholder="Data de nascimento"
                onChange={(e) => {
                  setFormikValues({ ...formikValues, birthdate: e.target.value });
                  formikRef.current?.setFieldValue('birthdate', e.target.value);
                }}
              />
            )}

            {userStep === 3 && (
              <Input
                id="email"
                type="email"
                value={formikValues.email}
                onPressEnter={handleSendMessage}
                className="input-footer"
                placeholder="E-mail"
                onChange={(e) => {
                  setFormikValues({ ...formikValues, email: e.target.value });
                  formikRef.current?.setFieldValue('email', e.target.value);
                }}
              />
            )}

            {userStep === 4 && (
              <Rate
                id="rating"
                onChange={handleStarRating}
                value={formikValues.rating}
                style={{ marginLeft: 8 }}
              />
            )}

            <Tooltip title="Enviar mensagem">
              <SendOutlined
                className="button-footer"
                onClick={handleSendMessage}
              />
            </Tooltip>

          </ChatFooter>
        </Layout>

      </div>
    </Container>
  );
}