import styles from "./CardsWrapper.module.css";

import UserCard from "../UserCard/UserCard";

import { UsersResponse } from "../../interfaces/usersResponse";

interface Props {
  usersData: UsersResponse;
  onNext: () => void;
  onPrevious: () => void;
}

const CardsWrapper: React.FC<Props> = ({ usersData, onNext, onPrevious }) => {
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
        {usersData.page > 1 && <button onClick={onPrevious}>Previous</button>}
        {usersData.page + 1 <= usersData.total_pages && (
          <button onClick={onNext}>Next</button>
        )}
      </div>
    </div>
  );
};

export default CardsWrapper;
