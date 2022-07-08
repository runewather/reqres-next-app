import Link from "next/link";

import styles from "./AppBar.module.css";

const AppBar: React.FC = () => {
  return (
    <header className={styles.appBar}>
      <Link href={"/"}>
        <h1 style={{ cursor: "pointer" }}>Reqres.in</h1>
      </Link>
    </header>
  );
};

export default AppBar;
