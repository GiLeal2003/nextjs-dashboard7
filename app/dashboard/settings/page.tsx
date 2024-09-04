
import '@fontsource/inter';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Page() {
  return (
    <div className={styles.container}>
        <div className={styles.card_container}>
          <div className={styles.card}>
          <div className={styles.image}>
            <img src="/homem.jpg" alt="foto" />
          </div>
          <div className={styles.name}>
            <span className={styles.name}>João Silva</span>
          </div>
            <div className={styles.card_content}>
              <div className={styles.button}>
              <button className={styles.help}>Dados Pessoais</button>
              <button className={styles.help}>Senha</button>
                <button className={styles.help}>Ajuda</button>
                <button className={styles.help}>Fale Conosco</button>
                <button className={styles.help}>Configurações</button>
                
                <Link href="http://localhost:3000"><button className={styles.sair}>SAIR</button></Link>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}