import React from "react";

import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className={styles.layout}>
    <div className={styles.container}>
    {children}
    </div>
  </div>
)

export default Layout;