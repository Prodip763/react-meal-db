import React from "react";
import CustomLink from "../CustomLink/CustomLink";


const Header = () => {
    return(
        <div>
            <h2 className="text-6xl">Welcome to my mealdb website!!!</h2>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/About">About</CustomLink>
            <CustomLink to="/restaurant">Restaurant</CustomLink>
        </div>
    );
};



export default Header;