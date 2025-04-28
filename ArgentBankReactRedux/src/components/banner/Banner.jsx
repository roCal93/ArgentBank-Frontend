import React from 'react'
import styles from './banner.module.scss'
import bannerImg1400 from '../../assets/img/bank-tree(1400px).jpeg'
import bannerImg920 from '../../assets/img/bank-tree(920px).jpeg'
import bannerImg480 from '../../assets/img/bank-tree(480px).jpeg'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <picture>
        <source srcSet={bannerImg480} media="(max-width: 480px)" />
        <source srcSet={bannerImg1400} media="(min-width: 1200px)" />
        <img className={styles.img} src={bannerImg920} alt="bank-tree" />
      </picture>
      <section className={styles.content}>
        <h2 className="sr-only">Promoted Content</h2>
        <p className={styles.subtitle}>No fees.</p>
        <p className={styles.subtitle}>No minimum deposit.</p>
        <p className={styles.subtitle}>High interest rates.</p>
        <p className={styles.text}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  )
}

export default Banner
