'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

export default function Page() {
    return (
      <div className={styles.container}>
        <div className={styles.message}>
          <h1 className={styles.h1}>ALTERAÇÕES REALIZADAS COM SUCESSO</h1>
        </div>
        <div className={styles.check_mark}>
            <img className={styles.img} src="/check7.png" alt="check" />
        </div>
        <Link href="http://localhost:3000/pedido/2loginCliente">
        <button className={styles.button}>RETORNAR À PÁGINA INICIAL</button></Link>
      </div>
    );
  }