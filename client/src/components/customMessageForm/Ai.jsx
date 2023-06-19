import { usePostAiTextMutation } from "@/state/api";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import MessageFormUI from './MessageFormUI'
// eslint-disable-next-line react/prop-types
const Ai = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [trigger]= usePostAiTextMutation();
  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: at,
      created: date,
      // eslint-disable-next-line react/prop-types
      sender_username: props.username,
      text: message,
      // eslint-disable-next-line react/prop-types
      activeChatId: activeChat.id,
    };

    // eslint-disable-next-line react/prop-types
    props.onSubmit(form);
    trigger(form);
    setMessage("");
    setAttachment("");

  };
  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default Ai;