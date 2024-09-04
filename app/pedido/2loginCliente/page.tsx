'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, TextField, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './styles.module.css';
import '@fontsource/inter';

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log('Login');
  };

  const handleForgotPassword = () => {
    console.log('Esqueci minha senha');
  };

  const handleRegister = () => {
    console.log('Registre-se');
  };

  return (

    <div className={styles.container}>
    
    <Link href="http://localhost:3000/pedido/1paginaInicial">
    <button className={styles.back_button} >VOLTAR</button></Link>
    <div className={styles.header}>
    <img className={styles.img} src="/logo_offline.jpg" alt="Logo" />
      <TextField
        label="Usuário"
        value={username}
        onChange={handleUsernameChange}
        margin="normal"
      />
      <TextField
        label="Senha"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        margin="normal"
      />
      <Link href="http://localhost:3000/pedido/menu_estabelecimentos">
      <button className={styles.button} onClick={handleLogin}>ENTRAR</button></Link>
      
      <Link href="http://localhost:3000/pedido/4esqueciSenha">
      <Button onClick={handleForgotPassword}>
        Esqueci minha senha
      </Button></Link>

      <Link href="http://localhost:3000/pedido/3cadastroLoginCliente">
      <Button onClick={handleRegister}>
        Cadastre-se
      </Button></Link>
      </div>
    </div>
  );
}