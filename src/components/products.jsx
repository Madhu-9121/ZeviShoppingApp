import React,{useState,useEffect}from "react";
import styles from "./products.module.css";
import Logo from "./mainLogo";
import search from "../assets/search.svg";
import LeftNav from "./leftNav";
import { sampleData } from "./fakerdata.jsx";
import MainCard from "./MainCard.jsx";
import stars from '../assets/stars.svg'

const Products = ({ searchName }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [products, setProducts] = useState(sampleData);
  const [allData, setAllData] = useState(sampleData);
  const [filters, setFilters] = useState({
    priceRange: [],
    brand: [],
    rating: [],
    search: ""
  });
 
  const filtercomponents = () => {
    let filterItems = products;
    const searchName = filters.search.toLowerCase();
    const searchParams = ["brand", "rating", "name", "price"];
    
    if (filters.search) {
      filterItems = filterItems.filter((i) =>
        searchParams.some((k) => {
          const property = i[k];
          if (typeof property === "string") {
            return property.toLowerCase().includes(searchName);
          } else if (typeof property === "number") {
            return property.toString().toLowerCase().includes(searchName);
          }
          return false;
        })
      );
    }
  
  
  
    if (filters.brand.length) {
      
      filterItems = filterItems.filter((i) =>
        filters.brand.includes(i.brand)
      );
    }
  
    if (filters.priceRange.length) {
      filterItems = filterItems.filter((i) => {
        const priceItem = i.price;
        return filters.priceRange.some((r) => {
          if (r === "Under 500") {
            return priceItem < 500;
          }else if (r === "1000 To 3000") {
            return priceItem > 999;
          } else {
            const { minPrice, maxPrice } = JSON.parse(r);
            return priceItem >= minPrice && priceItem <= maxPrice;
          }
        });
      });
    }
  
    setAllData(filterItems);
  };
  
  
  
  const sidenavBrand = (e) => {
    let fitems = [...filters.brand];
    if (e.target.checked) fitems = [...filters.brand, e.target.value];
    else fitems.splice(filters.brand.indexOf(e.target.value), 1);
    setFilters({ ...filters, brand: fitems });
  };
  const sidenavPrice = (e) => {
    let fitems = [...filters.priceRange];
    if (e.target.checked)
      fitems = [...filters.priceRange, e.target.value];
    else fitems.splice(filters.priceRange.indexOf(e.target.value), 1);
    setFilters({ ...filters, priceRange: fitems });
  };
  useEffect(() => {
    console.log(filters);
    filtercomponents();
  }, [filters]);
  
  useEffect(() => {
    if(searchName){
      setFilters({
        ...filters,
        search: searchName
      })

    }
  }, [searchName]);
  
  return (
    <div className={styles.main}>
      <LeftNav setShowSidebar={setShowSidebar} showSidebar={showSidebar} sidenavBrand={sidenavBrand}
                sidenavPrice={sidenavPrice}/>
      <div>
        <Logo />
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            placeholder="Search"
            onChange={(e) =>
              setFilters({
                ...filters,
                search: e.target.value
              })
            }
            value={filters.search}
          />
          <img className={styles.searchIcon} src={search} alt="Search Icon" />
        </div>
        {sampleData && (
          <div className={styles.productListContainer}>
            {allData.map((product) => {
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
