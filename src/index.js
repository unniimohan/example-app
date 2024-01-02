import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Banner from './Banner';
import Card from './Card'
import Data from './Data';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

var cardsData=Data.map(function(element){
  return  <Card 
{...element}
  />

})

root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <div>
      <h1 class="text-center mt-5">RECENT WORK</h1>
    </div>
    <div className="d-flex justify-content-around mt-5">
    {cardsData}
    
    </div>
    <div className="container-fluid footer-div mt-5"> 
            
        </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
