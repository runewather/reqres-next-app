import styles from "./UserCard.module.css";

import Avatar from "../Avatar/Avatar";

interface Props {
  avatar?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

const UserCard: React.FC<Props> = ({ avatar, firstName, lastName, email }) => {
  return (
    <div className={styles.card}>
      <Avatar src={avatar}/>
      <div className={styles.cardDesc}>
        <span>{`${firstName} ${lastName}`}</span>
        <span>{email}</span>
      </div>
    </div>
  )
}

export default UserCard;