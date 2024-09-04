
"use client"

import React, { useState, useEffect } from 'react';
import '@fontsource/inter';
import styles from './styles.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


interface Message {
    text: string;
    sender: string;
  }
  
  interface MyMessage extends Message {
    timestamp: string;
  }
  
  const Chat: React.FC = () => {
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState<MyMessage[]>([]);
    const [contacts, setContacts] = useState([
      { id: 1, name: 'Lucas', online: false, lastSeen: 'Left 7 mins ago' },
      { id: 2, name: 'Marcos', online: true, lastSeen: 'Online' },
      { id: 3, name: 'Tom', online: false, lastSeen: 'Left 30 mins ago' },
      { id: 4, name: 'Antonio', online: false, lastSeen: 'Left 50 mins ago' },
    ]);
  
    const [currentContact, setCurrentContact] = useState<{
      id: number;
      name: string;
      online: boolean;
      lastSeen: string;
    } | null>(null);
  
    useEffect(() => {
      const fetchMessages = async () => {
        const mockMessages: MyMessage[] = [
          { text: 'Olá! ', sender: 'Lucas', timestamp: '2023-02-20 14:30:00' },
          { text: 'Ok!', sender: 'Lucas', timestamp: '2023-02-20 14:34:00' },
        ];
        setMessages(mockMessages);
      };
      fetchMessages();
    }, []);
  
    const handleContactClick = (contact: {
      id: number;
      name: string;
      online: boolean;
      lastSeen: string;
    }) => {
      setCurrentContact(contact);
    };
  
    const handleSendMessage = () => {
      if (newMessage.trim() !== '') {
        const currentTime = new Date();
        const message: MyMessage = {
          text: newMessage,
          sender: 'You',
          timestamp: currentTime.toLocaleString()
        };
        setMessages((prevMessages) => [...prevMessages, message]);
        setNewMessage('');
      }
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <input
              type="text"
              className={styles.search_input}
              placeholder="Search..."
            />
  
            <div className={styles.contacts_body}>
              <ul>
                {contacts.map((contact) => (
                  <li
                    key={contact.id}
                    onClick={() => handleContactClick(contact)}
                  >
                    <div className={styles.img_cont}>
                      <img
                        src={`https://randomuser.me/api/portraits/men/${contact.id}.jpg`}
                        alt={contact.name}
                      />
                      {contact.online ? (
                        <span className={styles.online_icon} />
                      ) : (
                        <span className={styles.offline} />
                      )}
                    </div>
                    <div className={styles.user_info}>
                      <span>{contact.name}</span>
                      <p>{contact.lastSeen}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.card_body}>
            {currentContact && (
              <div className={styles.msg_card_body}>
                {messages.map((message, index) => (
                  <li key={index}>
                    
                    <div
                      className={`${styles.msg_cotainer} ${
                        message.sender === 'You' ? styles.you : styles.other
                      }`}
                    >
                      <span>{message.text}</span>
                      <span className={styles.msg_time}>{message.timestamp}</span>
                    </div>
                  </li>
                ))}
              </div>
            )}
            {currentContact && (
            <div className={styles.card_footer}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              className={styles.type_msg}
              placeholder="Escreva sua mensagem..."
            />
            <div className={styles.input_group_append}>
              <span className={styles.send_btn} onClick={handleSendMessage}>
                <i className="fas fa-location-arrow" />
              </span>
            </div>
          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              };
              
              export default Chat;