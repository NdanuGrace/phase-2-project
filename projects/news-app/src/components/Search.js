import React, {useState} from "react";

function Search({searchItem}){
    const [item, setItem ]= useState("");



function handleSubmit(event){
    event.preventDefault();

    searchItem(item);
}







return (
    <div className="search">
    <form className="text-form" onSubmit={handleSubmit}>
        <input type="text" 
            placeholder="economy"
            onChange={(e)=> setItem(e.target.value)}
            autoComplete="none"
            // required
            // minlength="5"
        />
        <button type="submit" className="btn-submit">Search</button>
    </form>
</div>  
)
}

export default Search;