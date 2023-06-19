//import React from 'react';
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced';
import Header from "@/components/CustomHeader/index";
import StandardMessageForm from "@/components/customMessageForm/StandardMessageForm";
import Ai from "@/components/customMessageForm/Ai";
import AiCode from "@/components/customMessageForm/AiCode";
import AiAssist from '@/components/customMessageForm/AiAssist';
const Chat = () => {
  const chatProps= useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
      "testuser1",
      "1231121"
  )
  return (
      <div style={{flexBasis:"100%"}}>
        <MultiChatSocket
          {...chatProps}
        />
        <MultiChatWindow 
          {...chatProps}
          style={{height:"100vh"}}
          renderChatHeader={(chat) =><Header chat={chat}/>}
          renderMessageForm={(props) =>{
              if(chatProps.chat?.title.startsWith("AiChat_")){
                return <Ai props={props} activeChat={chatProps.chat}/>
              }
                if(chatProps.chat?.title.startsWith("AiCode_")){
                return <AiCode props={props} activeChat={chatProps.chat}/>
              }
                 if(chatProps.chat?.title.startsWith("AiAssist_")){
                return <AiAssist props={props} activeChat={chatProps.chat}/>
              }
              return (
                <StandardMessageForm  props={props} activeChat={chatProps.chat}/>
              )
            }}
        />
      </div>
  )
}

export default Chat;