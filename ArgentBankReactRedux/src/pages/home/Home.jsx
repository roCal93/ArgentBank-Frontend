import React from 'react'
import Banner from '../../components/Banner/Banner'
import styles from './home.module.scss'
import FeatureItem from '../../components/featureItem/featureItem'
import { featureList } from '../../featureList'

const Home = () => {
  return (
    <div>
      <title>Argent Bank - Home Page</title>
      <Banner />
      <h2 className="sr-only">Features</h2>
      <ul className={styles.features}>
        {featureList.map((data) => (
          <li key={data.id}>
            <FeatureItem
              title={data.title}
              content={data.content}
              icon={data.icon}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
