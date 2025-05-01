import React from 'react'
import styles from './details.module.scss'

const Details = () => {
  return (
    <div className={styles.detail}>
      <div className={styles.title}>
        <p>Transaction type</p>
        <label htmlFor="categorySelect">Category</label>
        <label htmlFor="note">Note</label>
      </div>
      <div className={styles.info}>
        <p>Electronic</p>
        <select name="category" id="categorySelect">
          <option value="">Définir une catégorie</option>
          <option value="">Défini une catégorie</option>
        </select>
        <input id="note" type="text" />
      </div>
    </div>
  )
}

export default Details
