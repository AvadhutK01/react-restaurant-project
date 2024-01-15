import React, { useContext } from 'react';
import './MealsList.css';
import MealItemComponent from '../MealItem/MealItemComponent';
import productContext from '../../../context/ProductContext';

const MealsListComponent = () => {
    const prodCtx = useContext(productContext)
    const mealsList = prodCtx.products;

    return (
        <div className="meals-list">
            {mealsList.map((meal) => (
                <MealItemComponent key={meal.Id} meal={meal} />
            ))}
        </div>
    );
};

export default MealsListComponent;
