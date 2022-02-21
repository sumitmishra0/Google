import google from "./google.png";
import './App.css';
import { useState, useEffect, useReducer } from "react";


export const Home = () => {
    return (
        <div className="googleInput">
            <img  src={google} className="googleImg" />

            <input type="text" className="search-box" />
        </div>
    )
}
