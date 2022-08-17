import PropTypes from 'prop-types';

import { ListaCards } from '@componentes';

import styles from './Secao.module.css';

export const Secao = ({ nome, produtos }) => {
  return (
    <div className={styles.container1}>
      <div>
        <h2>{nome}</h2>
        <hr className={styles.separador} />
      </div>
        <ListaCards produtos={produtos} />
    </div>
  );
};

Secao.propTypes = {
  nome: PropTypes.string.isRequired,
  produtos: PropTypes.array.isRequired,
  subSecoes: PropTypes.arrayOf(PropTypes.string),
};