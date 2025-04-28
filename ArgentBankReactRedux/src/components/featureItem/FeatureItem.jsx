import React from 'react'

const FeatureItem = (props) => {
  return (
    <div>
      <img src={props.icon} alt="Icon" />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

export default FeatureItem
