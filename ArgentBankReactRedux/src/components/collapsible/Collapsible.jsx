import React, { useState } from 'react'
import styles from './collapsible.module.scss'
import Details from '../details/Details'

// Component that displays in a collapsible the content passed to it as props
const Collapsible = (props) => {
  const [showMore, setShowMore] = useState({ [props.id]: false })

  const toggleContent = (id) => {
    // Function to update showmore state
    setShowMore((prevShowMore) => {
      // Creates a new version of prevShowMore object
      const updatedShowMore = {
        ...prevShowMore, // Copies all the previous states
      }
      // Modifies the property that matches the id. If true it returns false and vice versa
      updatedShowMore[id] = !prevShowMore[id]
      // Returns the updated object
      return updatedShowMore
    })
  }

  return (
    <div className={styles.collapsible}>
      <div className={styles.title}>
        <div className={styles.dateTitle}>
          <p>{props.date}</p>
          <h3>{props.title}</h3>
        </div>
        <div className={styles.amountBalance}>
          <p>{props.amount}</p>
          <p>{props.balance}</p>
          <button onClick={() => toggleContent(props.id)}>
            <i
              className={
                showMore[props.id]
                  ? 'fa fa-chevron-up'
                  : `fa fa-chevron-up ${styles.rotated}`
              }
            ></i>
          </button>
        </div>
      </div>
      <div
        className={
          showMore[props.id]
            ? `${styles.content} ${styles.open}`
            : `${styles.content} ${styles.close}`
        }
      >
        <Details id={props.id} />
      </div>
    </div>
  )
}

export default Collapsible
