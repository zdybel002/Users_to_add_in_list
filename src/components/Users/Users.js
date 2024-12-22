import styles from "./Users.module.css";

function NewUser(props) {
  return (
    <ul className={styles.userlist}>
      {props.users.map((user, index) => (
        <li key={index}>{`${user.name} - ${user.age}`}</li>
      ))}
    </ul>
  );
}

export default NewUser;
