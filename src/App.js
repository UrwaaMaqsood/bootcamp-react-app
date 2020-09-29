import React from 'react';
import './App.css';
import Mobile from './mobile.js';


function App() {
  return (
    <div className="App">
      <Mobile MobileCompany="Samsung" LaptopCompany="HP" />
      <hr/>
      <Mobile MobileCompany="Huawei" LaptopCompany="DellL" />
      <hr/>
      <Mobile MobileCompany="Infinix" LaptopCompany="Lenevo" />
    </div>  
  );
}

export default App;