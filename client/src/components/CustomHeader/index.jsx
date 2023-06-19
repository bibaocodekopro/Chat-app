import {ChatBubbleLeftRightIcon, PhoneIcon} from "@heroicons/react/24/solid";
// eslint-disable-next-line no-unused-vars
import React from 'react';
const CustomHeader = (chat) => {

  // console.log(chat, chat.chat.description);
  return (
    <div>
       <div className='chat-header'> 
              <div className='flexbetween'>
                     <ChatBubbleLeftRightIcon className='icon-chat'/>
                     <h3 className="header-text">{chat.chat.title}</h3>
              </div>
              <div className='flexbetween'>
                     <PhoneIcon className='icon-phone'/>
                   {chat.chat.description !== undefined ? (<p className='description-text'>{chat.chat.description}</p>) :
                   ( <p className='description-text'>No chat selected</p>)}
           
              </div>
       </div>
    
    </div>
  )
}

export default CustomHeader