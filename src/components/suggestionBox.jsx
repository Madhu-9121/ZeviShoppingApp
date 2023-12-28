import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { sampleData } from './fakerdata.jsx'
import ProductCard from './productCard.jsx'
import styles from './suggestionBox.module.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const SuggestionBox = ({setClickedSearch}) => {
  const [trendingData, setTrendingData] = useState([]);
    useEffect(()=>{
      const shuffledData = sampleData.sort(() => 0.5 - Math.random());
      const selectedData = shuffledData.slice(0, 5);
      setTrendingData(selectedData);
    },[])
    const slickSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1, 
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1, 
          },
        },
      ],
    };
    const handleClick=()=>{
      setClickedSearch(true)
    }
  return (
    <div className={styles.parent}>
      <p className={styles.latestTrend}>Latest Trends </p>
      <div className={styles.productContainer}>
        {/* Display 5 ProductCards in large displays */}
        {trendingData.map((item, index) => (
          <ProductCard setClickedSearch={setClickedSearch} key={index} image={item.image} name={item.name} />
        ))}
      </div>

      {/* Display the carousel for medium and small screens */}
      <Slider className={styles.slickSlider} {...slickSettings}>
        {trendingData.map((item, index) => (
          <ProductCard setClickedSearch={setClickedSearch} key={index} image={item.image} name={item.name} />
        ))}
      </Slider>

      <p className={styles.popular}>Popular suggestions</p>
      <ul className={styles.list}>
        <li onClick={handleClick}>Striped shirt dress</li>
        <li onClick={handleClick}>Satin shirts</li>
        <li onClick={handleClick}>Denim jumpsuit</li>
        <li onClick={handleClick}>Leather dresses</li>
        <li onClick={handleClick}>Solid tshirts</li>
      </ul>

      
      

    </div>
  )
}

export default SuggestionBox