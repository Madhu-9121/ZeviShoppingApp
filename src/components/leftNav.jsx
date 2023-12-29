// leftNav.jsx
import React, { useState } from 'react';
import styles from './leftNav.module.css';
import { brand, priceRange } from './dataForsidebar';
import arrow from '../assets/arrow.svg';

const LeftNav = ({ setShowSidebar, showSidebar,sidenavPrice,sidenavBrand }) => {
  
  const [rating, setRating] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleSublist = (e) => {
    const target = e.currentTarget;
    const sublist = target.nextElementSibling;
    sublist.classList.toggle(styles.sublistVisible);
  };

  return (
    <div className={`${styles.parent} ${showSidebar ? styles.showSidebar : ''}`}>
      <h1 className={styles.header}>Search Results</h1>

      {/* Button to toggle sidebar on smaller screens */}
      <div className={styles.toggleButton} onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar */}
      <div className={styles.sideBarInner}>
        <div className={styles.linealign}>
          <h3 className={styles.innerHead}>
            Brand
          </h3>
          <img className={styles.arrowDown} src={arrow} alt='' />
        </div>
        <ul className={`${styles.filterCheckBox} ${styles.sublist}`}>
          {brand.map((brand) => (
            <li key={brand.id}>
              <label className={styles.checkBox}>
                {brand.label}
                <input
                  type="checkbox"
                  value={brand.label}
                  onChange={sidenavBrand}
                  className={styles.name}
                />
                <span className={styles.checkmark}></span>
              </label>
            </li>
          ))}
        </ul>

        <div className={styles.linealign}>
          <h3 className={styles.innerHead}>
            Price Range
          </h3>
          <img className={styles.arrowDown} src={arrow} alt='' />
        </div>
        <ul className={`${styles.filterCheckBox} ${styles.sublist}`}>
          {priceRange.map((price) => (
            <li key={price.id}>
              <label className={styles.checkBox}>
                {price.label}
                <input
                  type="checkbox"
                  value={price.label}
                  onChange={sidenavPrice}
                  className={styles.name}
                />
                <span className={styles.checkmark}></span>
              </label>
            </li>
          ))}
        </ul>

        <div className={styles.linealign}>
          <h3 className={styles.innerHead} onClick={toggleSublist}>
            Ratings
          </h3>
          <img className={styles.arrowDown} src={arrow} alt='' />
        </div>

        <ul className={`${styles.filterCheckBox} ${styles.sublist}`}>
          {[5, 4, 3, 2, 1].map((starValue, index) => (
            <li key={starValue}>
              <div className={styles.customRating} onClick={toggleSublist}>
                <label className={styles.checkBox}>
                  <input
                    type="checkbox"
                    value={starValue}
                    onChange={() => handleRatingChange(starValue)}
                    className={styles.name}
                  />
                  <span className={styles.checkmark}></span>
                </label>
                {[5, 4, 3, 2, 1].map((innerStarValue, innerIndex) => (
                  <span
                    key={innerStarValue}
                    className={`${styles.star} ${
                      innerIndex < starValue ? styles.filled : ''
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftNav;
