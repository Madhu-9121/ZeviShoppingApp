import React,{useState} from 'react'
import styles from './maincard.module.css'
import heart from '../assets/heart.svg'
const MainCard = ({ image,name,price,disPrice,stars}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        console.log('clicked')
      setIsFavorite(!isFavorite);
    };
  return (
    <div  className={styles.main}>
        <div className={styles.favoriteIcon} onClick={toggleFavorite}>
        <img className={`${styles.heart} ${isFavorite ? styles.favorite : ''}`} src={heart} alt="" />
      </div>
        
        <div >
            <img className={styles.image} src={image} width={165} height={225} alt="dress" />
        </div>
        <div className={styles.ViewProduct}>
            <p className={styles.text}>View Product</p>

        </div>
        <p className={styles.title}>{name}</p>
        <div className={styles.rateparent}>
        <h3 className={styles.price}>Rs.{price}</h3>
      
        <h3 className={styles.discount}>Rs.{disPrice}</h3>

        </div>
        <div className={styles.rateparent}>
        <img src={stars} alt="" />
        <p className={styles.reviews}>{'(210)'}</p>

        </div>
        
       

    </div>
  )
}

export default MainCard