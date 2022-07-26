import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb,idMeal } = props.meal;
    const {  meal } = props;
    const navigate =useNavigate();
    const handleAddToOrder = () =>{
        const path = `/meal/${idMeal}`;
        navigate(path);
    }
    
    return (
        <div className="bg-white  dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <img className="w-max h-max rounded-lg" src={strMealThumb} alt="" />
            <h4 className="text-slate-900 dark:text-white mt-5 text-base font-bold tracking-tight">{strMeal}</h4>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">{strInstructions.slice(0, 100)}</p>
            <Link className=" bg-slate-200 border-2   rounded-lg hover:border-indigo-300" to={'/meal/'+ idMeal}>Show Detail</Link><br></br>
            <button className=" bg-slate-200 border-2 mt-2   rounded-lg hover:border-indigo-300 " onClick={() => handleAddToOrder(meal)}>Add this food: {idMeal}</button>
        </div>
    )
}


export default Meal;