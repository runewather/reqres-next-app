import styles from "./AppBar.module.css";

const AppBar: React.FC = () => {
  return (
    <header className={styles.appBar}>
      <h1>Reqres.in</h1>
    </header>
  )
}

export default AppBar;