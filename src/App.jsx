import React  from 'react';
import "./App.css";
import { useState , useEffect } from 'react';

const App = () => {
  const [data , setData] = useState([]);

  
  
useEffect(() => {
  fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)

    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch news")
      }
      return response.json()
})
    .then(data => {
       console.log(data.articles);
       setData(data.articles);
    })
    .catch(error =>{
      console.log(error);
    })

  }, []);


    
 
  return (
    <>

  <h1>Explore News</h1>
    <main>

      {data.length === 0 ? (
  <h2>Loading...</h2>

) :
    
     (data.map((article ,index) => (
      
         <div key = {index}>
                <img src = {article.urlToImage} alt="News"/ >
                <h3>{article.author}</h3>
                <h4>{article.title}</h4>
                <p>{article.description}</p>
            </div>
      
           
           
            
             
     )
        )
        )
     }
</main>
    </>
  );
};

export default App