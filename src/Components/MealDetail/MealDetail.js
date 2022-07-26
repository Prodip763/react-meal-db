import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetail = () => {
    const {mealDetail} = useParams();
    const [meal, setMeal] = useState({});
    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetail}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals));
    },[])
    return(
        <div>
            <h2>Details of Meal: {mealDetail}</h2>
            <h3>Name: {meal.strMeal}</h3>
            <h4>Category: {meal.strCategory}</h4>
            <h5>Area: {meal.strArea}</h5>
            <p>Tags: {meal.strTags}</p>
        </div>
    );
};


export default MealDetail;