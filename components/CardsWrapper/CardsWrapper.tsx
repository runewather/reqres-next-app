import styles from "./CardsWrapper.module.css";

import UserCard from "../UserCard/UserCard";

const CardsWrapper: React.FC = () => {
  return (
    <div className={styles.cardsWrapper}>
      {new Array(6).fill(0).map((a, i) => (
        <UserCard key={i} avatar='https://reqres.in/img/faces/7-image.jpg' firstName='Test' lastName='test2' email='test@test.com' />
      ))}
    </div>
  )
}

export default CardsWrapper;