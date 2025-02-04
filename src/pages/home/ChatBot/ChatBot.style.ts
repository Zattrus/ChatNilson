import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: #dbd8d4;

  .header {
    top: 0px;
    left: 0px;
    z-index: 0;
    width: 100%;
    height: 127px;
    background-color: #00a884;
    position: fixed;
  }

  .chatbot-container {
    position: fixed;
    top: 19px;
    left: 0px;
    right: 0px;
    width: calc(100% - 38px);
    max-width: 1600px;
    height: calc(100% - 38px);
    margin: 0 auto;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    border: 1px solid #e9edef;
  } 

`;

const StyledSider = styled.div`
  background: #ffffff;
  border-right: 1px solid #e9edef;
  width: 320px;
`;

const SidebarHeader = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid #ddd;

  h1 {
    font-size: 1.375rem;
    text-align: initial;
    font-weight: bold;
    line-height: 21px;
    color: #111b21;
  }

  .chatbot-title-icon {
    font-size: 20px;
    cursor: pointer;
  }
`;

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
  background: #f0f2f5;
  height: 72px;

  .avatar {
    background-color: #1890ff;
    height: 49px;
    width: 49px;
  }
`;

const ChatInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 17px;
    font-weight: normal;
    line-height: 21px;
    color: #111b21;
    text-align: left;
    word-wrap: break-word;
  }

  span {
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ChatHeader = styled.div`
  background: white;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #ddd;
  height: 64px;

  span {
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 10px;
  }
`;

const ChatContent = styled.div`
  flex: 1;
  background: #e5ddd5;
  padding: 16px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div<{ isUser: boolean }>`
  max-width: 60%;
  padding: 8px 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  align-self: ${(props) => (props.isUser ? `flex-end` : 'flex-start')};
  background-color: ${(props) => (props.isUser ? `#dcf8c6` : '#ffffff')};
`;

const ChatFooter = styled.div`
  display: flex;
  flex-direction: row;
  height: 62px;
  background: white;
  padding: 8px 16px;
  border-top: 1px solid #ddd;
  align-items: center;
  background-color: #f0f2f5;
  align-items: center;

  .input-footer {
    height: 44px;
  }

  .button-footer {
    background-color: transparent;
    color: #54656f;
    border: none;
    display: flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  .input-error {
    border: 1px solid red;
  }
`;

export {
  ChatContent, ChatFooter, ChatHeader, ChatInfo, ChatItem, Container, Message, SidebarHeader, StyledSider
};

