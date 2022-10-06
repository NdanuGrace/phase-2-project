import React from "react";



function Reviews({ commentary }) {
    const { id, reader, title, comment } = commentary


    return(
        <div className="comments-div">
            <div key={id} className="comments-list">
                <h3> {title}</h3>
                <p><span>Comment:</span> {comment}</p>
                <p><span>Commenter:</span> {reader}</p>
            </div>
        </div>
    )
}

export default Reviews;