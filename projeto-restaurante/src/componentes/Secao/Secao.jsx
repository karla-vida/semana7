import PropTypes from 'prop-types';

import { ListaCards, SubSecao } from '@componentes';

import styles from './Secao.module.css';

export const Secao = ({ nome, produtos, subSecoes }) => {
  return (
    <div className={styles.container1}>
      <div>
        <h2 className={styles.h2}>{nome}</h2>
        <hr className={styles.separador} />
      </div>

      {subSecoes?.length > 0 ? (
        subSecoes.map((sub, index) => <SubSecao key={index} produtos={produtos} subSecao={sub} />)
      ) : (
        <ListaCards produtos={produtos} />
      )}
    </div>
  );
};

Secao.propTypes = {
  nome: PropTypes.string.isRequired,
  produtos: PropTypes.array.isRequired,
  subSecoes: PropTypes.arrayOf(PropTypes.string),
};