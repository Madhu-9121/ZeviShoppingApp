import React,{useState}from "react";
import styles from "./products.module.css";
import Logo from "./mainLogo";
import search from "../assets/search.svg";
import LeftNav from "./leftNav";
import { sampleData } from "./fakerdata.jsx";
import MainCard from "./MainCard.jsx";
import stars from '../assets/stars.svg'

const Products = ({ setSearchName }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className={styles.main}>
      <LeftNav setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div>
        <Logo />
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            placeholder="Search"
            onChange={(e) => {
              setSearchName(e.target.value);
            }}
          />
          <img className={styles.searchIcon} src={search} alt="Search Icon" />
        </div>
        {sampleData && (
          <div className={styles.productListContainer}>
            {sampleData.map((product) => {
              if (!showSidebar) {
                return (
                  <MainCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    disPrice={product.discountPrice}
                    stars={stars}
                  />
                );
              }
              return null;
            
})}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
