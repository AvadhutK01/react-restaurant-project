import React from 'react';
import './MealsList.css';
import MealItemComponent from '../MealItem/MealItemComponent';

const MealsListComponent = () => {
    const mealsList = [
        { Id: 1, name: 'Butter Chicken', description: 'Creamy and flavorful chicken curry', price: '250', image: 'Butter_chicken.jpg' },
        { Id: 2, name: 'Vegetable Biryani', description: 'Fragrant rice with mixed vegetables', price: '180', image: 'Veg_biryani.jpg' },
        { Id: 3, name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', price: '210', image: 'paneer_tikka.jpg' },
        { Id: 4, name: 'Chicken Biryani', description: 'Spiced rice with tender chicken pieces', price: '200', image: 'chicken_biryani.jpg' },
    ];

    return (
        <div className="meals-list">
            {mealsList.map((meal) => (
                <MealItemComponent key={meal.Id} meal={meal} />
            ))}
        </div>
    );
};

export default MealsListComponent;
