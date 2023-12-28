import React from 'react'
import styles from './productCard.module.css'
const ProductCard = ({image,name,price,disPrice}) => {
  return (
    <div className={styles.main}>
        <div >
            <img className={styles.image} src={image} width={165} height={225} alt="dress" />
        </div>
        <p className={styles.title}>{name}</p>


    </div>
  )
}

export default ProductCard