import React from "react"
import styles from "./button.primary.module.css"
export default function ButtonPrimary(props) {
    return <div className={styles.buttonPrimary}>
        <a href={props.link}>Go to {props.title}</a>
    </div>
  }
  