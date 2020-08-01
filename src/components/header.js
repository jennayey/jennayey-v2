import React from "react"
import styles from  "./header.module.css"

export default function Header(props) {
return <div className={styles.header}><p className={styles.title}>user@jennayey.com: <span className={styles.pathText}>/website/pages/{props.PageTitle}$</span></p></div>
  }
  