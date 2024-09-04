'use client';

import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

export default function CreditoPage() {
    return (
      <div className={styles.container}>
        <Link href="http://localhost:3000/pedido/32formasPagamento">
        <button className={styles.back_button}>VOLTAR</button></Link>
        <div className={styles.content}>
          <p>Pedido N: XXXXXX</p>
          <p>Valor da Compra: R$ XX,XX</p>
          <div className={styles.card_icon}>
            <img className={styles.img} src="/credito.png" alt="Credito" />
          </div>
          <h2 className={styles.title}>CRÉDITO</h2>
          <p className={styles.question}>Confirma a forma de pagamento?</p>
          <Link href="http://localhost:3000/pedido/37pagamentoFinalizado">
          <button className={styles.confirm_button}>CONCLUIR</button></Link>
        </div>
      </div>
    );
  }

  