import ContactItem from './ContactItem'

import styles from './ContactList.module.css';


const ContactList = ({contacts}) => (
  <div>
     <p className={styles.title}>Contact list</p>
     <ul>
       {contacts.map(({name, number, id})=>{
         return (
          <ContactItem
          key={id}
          name={name}
          number={number}
          />
         );
       }  )}
     </ul>
  </div>
);

export default ContactList;
