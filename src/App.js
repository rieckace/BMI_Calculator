// import React from 'react'
// import './App.css';
// import { useState } from 'react';
// const Info = (props) => {
//     const {handleclick_1}=props;
//    const [count,setcount]=useState(0);
//    const[username,setusername]=useState("Rikesh");
//    const[user,setuser]=useState({name:"Rikesh",age:22})
//    const handleclick=()=>setcount(count+1);
//    const nameclick=()=>{
//     username==='Rikesh'?setusername("Rieck_Ace"):setusername("Rieck_Ace");
//    };
//    const updateusername=()=>{
//     setuser({...user,name:"Rieck_Ace"})
//    }
//    const updateage=()=>{
//     setuser({...user,age:20})
//    }
//   return (
//     <div>
//         <button onClick={handleclick}>{count}</button>
//         <button onClick={nameclick}>{username}</button>
//         <button onClick={handleclick_1}>click</button>
//         <h2>{user.name}</h2>
//         <button onClick={updateusername}>update username</button>
//         <h2>{user.age}</h2>
//         <button onClick={updateage}>update Age</button>
//     </div>
//   )
// }

// export default Info


// // Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass 

import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [height, setHeight] = useState(0); // Height in cm
  const [weight, setWeight] = useState(0); // Weight in kg
  const [value, setValue] = useState(0); // BMI value
  const [result, setResult] = useState(''); // BMI category

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const bmi = Number(weight) / ((Number(height) / 100) ** 2);
      setValue(bmi.toFixed(2));

      if (bmi < 18.5) {
        setResult('Underweight');
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setResult('Normal weight');
      } else if (bmi >= 25 && bmi <= 29.9) {
        setResult('Overweight');
      } else {
        setResult('Obesity');
      }
    } else {
      alert('Please enter valid height and weight.');
    }
  };

  return (
    <div className="app-container">
      <h2 className="title">BMI Calculator</h2>
      <div className="input-group">
        <label htmlFor="height">Enter Height (cm):</label>
        <input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label htmlFor="weight">Enter Weight (kg):</label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="input-field"
        />
      </div>
      <button onClick={calculateBMI} className="calculate-button">
        Calculate
      </button>
      <div className="result">
        <p>BMI Value: <strong>{value}</strong></p>
        <p>BMI Status: <strong>{result}</strong></p>
      </div>
    </div>
  );
};

export default App;
