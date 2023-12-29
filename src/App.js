import HomePage from './components/homePage';
import Products from './components/products';
import { useState } from 'react';
function App() {
  const [clickedSearch,setClickedSearch] = useState(false)
  const [searchName, setSearchName] = useState('')

  return (
    <div className="App">
      {clickedSearch ?  <Products searchName={searchName}/>: <HomePage search={searchName} setSearchName={setSearchName} setClickedSearch = {setClickedSearch}/> }
    </div>
  );
}

export default App;
