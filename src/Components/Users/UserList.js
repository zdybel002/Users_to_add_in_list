import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} lat
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
