import React from "react";
import AppBar from "../components/Appbar/AppBar";

import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
  <AppBar />
  <div className={styles.layout}>
    {children}
  </div>
  </>
)

export default Layout;