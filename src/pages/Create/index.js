import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo_.png';

export default function Create() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);
  const myWidth = window.innerWidth;

  function getPosition() {
    if (myWidth <= 1280) {
      return '0%';
    }
    return '-17%';
  }

  async function handleCertificate(e) {
    e.preventDefault();

    if (!user) {
      setError(true);
    } else {
      try {
        localStorage.setItem('#user', user);
        history.push('/certificate');
      } catch (error) {
        alert("Falha no envio dos dados, tente novamente")
      }
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Cosmeticos" style={{ marginLeft: getPosition() }} />
        <form onSubmit={handleCertificate}>
          <input
            placeholder="Digite o nome do Aluno"
            value={user}
            onChange={e => {
              setError(false)
              setUser(e.target.value)
            }}
          />
          {error && <h4>É necessário preencher o nome do aluno!</h4>}
          <button class="button" type="submit">Gerar Certificado</button>
        </form>
      </section>

    </div>
  );
}
