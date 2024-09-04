'use client';


import Link from 'next/link';
import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface Props {
  nomeEstabelecimento: string;
  pedido: string;
  valor: string;
  data: string;
  token: string;
  hora: string;
}
export default function Page({ nomeEstabelecimento, pedido, valor, data, hora, token }: Props) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Pedido Nº: {pedido}</p>
          <p>Valor da Compra: R$ {valor}</p>
          <p>Data: {data}</p>
          <p>Horário: {hora}</p>
        </div>
        <div className={styles.content}>
          <p>Número do token: {token}</p>
          <p className={styles.you}>Você confirma a retirada do pedido?</p>
        </div>
        <div className={styles.button_container}>
        <Link href="http://localhost:3000/pedido/40confirmacaoRetiradaPedido">
        <button className={styles.confirm_button}>CONFIRMO</button></Link>
        <Link href="http://localhost:3000/pedido/50cancelarOuReagendar">
        <button className={styles.cancel_button}>Não confirmo</button></Link>
        </div>
      </div>
    );
  }

