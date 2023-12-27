import React, { useState } from 'react'
import styles from './homePage.module.css'
import mainbg from  '../assets/bgfirst.png'
import Logo from './mainLogo'
import search from '../assets/search.svg'
import SuggestionBox from './suggestionBox'
const HomePage = () => {
    const [searchName, setSearchName] = useState('')
    const [showBox, setShowBox] = useState(false)
    const backgroundImageStyle = {
        backgroundImage: `url(${mainbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',  
      };
    const handleClick =()=>{
        setShowBox(true)
    }
  return (
    <div className={styles.main} style={backgroundImageStyle}>
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
                />
            </div>
            {showBox && <SuggestionBox/>}
        </div>
     
    
        
        
    </div>
  )
}

export default HomePage