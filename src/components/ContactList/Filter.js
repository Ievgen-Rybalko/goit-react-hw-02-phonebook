import styles from './ContactList.module.css';

const Filter = ({ message }) => (
  <p className={styles.notification}>{message}</p>
);

export default Filter;
