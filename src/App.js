import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './Components/News/News';
import axios from 'axios';

function App() {
  const [ articles, setArticles] =  useState([]);

 useEffect( () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=75c37417d224491eb44ea80edef91f28';
    fetch( url )
    .then( res => res.json())
    .then( data => console.log(data.articles))
  } , []); 

  useEffect( () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=75c37417d224491eb44ea80edef91f28';
    axios(url)
    .then( data => setArticles(data.data.articles))
  }, [])

  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
      {/* <News></News> */}
    </div>
  );
}

export default App;
