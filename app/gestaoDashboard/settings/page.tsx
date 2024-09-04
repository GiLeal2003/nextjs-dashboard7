
import '@fontsource/inter';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Page() {
  return (
    <div className={styles.container}>
      <section className={styles.usuario}>
        <div className={styles.not_user}>
          <button className={styles.not}>
            <i className="fa-solid fa-bell" />
          </button>
          <Link href="http://localhost:3000/gestaoDashboard/settings">
          <button className={styles.user}>
            <i className="fa-solid fa-user" />
          </button></Link>
        </div>
        </section>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <div className={styles.button}>
                <Link href="http://localhost:3000/gestaoDashboard/atualizarDadosEmpresa">
                <button className={styles.aboutMe}>Atualizar dados da empresa</button></Link>
                <button className={styles.hireMe}>Atualizar Cardápio</button>
                <button className={styles.help}>Ajuda</button>
                <button className={styles.conf}>Fale Conosco</button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}