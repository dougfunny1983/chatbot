import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import brendaIA from "./brendaIA";

import "react-chat-widget/lib/styles.css";

import logo from "./brenda.png";

const App = () => {
  useEffect(() => {
    addResponseMessage(
      "Olá, eu sou a Brenda, sua assistente virtual. No que eu posso te ajudar?"
    );
  });

  const handleNewUserMessage = (mensage) => {
    console.log(mensage);
    const lero = brendaIA(mensage);
    const timer = setTimeout(() => {
      addResponseMessage(lero);
    }, 2500);

    return () => clearTimeout(timer);
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      profileAvatar={logo}
      title="Reserva Localiza Fast"
      subtitle="Ajuda"
      emojis={true}
    />
  );
};

export default App;
