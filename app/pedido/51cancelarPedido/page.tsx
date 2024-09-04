
'use client';

import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface Props {
  nomeEstabelecimento: string;
  pedido: string;
  valor: string;
  data: string;
  hora: string;
  token: string;
}

export default function Page({ nomeEstabelecimento, pedido, valor, data, hora, token }: Props) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Nome do Estabelecimento{nomeEstabelecimento}</p>
          <p>Pedido Nº: {pedido}</p>
          <p>Valor da Compra: R$ {valor}</p>
          <p>DIA/MÊS/ANO{data}</p>
          <p>Horário: {hora}</p>
        </div>
        <div className={styles.content}>
          <p>Número do token: {token}</p>
          <p className={styles.you}>Você confirma o cancelamento do pedido?</p>
        </div>
        <div className={styles.button_container}>
        <Link href="http://localhost:3000/pedido/52cancelamentoConfirmado">
        <button className={styles.confirm_button}>CONFIRMO</button></Link>

        <Link href="http://localhost:3000/pedido/51cancelarPedido">
        <button className={styles.cancel_button}>Não confirmo</button></Link>

        </div>

        <div className={styles.footer}>
          <Link href="http://localhost:3000/pedido/">
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

          <Link href="http://localhost:3000/pedido/">
          <button className={styles.button}>
            <img className={styles.icon4} src="/menu_hamburguer.png" alt="menu" />
          </button></Link>
          
        </div>
      </div>
    );
  }