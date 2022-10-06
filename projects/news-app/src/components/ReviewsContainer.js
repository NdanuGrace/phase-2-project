import React, { useState, useEffect } from "react";
import Reviews from "./Reviews";
import NewReviewForm from "./NewReviewForm";

function ReviewsContainer() {
    const [comments, setComments] = useState([]);



  

    function addComment(newComment) {
        setComments([...comments, newComment]);
    }

    useEffect(() => {
        fetch("https://shrouded-refuge-64630.herokuapp.com/commentary")
        .then((res) => res.json())
        .then((comments) => setComments(comments))
    }, [])

    const commentList = comments.map((commentary) => {

        return <Reviews key= {commentary.id} commentary={commentary}/>
      });
    
      return (
        <div className="comments-container">
          <h5>share your reviews...</h5>
             <NewReviewForm addComment={addComment} />
       <div>    {commentList} </div>
        
        </div>
      );
    }

export default ReviewsContainer;