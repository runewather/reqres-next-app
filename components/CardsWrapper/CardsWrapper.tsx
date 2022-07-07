import styles from "./CardsWrapper.module.css";

import UserCard from "../UserCard/UserCard";

import { UsersResponse } from "../../interfaces/usersResponse";

interface Props {
  usersData: UsersResponse;
}

const CardsWrapper: React.FC<Props> = ({ usersData }) => {
  return (
    <div>
      <div className={styles.cardsWrapper}>
        {usersData.data.map((a) => (
          <UserCard
            key={a.email}
            avatar={a.avatar}
            firstName={a.first_name}
            lastName={a.last_name}
            email={a.email}
          />
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default CardsWrapper;
