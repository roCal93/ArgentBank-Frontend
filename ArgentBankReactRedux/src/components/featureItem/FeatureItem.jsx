import React from 'react'
import styles from './featureItem.module.scss'

const FeatureItem = (props) => {
  return (
    <div className={styles.featureItem}>
      <img className={styles.icon} src={props.icon} alt={props.iconAlt} />
      <h3 className={styles.title}>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

export default FeatureItem
