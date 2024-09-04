
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
    token: string;
  }
  
  export default function Page({ nomeEstabelecimento, pedido, valor, data, token }: Props) {
      return (
        <div className={styles.container}>
            <Link href="http://localhost:3000/pedido/90listaTokens">
            <button className={styles.back_button}>VOLTAR</button></Link>
          <h1 className={styles.h1}>TOKEN</h1>
          <div className={styles.details}>
          <p className={styles.text}>Estabelecimento {nomeEstabelecimento}</p>
            <p className={styles.text}>Data: {data}</p>
            <p className={styles.text}>Pedido Nº: {pedido}</p>
            <p className={styles.text}>Valor da Compra: R$ {valor}</p>
            <p className={styles.text}>{token}</p>
          </div>
          <div className={styles.qr_code}>
            <img className={styles.img} src="/qrcode.png" alt="QR Code" />
          </div>
          <p className={styles.info}>Status: <span className={styles.confirmed}>Confirmado</span></p>

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

            <Link href="http://localhost:3000/pedido/10perfilUsuario
">
            <button className={styles.button}>
              <img className={styles.icon4} src="/menu_hamburguer.png" alt="menu" />
            </button></Link>
            
          </div>
        </div>
      );
    }