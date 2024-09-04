
'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

export default function Page() {
  const [messages, setMessages] = useState([
    {
      text: 'Seja bem-vindo!',
      sender: 'Estabelecimento',
      time: new Date().toLocaleTimeString(),
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([
        ...messages,
        {
          text: newMessage,
          sender: 'Você',
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setNewMessage('');
      inputRef.current?.focus(); // Focus back on the input
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.chat_header}>
        <h3 className={styles.h3}>CHAT</h3>
        <p>NomeEstabelecimeto</p>
        
      </div>
      <div className={styles.dropdown}>
          <button className={styles.dropdown_btn}>Selecione um estabelecimento</button>
          <div className={styles.dropdown_content}>
            <a href="#">Est 1</a>
            <a href="#">Est 2</a>
            <a href="#">Est 3</a>
          </div>
        </div>
      <div className={styles.chat_messages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={styles.chat_message}
            style={{
              textAlign: message.sender === 'Você' ? 'right' : 'left',
            }}
          >
            <p>{message.text}</p>
            <span className={styles.chat_message_time}>
              {message.sender}: {message.time}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.chat_input_container}>
        <input
          className={styles.chat_input}
          type="text"
          placeholder="Escreva sua mensagem..."
          value={newMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          ref={inputRef}
        />
        <button className={styles.chat_send_btn} onClick={sendMessage}>
          Enviar
        </button>
      </div>

      <div className={styles.footer}>
      <Link href="http://localhost:3000/pedido/menu_estabelecimentos">
          <button className={styles.button}>
            <img className={styles.icon1} src="/home.png" alt="Home" />
          </button></Link>
          
          <Link href="http://localhost:3000/pedido/chat">
          <button className={styles.button}>
            <img className={styles.icon2} src="/chat.png" alt="Chat" />
          </button></Link>
          
          <Link href="http://localhost:3000/pedido/90listaTokens">
          <button className={styles.button}>
            <img className={styles.icon3} src="/token.png" alt="Token" />
          </button></Link>
          
          <Link href="http://localhost:3000/pedido/10perfilUsuario">
          <button className={styles.button}>
            <img className={styles.icon4} src="/menu_hamburguer.png" alt="menu" />
          </button></Link>
        </div>
    </div>
  );
}