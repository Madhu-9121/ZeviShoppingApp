import React, { useState } from 'react'
import styles from './homePage.module.css'
import Logo from './mainLogo'
import search from '../assets/search.svg'
import SuggestionBox from './suggestionBox'
const HomePage = ({setClickedSearch,setSearchName}) => {
    const [showBox, setShowBox] = useState(false)
    
    
    const handleClick =()=>{
        setShowBox(true)
    }
  return (
    <div className={styles.main} >
        <Logo/>
        <div className={styles.overlay}>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    placeholder='Search'
                    onChange={(e)=>{setSearchName(e.target.value)}}
                    onClick={handleClick}
                />
                <img
                    className={styles.searchIcon}
                    src={search}
                    alt='Search Icon'
                    onClick={()=>{setClickedSearch(true)}}
                />
            </div>
            {showBox && <SuggestionBox setClickedSearch={setClickedSearch}/>}
        </div>
     
    
        
        
    </div>
  )
}

export default HomePage