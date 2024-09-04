
import '@fontsource/inter';
import Link from 'next/link';
import styles from './styles.module.css';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Page() {
  return (
    <div>
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
      <h1 className={styles.h1}>Lista de Clientes</h1>
      <div className={styles.card}>
        <div className={styles.card_content}>
          <div className={styles.activity}>
            <div className={styles.title}>
              <i className="uil uil-clock-three"></i>
            </div>
            <table className={styles.activity_data}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Telefone</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Prem Shahi</td>
                  <td>(11) 99989-1089</td>
                  <td>premshahi@gmail.com</td>
                  <td>
                    <select name="languages" className={styles.data_list}>
                      <option value="Andamento">Aluno</option>
                      <option value="Finalizado">Professor</option>
                      <option value="Cancelado">Outros</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Deepa Chand</td>
                  <td>(11) 99989-1089</td>
                  <td>deepachand@gmail.com</td>
                  <td>
                    <select name="languages" className={styles.data_list}>
                      <option value="Andamento">Aluno</option>
                      <option value="Finalizado">Professor</option>
                      <option value="Cancelado">Outros</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Manisha Chand</td>
                  <td>(11) 99989-1089</td>
                  <td>manishachand@gmail.com</td>
                  <td>
                    <select name="languages" className={styles.data_list}>
                      <option value="Andamento">Aluno</option>
                      <option value="Finalizado">Professor</option>
                      <option value="Cancelado">Outros</option>
                    </select>
                  </td>
                </tr>
                {/* adicione mais linhas aqui */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer>
        <div className={styles.card2}>
          <div className={styles.button_group}>
            <button className={styles.button}>
              Voltar
            </button>
          </div>
          <div className={styles.button_group}>
            <button className={styles.button} >
              Avançar
            </button>
          </div>
          <div className={styles.button_group}>
            <button className={styles.button} >
              Atualizar
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}