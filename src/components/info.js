import React from 'react'
import Info from './components/Info';
const App = () => {
  const handleclick_1=()=>{
    alert("Button Clicked");
  };
  return (
    <div>
        <Info handleclick_1={handleclick_1}></Info>
    </div>
    
  )
}

export default App