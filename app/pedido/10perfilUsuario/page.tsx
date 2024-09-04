
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface PageProps {
    onLogout: () => void;
  }
  
  export default function Page() {
    const handleLogout = () => {
      console.log('Logout clicked!');
    };
  
//onClick={() => window.history.back()}

    return (
      <div className={styles.container}>
        <Link href="http://localhost:3000/pedido/menu_estabelecimentos">
        <button className={styles.back_button}>VOLTAR</button>
        </Link>
        <div className={styles.header}>
        <div className={styles.user_menu}>
          <div className={styles.user_info}>
            <img className={styles.img} src="/perfil.png" alt="Logo" />
          </div>
          <span className={styles.user_name}>NOME DO USUÁRIO</span>
          <ul className={styles.user_menu_list}>
            <li>
            <Link href="#">Dados Pessoais</Link>
            </li>
            <li>
            <Link href="#">Histórico de Compras</Link>
            </li>
            <li>
            <Link href="#">Favoritos</Link>
            </li>
            <li>
            <Link href="#">Acessibilidade</Link>
            </li>
            <li>
            <Link href="http://localhost:3000/pedido/90listaTokens">Tokens</Link>
            </li>
            <li>
            <Link href="http://localhost:3000/pedido/51cancelarPedido">Cancelar Pedido</Link>
            </li>
            <li>
            <Link href="http://localhost:3000/pedido/53reagendarRetiradaPedido">Reagendar pedido</Link>
            </li>
            <li>
            <Link href="#">Configurações</Link>
            </li>
            <Link href="http://localhost:3000/pedido/1paginaInicial">
            <button className={styles.logout_button} onClick={handleLogout}>
                SAIR
              </button></Link>
          </ul>
        </div>
        </div>
      </div>
    );
  }