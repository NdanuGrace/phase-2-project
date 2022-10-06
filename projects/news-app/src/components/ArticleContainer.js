import React, { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import Search from "./Search";

function ArticleContainer(){
    const[articles, setArticles]= useState([])
    const [info, setInfo] = useState("anything");
//1. fetch data
    useEffect(() => {
            fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${info}&api-key=XaKNfNlOQFVBd2LdDfeDGz4EtAvB46lz`)
            .then(res => res.json())
            .then((articles) => setArticles(articles.response.docs))
            console.log(articles)
    },[info]);
  


//    3. search
    return (
        <div>
            <h1>NEWS APP</h1>
            <div className="container">
                <div className="container-section">
                    <h2>Search Articles:</h2>
                    {/* add search form pass searchItem as a prop*/}
                    <Search searchItem={(item) => setInfo(item)}/>
                </div>
            </div><br/><br/>
{/* 2. Map to article list */}
            {articles.map(article => {
                return (
                    <>
                        <ArticleList 
                            abstract={article.abstract}
                            main={article.headline.main}
                            original={article.byline.original}
                            lead_paragraph={article.lead_paragraph}
                            news_desk={article.news_desk}
                            section_name={article.section_name}
                            _id={article._id}
                            word_count={article.word_count}
                        />
                    </>
                )
            })}
        </div>
    )


    
}
 export default ArticleContainer;