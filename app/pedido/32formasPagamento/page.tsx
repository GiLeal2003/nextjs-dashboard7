'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

export default function Page() {
    return (
      <div className={styles.container}>
        <Link href="http://localhost:3000/pedido/31sacolaFinal">
        <button className={styles.back_button}>VOLTAR</button></Link>
        
        <h1 className={styles.h1}>Formas de Pagamento</h1>
        
        <h2 className={styles.h2}>PAQUE PELO APP</h2>
        
        <h3 className={styles.h3}>Escolha uma opção abaixo:</h3>
        
        <div className={styles.payment_section}>
          <h4 className={styles.h4}>Meus cartões</h4>
          
          <Link href="http://localhost:3000/pedido/33credito">
          <button className={styles.card_option}>
            <div className={styles.card_icon}>
              <img src="/credito.png" alt="Credito" />
            </div>
            <div className={styles.card_info}>
              <p className={styles.p}>Crédito</p>
              <p>....8899</p>
            </div>
          </button></Link>

          <Link href="http://localhost:3000/pedido/35debito">
          <button className={styles.card_option}>
            <div className={styles.card_icon}>
              <img src="/debito.jpg" alt="Debito" />
            </div>
            <div className={styles.card_info}>
              <p className={styles.p}>Débito</p>
              <p>....8899</p>
            </div>
          </button></Link>
          
          <h4 className={styles.h4}>Novo método de pagamento</h4>
          
          <Link href="http://localhost:3000/pedido/34pix">
          <button className={styles.card_option}>
            <div className={styles.card_icon}>
              <img src="/pix.png" alt="PIX" />
            </div>
            <div className={styles.card_info}>
              <p className={styles.p}>Pix</p>
            </div>
          </button></Link>

          <Link href="http://localhost:3000/pedido/36vr">
          <button className={styles.card_option}>
            <div className={styles.card_icon}>
              <img src="/vr.jpeg" alt="VR" />
            </div>
            <div className={styles.card_info}>
              <p className={styles.p}>VR</p>
            </div>
          </button></Link>
        </div>
      </div>
    );
  }