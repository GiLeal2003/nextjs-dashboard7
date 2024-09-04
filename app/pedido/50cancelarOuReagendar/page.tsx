
'use client';

import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';


interface Props {
  pedido: string;
  valor: string;
  data: string;
  hora: string;
  token: string;
}

export default function Page({ pedido, valor, data, hora, token }: Props) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
        <Link href="http://localhost:3000/pedido/menu_estabelecimentos">
        <button className={styles.voltar}>VOLTAR</button></Link>
        </div>
        <div className={styles.pedido_info}>
          <p>Pedido N: {pedido}</p>
          <p>Valor da Compra: R$ {valor}</p>
          
          <p className={styles.conj}>DIA/MÊS/ANO{data}</p>
          <p>Horário: {hora}</p>
          <p>Número do token: {token}</p>
        </div>
        <div className={styles.actions}>
        <Link href="http://localhost:3000/pedido/51cancelarPedido">
        <button className={styles.cancelar}>CANCELAR PEDIDO</button></Link>

        <Link href="http://localhost:3000/pedido/53reagendarRetiradaPedido">
        <button className={styles.reagendar}>REAGENDAR HORÁRIO DE RETIRADA DO PEDIDO</button></Link>

        </div>

        <div className={styles.footer}>
          <Link href="http://localhost:3000/pedido/menu_estabelecimentos
">
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

          <Link href="http://localhost:3000/pedido/50cancelarOuReagendar">
          <button className={styles.button}>
            <img className={styles.icon4} src="/menu_hamburguer.png" alt="menu" />
          </button></Link>
          
        </div>
      </div>
    );
  }