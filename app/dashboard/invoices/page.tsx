

import '@fontsource/inter';
import Link from 'next/link';
import styles from './styles.module.css';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Page() {
  return (
    <div>
      <section className={styles.usuario}>
      
        <div className={styles.messager}>
        <Link href="http://localhost:3000/dashboard/chat">
          <button className={styles.message}>
            <i className="fa-solid fa-message" />
          </button></Link>
        </div>
        <div className={styles.not_user}>
          <button className={styles.not}>
            <i className="fa-solid fa-bell" />
          </button>
          <Link href="http://localhost:3000/dashboard/settings">
          <button className={styles.user}>
            <i className="fa-solid fa-user" />
          </button></Link>
        </div>
      </section>
      <h1 className={styles.h1}>Lista de Pedidos</h1>
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
                <th>Data</th>
                <th>Valor</th>
                <th>Pagamento</th>
                <th>Cliente</th>
                <th>Detalhes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Ana Carolina</td>
                <td>(11) 99989-1089</td>
                <td>anacarol@gmail.com</td>
                <td>
                    <select name="languages" className={styles.data_list}>
                    <option value="Andamento">Aluno</option>
                    <option value="Finalizado">Professor</option>
                    <option value="Cancelado">Outros</option>
                    </select>
                </td>
                <td>2022-02-12</td>
                <td>R$ 9,40</td>
                <td>PIX</td>
                <td>Aluno</td>
                <td>
                    <button className={styles.data_detalhe}>Detalhes</button>
                </td>
                </tr>
                <tr>
                <td>2</td>
                <td>Max</td>
                <td>(11) 99989-1089</td>
                <td>max@outlook.com</td>
                <td>
                    <select name="languages" className={styles.data_list}>
                    <option value="Andamento">Aluno</option>
                    <option value="Finalizado">Professor</option>
                    <option value="Cancelado">Outros</option>
                    </select>
                </td>
                <td>2022-02-12</td>
                <td>R$ 9,40</td>
                <td>Débito</td>
                <td>Professor</td>
                <td>
                    <button className={styles.data_detalhe}>Detalhes</button>
                </td>
                </tr>
                <tr>
                <td>3</td>
                <td>Coraline</td>
                <td>(11) 99989-1089</td>
                <td>coraline@gmail.com</td>
                <td>
                    <select name="languages" className={styles.data_list}>
                    <option value="Andamento">Aluno</option>
                    <option value="Finalizado">Professor</option>
                    <option value="Cancelado">Outros</option>
                    </select>
                </td>
                <td>2022-02-13</td>
                <td>R$ 9,40</td>
                <td>VR</td>
                <td>Aluno</td>
                <td>
                    <button className={styles.data_detalhe}>Detalhes</button>
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

