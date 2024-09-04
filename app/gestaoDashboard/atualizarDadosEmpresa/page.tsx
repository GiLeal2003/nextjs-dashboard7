
import '@fontsource/inter';
import Link from 'next/link';
import styles from './styles.module.css';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Page() {
    return (
      <section className={styles.usuario}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.name}>
                <span>Atualizar Dados</span>
              </div>
              <form>
                <div className={styles.input}>
                  <input
                    id="username"
                    name="username"
                    placeholder="Nome da empresa"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.input}>
                  <input
                    id="senha"
                    name="senha"
                    placeholder="CNPJ"
                    type="password"
                    required
                  />
                </div>
                <div className={styles.input}>
                  <input
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required
                  />
                </div>
                <div className={styles.input}>
                  <input
                    id="endereco"
                    name="endereco"
                    placeholder="Endereço"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.input}>
                  <input
                    id="telefone"
                    name="telefone"
                    placeholder="Telefone"
                    type="tel"
                    required
                  />
                </div>
                <div className={styles.input}>
                  <input
                    id="formasDePagamento"
                    name="formasDePagamento"
                    placeholder="Formas de Pagamento"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.button}>
                <Link href="http://localhost:3000/gestaoDashboard/settings">
                  <button type="submit" className={styles.exit}>
                    Salvar
                  </button></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }