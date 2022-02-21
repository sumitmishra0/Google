
import google from "./google.png";
import './Search.css';
import { useState, useEffect, useReducer } from "react";
import JSONDATA from "./db.json";


export const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const az = (e) => {
        let arr = JSONDATA;
         if(e == "ase"){
            arr.sort((a,b) => a.title - b.title)
         }
         
         else if(e == "desc"){
            arr.sort((a,b) => b.title - a.title)
         }
         else if(e == "Qase"){
            arr.sort((a,b) => a.quality - b.quality)
         }
         
         else if(e == "Qdesc"){
            arr.sort((a,b) => b.quality - a.quality)
         }
         else if(e == "Dase"){
            arr.sort((a,b) => a.creation_date - b.creation_date)
         }
         
         else if(e == "Ddesc"){
            arr.sort((a,b) => b.creation_date - a.creation_date)
         }
         setSearchTerm(arr)
    }
    
    return (
        <div id="navbar">
        <div className="searchInput">
            <img  src={google} className="googleSearchImg" />

            <input type="searchtext" className="search-box" placeholder="Search"  onChange={event => {setSearchTerm(event.target.value)} }/>
            <button className="search">Search</button>
        </div>

        <div>
            <button onClick={() => az("ase")} >Sort A-Z</button>
            <button onClick={() => az("desc")} >Sort Z-A</button>
            <button onClick={() => az("Dase")} >Sort by Date (Asc) </button>
            <button onClick={() => az("Ddesc")}  > Sort by Date (Desc) </button>
            <button  onClick={() => az("Qase")}  > Sort by quality (Asc)</button>
            <button  onClick={() => az("Qdesc")}  > Sort by quality (Desc)</button>
            <button  onClick={() => az("ase")} > Filter Explicit</button>
        </div>
        
        {JSONDATA.filter((val) => {
            if(searchTerm == ""){
                return val
            }
            else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
            }
        }).map((val,key) => {
            return (
                <div className="data" key={key}>
                    <p>{val.url}</p>
                    <h3> <span className="title">{val.title}</span> | <span>{val.author}</span> </h3>
                    <p className="description">{val.description}</p>
                    <h3> Creation Date: {val.creation_date}</h3>
                    <h3> Explicit: {val.explicit} Quality:  {val.quality} </h3>
                </div>
            )
        })
        }
        </div>
    )
}


export default Search;