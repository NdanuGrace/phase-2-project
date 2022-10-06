import React from "react";


// 3. destructure here
function ArticleList({abstract, main, original, lead_paragraph, 
    news_desk, section_name, _id, word_count, }){

return(
    <div className="news-app">
          <div key={_id} className="list">
                    <h3 className="heading">{main}</h3>
                    <h4>{abstract}</h4>
                    <p className="paragraph">{lead_paragraph}</p>

                    <ul>
                        <li><span>Author:</span>  {original}</li>
                        <li><span>News Desk:</span>  {news_desk}</li>
                        <li><span> Section Name:</span>  {section_name}</li>
                        <li><span>Word Count:</span>  {word_count}</li>
                    </ul>
                </div>
    </div>
)







}
export default ArticleList;