import styles from './ContactList.module.css';

const ContactItem = ({name, number}) => (
    <li className={styles.contactlist__item}>
        <p>{name}, {number}</p>
    </li>  
);

export default ContactItem;